"use client";

import { AnimatePresence, motion, MotionConfig } from "motion/react";
import Image from "next/image";
import { useId, useState } from "react";

import ChatBox from "./chat-box";

const TanyaIsma = () => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MotionConfig
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 0.5
        }}
      >
        <div className="fixed inset-x-0 bottom-4 flex justify-center">
          <motion.button
            key="button"
            layoutId={`tanya-isma-${id}-trigger`}
            className="fixed left-1/2 bottom-4 -translate-x-1/2 size-[110px] origin-top-center"
            onClick={() => setIsOpen((prev) => !prev)}
            whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: 0.95
            }}
            aria-haspopup="dialog"
            aria-expanded={false}
          >
            <Image
              src="/assets/image/tanya-isma/button.png"
              alt="Isma"
              width={110}
              height={110}
            />
          </motion.button>

        </div>


        <AnimatePresence>
          {isOpen && (
            <ChatBox id={id} onClose={() => setIsOpen(false)} isOpen={isOpen} />
          )}
        </AnimatePresence>
      </MotionConfig>
    </>
  );
};

export default TanyaIsma;
