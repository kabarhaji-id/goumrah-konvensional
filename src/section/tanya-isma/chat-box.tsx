"use client";

import { motion } from "motion/react";

import { Send, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const ChatBox = ({ id, onClose }: { id: string; onClose: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isDelay, setIsDelay] = useState(true);
  const [input, setInput] = useState("");

  const timeNow = useMemo(() => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  useEffect(() => {
    const onEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };

    document.addEventListener("keydown", onEscKey, false);
    document.addEventListener("click", onClickOutside, false);

    const delayTimeout = setTimeout(() => {
      setIsDelay(false);
    }, 1000);

    return () => {
      document.removeEventListener("keydown", onEscKey);
      document.removeEventListener("click", onClickOutside);

      clearTimeout(delayTimeout);
    };
  }, [onClose]);

  const send = useCallback(() => {
    if (!input) {
      return;
    }

    window.open(
      `https://api.whatsapp.com/send/?phone=${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}&text=${input}`,
    );

    setInput("");
  }, [input]);

  return (
    <motion.div
      ref={ref}
      layoutId={`tanya-isma-${id}`}
      className="fixed bottom-24 z-50 flex h-80 w-11/12 origin-bottom touch-auto flex-col justify-between overflow-hidden rounded-2xl bg-white bg-[url(/assets/image/tanya-isma/chat-bg.png)] bg-cover bg-repeat shadow-2xl"
      variants={{
        hidden: {
          opacity: 0,
          scale: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      role="dialog"
      aria-modal="true"
    >
      <header className="flex h-16 items-center gap-1 bg-[#017B6B] px-2">
        <div className="relative p-1">
          <Image
            src="/assets/image/tanya-isma/avatar.jpeg"
            alt="Avatar WhatsApp"
            width={640}
            height={640}
            className="aspect-square h-10 w-10 rounded-full border-white/45 align-middle"
          />
        </div>
        <div className="flex grow flex-col text-white">
          <p className="text-lg font-bold">Tanya Isma - goumrah.id</p>
          <p className="text-sm text-[#f0f0f0]">
            Typically replies within 1 hour
          </p>
        </div>
        <button className="cursor-pointer" onClick={onClose}>
          <X className="size-5 text-white" />
        </button>
      </header>

      <main className="flex grow flex-col gap-2 px-3 py-4">
        <div className="relative max-w-[50%]">
          <svg
            width="21"
            height="9"
            viewBox="0 0 21 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0858 0H1.50734C0.501025 0 0.124973 1.31895 0.979977 1.84964L11.8263 8.58181C12.2209 8.82677 12.7323 8.76773 13.0607 8.43928L19.7929 1.70711C20.4229 1.07714 19.9767 0 19.0858 0Z"
              fill="#FCFEFB"
            />
          </svg>
          <div
            data-delay={isDelay}
            className="absolute left-2.5 top-0 flex min-h-9 flex-col items-center justify-center gap-1 rounded-[10px] bg-[#FCFEFB] px-2.5 pt-1"
          >
            {isDelay ? (
              <div className="flex items-center justify-center gap-1">
                <span className="size-1 animate-bounce rounded-full bg-[#30414C] [animation-delay:-0.3s]" />
                <span className="size-1 animate-bounce rounded-full bg-[#30414C] [animation-delay:-0.15s]" />
                <span className="size-1 animate-bounce rounded-full bg-[#30414C]" />
              </div>
            ) : (
              <>
                <p className="text-sm leading-[120%] text-[#30414C]">
                  Hello there! 🤝
                  <br />
                  How can we help?
                </p>
                <p className="self-end text-[10px] leading-4 text-[#606D75]">
                  {timeNow}
                </p>
              </>
            )}
          </div>
        </div>
      </main>

      <div className="flex items-center gap-1 p-2">
        <input
          className="h-8 grow rounded-[30px] !border-none bg-[#F7F7F8] px-2.5 py-2 text-sm text-[#30414C] !outline-none !ring-0 placeholder:text-[#768289]"
          placeholder="Type a message..."
          value={input}
          onInput={(e) => setInput(e.currentTarget.value)}
          onKeyDown={(e) => {
            e.stopPropagation();

            if (e.key === "Enter") {
              e.preventDefault();
              send();
            }
          }}
        />
        <button
          className="flex size-9 items-center justify-center rounded-full bg-[#017B6B] text-[#EEF0F1]"
          onClick={(e) => {
            e.preventDefault();

            send();
          }}
        >
          <Send className="size-5 fill-current" />
        </button>
      </div>
    </motion.div>
  );
};

export default ChatBox;
