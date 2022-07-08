import React, { useState, useEffect } from 'react';
import { BillingPlan } from './PricingBillingPlan';

interface PricingHeaderProps {
  selectedBillingPlan: string;
}

const PricingHeader: React.FC<PricingHeaderProps> = ({
  selectedBillingPlan,
}) => {
  const [inputValue, setInputValue] = useState<number>(100000);
  const [computedPageViews, setComputedPageViews] = useState(100);
  const [price, setPrice] = useState<number>(16);
  const [progress, setProgress] = useState<number>();

  const minVal = 10000;
  const maxVal = 200000;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(+e.target.value);
  };

  useEffect(() => {
    if (inputValue < 100000) {
      setComputedPageViews(+inputValue.toString().slice(0, 2));
      return;
    }

    if (inputValue >= 100000) {
      setComputedPageViews(+inputValue.toString().slice(0, 3));
      return;
    }
  }, [inputValue]);

  useEffect(() => {
    if (selectedBillingPlan === BillingPlan.MONTHLY)
      setPrice(inputValue * 0.00016);

    if (selectedBillingPlan === BillingPlan.YEARLY)
      setPrice(inputValue * 0.00016 * 0.75);

    setProgress((inputValue * 100) / maxVal);
  }, [selectedBillingPlan, inputValue]);

  return (
    <header className="grid gap-4 p-8 pb-0 sm:flex sm:items-center sm:px-12 sm:py-16 sm:pb-0 sm:flex-wrap">
      <h4 className="uppercase tracking-widest text-app-neutral-blue-grayish font-bold text-center sm:flex-1 sm:text-left">
        ${computedPageViews}
        {inputValue > 990000 ? 'mio+' : 'k'} Pageviews
      </h4>

      <div className="relative w-full text-center sm:order-3">
        <div
          className="h-2 absolute top-1/2 left-0 -translate-y-1/2 bg-app-primary-cyan-strong rounded-full block"
          style={{ width: `${progress}%` }}
        ></div>
        <input
          className="w-full my-8"
          type="range"
          id="price"
          name="price"
          min={minVal}
          max={maxVal}
          step="10000"
          value={inputValue}
          onChange={onChangeHandler}
        />
      </div>

      <div className="flex items-center justify-center gap-1 sm:justify-start sm:order-2">
        <h2 className="text-5xl font-bold">${price.toFixed(2)}</h2>
        <h4 className="text-app-neutral-blue-grayish">/ month</h4>
      </div>
    </header>
  );
};

export default PricingHeader;
