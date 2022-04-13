import { useEffect, useState } from 'react';

const FOCUSABLE_ELEMENT_SELECTORS =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, [tabindex="0"], [contenteditable]';

const eventHandler = ({
  el,
  escapeFunction,
  focusEl,
}: {
  el: React.RefObject<any>;
  escapeFunction: (props?: any) => any;
  focusEl?: React.RefObject<any> | null;
}) => {
  // Get all focusable elements inside "el" element
  const focusableElements = el?.current?.querySelectorAll(
    FOCUSABLE_ELEMENT_SELECTORS
  ) as HTMLElement[];

  // From focusable elements array get first and last focusable elements
  const firstFocusableEl = focusableElements[0];
  const lastFocusableEl = focusableElements[focusableElements.length - 1];

  const elementToFocus = focusEl?.current || firstFocusableEl;
  //move focus to element
  elementToFocus.focus();

  return (e: KeyboardEvent) => {
    if (e.code === 'Escape' && escapeFunction) escapeFunction();
    if (e.code === 'Tab') {
      if (e.shiftKey && document.activeElement === firstFocusableEl) {
        e.preventDefault();
        lastFocusableEl?.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusableEl) {
        e.preventDefault();
        firstFocusableEl?.focus();
      }
    }
  };
};

export const useFocusTrap = (escapeFunction?: (props?: any) => any) => {
  const [_el, _setEl] = useState<React.RefObject<any> | null>(null);
  const [_focusEl, _setFocusEl] = useState<React.RefObject<any> | null>(null);
  const [_keypressHandler, _setKeypressHandler] = useState(() => {});

  let keypressHandler: (e: KeyboardEvent) => void = () => {};

  useEffect(() => {
    document.removeEventListener('keydown', keypressHandler, false);
    if (_el?.current) {
      keypressHandler = eventHandler({
        el: _el,
        escapeFunction: () => {
          destroy();
          escapeFunction && escapeFunction();
        },
        focusEl: _focusEl,
      });
      document.addEventListener('keydown', keypressHandler, false);
    }
  }, [_el?.current, _focusEl?.current]);

  const init = (el: React.RefObject<any>, focusEl?: React.RefObject<any>) => {
    _setEl(el);
    focusEl && _setFocusEl(focusEl);
  };

  const destroy = () =>
    document.removeEventListener('keydown', keypressHandler, false);

  useEffect(() => {
    return () => destroy();
  }, []);

  return {
    /** initialise focus trap */
    initFocustTrap: init,
    /** destroy focus trap */
    destroyFocusTrap: destroy,
  };
};
