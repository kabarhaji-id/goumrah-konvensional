import React from 'react';

export interface FeatureItemProps {
  title: string;
  description: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className="mb-4">
      <h3 className="font-bold text-sm mb-2">
        <span aria-hidden="true">🔹 </span>{title}
      </h3>
      <p className="text-sm tracking-wide leading-6 text-justify">{description}</p>
    </div>
  );
};