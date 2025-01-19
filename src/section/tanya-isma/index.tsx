"use client";

import { AnimatePresence, MotionConfig, motion } from "motion/react";
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
          <Image
            src="/assets/image/tanya-isma/button.png"
            alt="Isma"
            width={225}
            height={225}
          />
        </motion.button>

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
