import React from 'react';

interface ActionButtonProps {
  text: string;
  primary: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ text, primary, onClick }) => {
  const baseClasses = "overflow-hidden gap-2.5 self-stretch px-4 py-2 w-full rounded-xl min-h-[36px] focus:outline-none focus:ring-2 focus:ring-offset-2";
  const primaryClasses = "bg-teal-600 text-white focus:ring-teal-500 hover:bg-teal-700";
  const secondaryClasses = "border border-solid border-white hover:bg-white hover:text-black focus:ring-white";

  return (
    <button
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};