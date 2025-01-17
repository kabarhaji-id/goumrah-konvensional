"use client";

import { AnimatePresence, MotionConfig, motion } from "motion/react";
import Image from "next/image";
import { useId, useState } from "react";

import ChatBox from "./chat-box";
import Notification from "./notification";

const TanyaIsma = () => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  return (
    <>
      <MotionConfig
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 0.5,
        }}
      >
        <motion.button
          key="button"
          layoutId={`tanya-isma-${id}-trigger`}
          className="absolute bottom-1.5 size-[150px] origin-top-left"
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
          aria-haspopup="dialog"
          aria-expanded={false}
        >
          {notificationCount > 0 && (
            <>
              <span className="absolute left-2/3 flex size-5 animate-ping rounded-full bg-red-600" />
              <div className="absolute left-2/3 flex size-5 items-center justify-center rounded-full bg-red-600">
                <p className="text-xs font-bold leading-none tracking-normal text-white">
                  {notificationCount}
                </p>
              </div>
            </>
          )}
          <Image
            src="/assets/image/tanya-isma/button.png"
            alt="Isma"
            width={225}
            height={225}
          />
        </motion.button>

        <AnimatePresence>
          {isOpen && <ChatBox id={id} onClose={() => setIsOpen(false)} />}
        </AnimatePresence>
      </MotionConfig>

      <Notification ping={() => setNotificationCount((prev) => prev + 1)} />
    </>
  );
};

export default TanyaIsma;
