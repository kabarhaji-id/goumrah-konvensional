'use client';

import { trackEvent } from '@/lib/analytics';

interface TrackEventButtonProps {
  action: string;
  category: string;
  label?: string;
  value?: number;
  children: React.ReactNode;
  className?: string;
}

/**
 * Komponen reusable untuk tracking event
 */
export default function TrackEventButton({
                                           action,
                                           category,
                                           label,
                                           value,
                                           children,
                                           className,
                                         }: TrackEventButtonProps) {
  const handleClick = () => {
    trackEvent({ action, category, label, value });
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
