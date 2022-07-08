import React from 'react';
import Toggle from '../Toggle';

const PricingBillingPlan: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-4 p-4 sm:p-12 sm:pt-4 text-app-neutral-blue-grayish">
      <button>Monthly Billing</button>

      <Toggle />

      <div className="relative flex items-center gap-2">
        <button>Yearly Billing</button>
        <span className="absolute t-0 r-0 translate-x-[125%] rounded-full py-1 px-2 text-app-primary-red-light bg-app-primary-red-grayish-light text-[.625rem] font-bold shrink-0">
          25% discount
        </span>
      </div>
    </div>
  );
};

export default PricingBillingPlan;
