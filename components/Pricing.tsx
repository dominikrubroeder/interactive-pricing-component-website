import React, { ChangeEvent, useEffect, useState } from 'react';
import IconCheck from './svg/IconCheck';
import Toggle from './Toggle';

const Pricing: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(100000);
  const [computedPageViews, setComputedPageViews] = useState(100);
  const [price, setPrice] = useState<number>(16);

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
    setPrice(inputValue * 0.00016);
  }, [inputValue]);

  return (
    <div className="max-w-xl w-full bg-white rounded-xl drop-shadow-2xl m-auto">
      <header className="grid gap-4 p-4 sm:px-12 sm:py-16 sm:pb-0">
        <div className="sm:flex sm:items-center sm:justify-between sm:gap-2 sm:flex-wrap">
          <h4 className="uppercase tracking-widest text-app-neutral-blue-grayish font-bold">
            ${computedPageViews}
            {inputValue > 990000 ? 'mio+' : 'k'} Pageviews
          </h4>
          <div className="flex items-center gap-1">
            <h2 className="text-5xl font-bold">${price.toFixed(2)}</h2>
            <h4 className="text-app-neutral-blue-grayish">/ month</h4>
          </div>
        </div>

        <input
          className="w-full my-8"
          type="range"
          id="price"
          name="price"
          min="10000"
          max="200000"
          step="10000"
          value={inputValue}
          onChange={onChangeHandler}
        />
      </header>

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
    </div>
  );
};

export default Pricing;
