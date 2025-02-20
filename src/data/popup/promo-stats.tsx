import React from 'react';

interface StatisticItemProps {
  label: string;
  value: string;
  unit: string;
}

export const StatisticItem: React.FC<StatisticItemProps> = ({ label, value, unit }) => {
  return (
    <div className="grid grid-rows-2 gap-1">
      <div className="whitespace-nowrap overflow-visible" style={{ fontSize: 'xx-small' }}>
        {label}
      </div>
      <div className="grid grid-cols-2 items-center whitespace-nowrap">
        <div className="text-3xl font-bold">{value} <span style={{ fontSize: 'xx-small' }}>{unit}</span></div>
      </div>
    </div>
  );
};
