import React from 'react';
import IconCheck from '../svg/IconCheck';

const PricingFooter: React.FC = () => {
  return (
    <footer className="border-t p-4 sm:px-12 sm:py-8 sm:flex sm:items-center sm:justify-between sm:gap-2">
      <ul className="grid gap-2 text-app-neutral-blue-grayish">
        <li className="flex items-center gap-4">
          <IconCheck /> Unlimited websites
        </li>
        <li className="flex items-center gap-4">
          <IconCheck /> 100% data ownership
        </li>
        <li className="flex items-center gap-4">
          <IconCheck /> Email reports
        </li>
      </ul>

      <button className="text-app-primary-blue-pale bg-app-neutral-blue-desaturated-dark rounded-full px-12 py-3 text-sm shrink-0">
        Start my trial
      </button>
    </footer>
  );
};

export default PricingFooter;
