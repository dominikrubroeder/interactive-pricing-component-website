import React from 'react';

interface ToggleProps {
  initialValue: boolean;
  onClick: (toggledState: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ initialValue, onClick }) => {
  return (
    <div
      className="flex items-center w-9 h-4.5 p-1 rounded-full bg-app-neutral-blue-grayish-light cursor-pointer transition-all hover:bg-app-primary-cyan-strong"
      onClick={() => onClick(!initialValue)}
    >
      <div
        className={`rounded-full w-3.5 h-3.5 bg-white shrink-0 transition-all ${
          initialValue ? 'translate-x-full' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
