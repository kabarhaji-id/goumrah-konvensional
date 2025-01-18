"use client";

import { useEffect, useRef } from "react";

const Notification = ({ ping }: { ping?: () => void }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      if (ping) ping();

      if (audioRef.current) {
        console.log("Hello World");
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    }, 60_000);

    return () => clearInterval(notificationInterval);
  }, [ping, audioRef]);

  return <audio ref={audioRef} hidden src="/audio/whatsapp-notification.mp3" />;
};

export default Notification;
