import React, { useState } from 'react';
import Toggle from '../Toggle';

export enum BillingPlan {
  MONTHLY = 'Monthly',
  YEARLY = 'Yearly',
}

const PricingBillingPlan: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-4 p-12 px-8 sm:pt-8 text-app-neutral-blue-grayish">
      <button>{BillingPlan.MONTHLY} Billing</button>

      <Toggle />

      <div className="relative flex items-center gap-2">
        <button>{BillingPlan.YEARLY} Billing</button>

        <span className="absolute -top-2 right-3 translate-x-full rounded-full py-1 px-2 text-app-primary-red-light bg-app-primary-red-grayish-light text-[.625rem] font-bold shrink-0 -z-10 sm:hidden">
          - 25%
        </span>

        <span className="hidden absolute t-0 r-0 translate-x-[125%] rounded-full py-1 px-2 text-app-primary-red-light bg-app-primary-red-grayish-light text-[.625rem] font-bold shrink-0 sm:block">
          25% discount
        </span>
      </div>
    </div>
  );
};

export default PricingBillingPlan;
