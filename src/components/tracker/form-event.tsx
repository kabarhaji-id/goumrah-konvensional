'use client';

import { event } from 'nextjs-google-analytics';

interface TrackFormSubmitProps {
  action: string;
  category: string;
  label?: string;
  children: React.ReactNode;
}

/**
 * Komponen reusable untuk tracking form submit
 */
export default function TrackFormSubmit({
                                          action,
                                          category,
                                          label,
                                          children
                                        }: TrackFormSubmitProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    event(action, {
      event_category: category,
      event_label: label,
    });
    alert('Form submitted!');
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}