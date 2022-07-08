import React, { useState } from 'react';
import PricingHeader from './PricingHeader';
import PricingBillingPlan from './PricingBillingPlan';
import PricingFooter from './PricingFooter';
import { BillingPlan } from './PricingBillingPlan';

const Pricing: React.FC = () => {
  const [selectedBillingPlan, setSelectedBillingPlan] = useState<string>(
    BillingPlan.MONTHLY
  );

  const billingPlanOnChange = (toggledState: boolean) => {
    if (toggledState === true) setSelectedBillingPlan(BillingPlan.YEARLY);
    if (toggledState === false) setSelectedBillingPlan(BillingPlan.MONTHLY);
  };

  return (
    <div className="relative bg-white shadow-2xl rounded-xl z-50 mx-4 mb-4 sm:mb-0 sm:max-w-xl sm:m-auto sm:w-full">
      <PricingHeader selectedBillingPlan={selectedBillingPlan} />

      <PricingBillingPlan
        isMonthly={selectedBillingPlan === BillingPlan.MONTHLY ? false : true}
        onChange={billingPlanOnChange}
      />

      <PricingFooter />
    </div>
  );
};

export default Pricing;
