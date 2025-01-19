"use client";

import { useEffect, useRef } from "react";

const Notification = ({
  interval,
  ping,
}: {
  interval: number;
  ping?: () => void;
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      if (ping) ping();

      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    }, interval);

    return () => clearInterval(notificationInterval);
  }, [ping, interval]); // Added 'interval' as a dependency

  return <audio ref={audioRef} hidden src="/audio/whatsapp-notification.mp3" />;
};

export default Notification;
