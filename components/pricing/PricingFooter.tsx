import React from 'react';
import IconCheck from '../svg/IconCheck';

const benefits: string[] = [
  'Unlimited websites',
  '100% data ownership',
  'Email reports',
];

const PricingFooter: React.FC = () => {
  return (
    <footer className="text-center border-t sm:px-12 sm:py-8 sm:flex sm:items-center sm:justify-between sm:gap-2">
      <ul className="grid gap-2 my-8 text-app-neutral-blue-grayish">
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className="flex items-center justify-center gap-4 sm:justify-start"
          >
            <IconCheck /> {benefit}
          </li>
        ))}
      </ul>

      <button className="text-app-primary-blue-pale bg-app-neutral-blue-desaturated-dark rounded-full px-12 py-3 text-sm shrink-0 mb-8 sm:mb-0">
        Start my trial
      </button>
    </footer>
  );
};

export default PricingFooter;
