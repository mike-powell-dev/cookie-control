import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import UpdatePreferencesStyled from './updatePreferences.styled';
import { UpdatePreferencesProps } from './updatePreferences.type';
import { useCookieControl } from '../../utils/hooks/useCookieControl';
import Button from '../button';
import CloseButton from '../closeButton';
import CookieSummaryWithToggle from './cookieSummaryWithToggle';
import { isBrowser } from '../../utils/isBrowser';
import { useFocusTrap } from '../../utils/hooks/useFocusTrap';

const UpdatePreferences = (props: UpdatePreferencesProps) => {
  const {
    analytics,
    marketing,
    functional,
    setAnalytics,
    setMarketing,
    setFunctional,
    showUpdatePreferences,
    toggleShowUpdatePreferences,
    updatePreferences,
  } = useCookieControl();

  const appRoot = isBrowser() && document.getElementById('zen-cc-app-root');
  const modalRoot = isBrowser() && document.getElementById('zen-cc-modal-root');
  const returnFocusToEl = isBrowser() && document.getElementById('zen-cc-tup');

  const { initFocustTrap, destroyFocusTrap } = useFocusTrap(() => closeModal());

  const el = useRef<HTMLDivElement>(null);

  const [_isVisible, _setIsVisible] = useState(false);

  const animationLength = 400;

  const eventHandler = (e: MouseEvent) => {
    // If interaction with element outside of modal
    // or a link click occurs
    // then close modal
    if (
      (el.current &&
        !el.current.contains(e.target as Node) &&
        showUpdatePreferences) ||
      ['A'].includes((e.target as Node).nodeName)
    )
      closeModal();
  };

  const closeModal = () => {
    // Remove event listener
    document.removeEventListener('click', eventHandler, false);
    // Set visibility of component to trigger css animation
    _setIsVisible(false);
    // Wait till animation has finished before updating context to remove element from the DOM
    setTimeout(() => {
      destroyFocusTrap();
      toggleShowUpdatePreferences();
      // Reset app root "accessibility"
      if (appRoot) {
        appRoot.setAttribute('tabindex', '0');
        appRoot.setAttribute('aria-hidden', 'false');
      }
      // Return focus back to DOM
      returnFocusToEl && returnFocusToEl.focus();
    }, animationLength);
  };

  useEffect(() => {
    if (showUpdatePreferences) {
      // Add timeout to prevent eventHandler auto executing
      setTimeout(() => {
        // Update app root to be "unaccessable"
        if (appRoot) {
          appRoot.setAttribute('tabindex', '-1');
          appRoot.setAttribute('aria-hidden', 'true');
        }
        // Add event listener to close modal
        document.addEventListener('click', eventHandler, false);
        // Add key listener for keyboard navigation
        initFocustTrap(el);
        // Set visibility of component to trigger css animation
        _setIsVisible(true);
      }, 100);
    }
  }, [showUpdatePreferences]);

  useEffect(() => {
    // Clear event listeners etc on component unmount
    return () => closeModal();
  }, []);

  return showUpdatePreferences && modalRoot
    ? ReactDOM.createPortal(
        <UpdatePreferencesStyled
          aria-modal="true"
          className={`zen-cc-up ${_isVisible ? 'open' : 'closed'}`}
          role="dialog"
        >
          <div className="zen-cc-up__modal" ref={el}>
            <div className="zen-cc-up__inner">
              <div className="zen-cc-up__close">
                <CloseButton onClick={() => closeModal()} />
              </div>
              <h2 className="zen-cc-up__title">Cookie Preferences</h2>
              {props.content && (
                <div
                  className="zen-cc-up__section"
                  dangerouslySetInnerHTML={{ __html: props.content }}
                />
              )}
              <CookieSummaryWithToggle
                summary={props.necessary}
                title="Necessary Cookies"
              />
              <CookieSummaryWithToggle
                isChecked={functional}
                label="Functional"
                onClick={() => setFunctional(!functional)}
                summary={props.functional}
                title="Functional Cookies"
              />
              <CookieSummaryWithToggle
                isChecked={analytics}
                label="Analytics"
                onClick={() => setAnalytics(!analytics)}
                summary={props.analytics}
                title="Analytical Cookies"
              />
              <CookieSummaryWithToggle
                isChecked={marketing}
                label="Marketing"
                onClick={() => setMarketing(!marketing)}
                summary={props.marketing}
                title="Marketing Cookies"
              />
              <div className="zen-cc-up__save">
                <Button
                  label="Save Preferences"
                  onClick={() => {
                    updatePreferences();
                    closeModal();
                  }}
                />
              </div>
            </div>
          </div>
        </UpdatePreferencesStyled>,
        modalRoot
      )
    : null;
};

export default UpdatePreferences;
