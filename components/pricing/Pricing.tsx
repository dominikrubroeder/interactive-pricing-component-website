import React from 'react';
import PricingHeader from './PricingHeader';
import PricingBillingPlan from './PricingBillingPlan';
import PricingFooter from './PricingFooter';

const Pricing: React.FC = () => {
  return (
    <div className="relative bg-white shadow-2xl rounded-xl z-50 mx-4 mb-4 sm:mb-0 sm:max-w-xl sm:m-auto sm:w-full">
      <PricingHeader />
      <PricingBillingPlan />
      <PricingFooter />
    </div>
  );
};

export default Pricing;
