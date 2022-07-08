import React from 'react';
import PatternCircles from '../svg/PatternCircles';

const PricingHeadline: React.FC = () => {
  return (
    <header className="relative grid gap-2 text-center my-12 px-4 animate-fadeDown sm:my-24">
      <h1 className="text-3xl font-bold text-app-neutral-blue-desaturated-dark z-10">
        Simple, traffic based pricing
      </h1>
      <p className="text-app-neutral-blue-grayish z-10">
        Sign up for our 30 day trial. No credit card required.
      </p>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto z-0">
        <PatternCircles />
      </div>
    </header>
  );
};

export default PricingHeadline;
