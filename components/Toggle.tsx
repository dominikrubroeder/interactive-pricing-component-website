import React, { useState } from 'react';

const Toggle: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className="flex items-center w-9 h-4.5 p-1 rounded-full bg-app-neutral-blue-grayish-light cursor-pointer transition-all hover:bg-app-primary-cyan-strong"
      onClick={() => setIsOn((previousState) => !previousState)}
    >
      <div
        className={`rounded-full w-3.5 h-3.5 bg-white shrink-0 transition-all ${
          isOn ? 'translate-x-full' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
