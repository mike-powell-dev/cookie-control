import React from 'react';
import Toggle from '../../toggle';
import { CookieSummaryWithToggleProps } from './cookieSummaryWithToggle.type';

const CookieSummaryWithToggle = ({
  isChecked,
  label,
  onClick,
  summary,
  title,
}: CookieSummaryWithToggleProps) => {
  if (!summary && !label) return null;
  return (
    <div className="zen-cc-up__section">
      <h3 className="zen-cc-up__heading">{title}</h3>
      {summary && (
        <div
          className="zen-cc-up__summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      )}
      {label && onClick && (
        <Toggle
          id={`cp-${label.toLowerCase().replace(/ /g, '-')}`}
          isChecked={!!isChecked}
          label={label}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default CookieSummaryWithToggle;
