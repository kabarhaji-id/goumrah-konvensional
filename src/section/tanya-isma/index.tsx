"use client";

import PriorityImage from "@/components/ui/priority-image";
import { useId, useState } from "react";

import ChatBox from "./chat-box";

const TanyaIsma = () => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <div className="fixed inset-x-0 bottom-4 flex">
          <button
            key="button"
            className="fixed left-1/2 bottom-4 -translate-x-1/2 size-[110px] origin-top-center"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-haspopup="dialog"
            aria-expanded={false}
          >
            <PriorityImage
              src="/assets/image/tanya-isma/button.png"
              alt="Isma"
              width={110}
              height={110}
            />
          </button>

        </div>

          {isOpen && (
            <ChatBox id={id} onClose={() => setIsOpen(false)} isOpen={isOpen} />
          )}
    </>
  );
};

export default TanyaIsma;
