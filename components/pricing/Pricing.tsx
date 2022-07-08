import React from 'react';
import PricingHeader from './PricingHeader';
import PricingBillingPlan from './PricingBillingPlan';
import PricingFooter from './PricingFooter';

const Pricing: React.FC = () => {
  return (
    <div className="relative max-w-xl w-full bg-white drop-shadow-2xl rounded-xl m-auto z-50">
      <PricingHeader />
      <PricingBillingPlan />
      <PricingFooter />
    </div>
  );
};

export default Pricing;
