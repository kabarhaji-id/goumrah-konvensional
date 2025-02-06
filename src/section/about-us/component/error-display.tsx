import * as React from 'react';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => (
  <div
    className="absolute inset-0 flex justify-center items-center bg-red-50"
    role="alert"
  >
    <span className="text-red-500">{message}</span>
  </div>
);

export default ErrorDisplay;