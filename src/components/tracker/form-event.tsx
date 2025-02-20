'use client';

import { trackEvent } from '@/lib/analytics';

interface TrackFormSubmitProps {
  action: string;
  category: string;
  label?: string;
  children: React.ReactNode;
}

/**
 * Komponen reusable untuk tracking form submission
 */
export default function TrackFormSubmit({
                                          action,
                                          category,
                                          label,
                                          children,
                                        }: TrackFormSubmitProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent({ action, category, label });
    alert('Form submitted!');
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}
