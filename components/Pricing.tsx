import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="max-w-xl w-full bg-white rounded-xl drop-shadow-2xl">
      <header className="grid gap-4 p-4 sm:px-12 sm:py-8 sm:pb-0">
        <div className="sm:flex sm:items-center sm:justify-between sm:gap-2 sm:flex-wrap">
          <h4 className="uppercase tracking-widest text-app-neutral-blue-grayish font-bold">
            100k Pageviews
          </h4>
          <div className="flex items-center gap-1">
            <h2 className="text-5xl font-bold">$16.00</h2>
            <h4 className="text-app-neutral-blue-grayish">/ month</h4>
          </div>
        </div>

        <input
          className="w-full"
          type="range"
          id="price"
          name="price"
          min="0"
          max="1000000"
        />
      </header>

      <div className="flex items-center justify-center gap-4 p-4 sm:px-12 sm:py-8 text-app-neutral-blue-grayish">
        <button>Monthly Billing</button>
        <p>Add toggle</p>
        <div className="flex items-center gap-2">
          <button>Yearly Billing</button>
          <span className="rounded-full py-1 px-2 text-app-primary-red-light bg-app-primary-red-grayish-light text-xs font-bold">
            25% discount
          </span>
        </div>
      </div>

      <footer className="border-t p-4 sm:px-12 sm:py-8 sm:flex sm:items-center sm:justify-between sm:gap-2">
        <ul className="text-app-neutral-blue-grayish">
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>

        <button className="text-app-primary-blue-pale bg-app-neutral-blue-desaturated-dark rounded-full px-12 py-3 text-sm shrink-0">
          Start my trial
        </button>
      </footer>
    </div>
  );
};

export default Pricing;
