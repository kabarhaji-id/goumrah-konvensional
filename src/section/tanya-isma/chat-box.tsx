"use client";

import { motion } from "motion/react";
import { MessageSquare, Send, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const ChatBox = ({
  id,
  onClose,
  isOpen,
}: {
  id: string;
  onClose: () => void;
  isOpen: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isDelay, setIsDelay] = useState(true);
  const [input, setInput] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [userMessage, setUserMessage] = useState({ message: "", fullName: "" });
  const [showInitialMessage, setShowInitialMessage] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [timeNow, setTimeNow] = useState<string>(() => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeNow(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    }, 1000);

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
      clearInterval(intervalId);
      document.removeEventListener("keydown", onEscKey);
      document.removeEventListener("click", onClickOutside);

      clearTimeout(delayTimeout);
    };
  }, [onClose]);

  const send = useCallback(() => {
    if (input) {
      window.open(
        `${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}${encodeURIComponent(
          `Nama: ${formData.fullName}\nEmail: ${formData.email}\nNo. Telp: ${formData.phoneNumber}\nPesan: ${userMessage.message ? userMessage.message : input}`,
        )}`,
      );

      setShowInitialMessage(false);
      setInput("");
      setIsDelay(true);

      setTimeout(() => {
        setIsDelay(false);
      }, 3000);
    }
  }, [
    input,
    formData,
    userMessage,
    setShowInitialMessage,
    setIsDelay,
    setInput,
  ]);

  const handleSubmitTochat = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      alert("Please fill in all required fields.");
      return;
    }

    const message = `Nama Lengkap: ${formData.fullName}\nEmail: ${formData.email}\nNo. Telp: ${formData.phoneNumber}\nPesan: ${input}`;
    setUserMessage({
      message: message, // Nilai dari variabel `message`
      fullName: formData.fullName, // Nilai dari `formData.fullName`
    });

    setInput(""); // Reset input field
    setFormData({ fullName: "", email: "", phoneNumber: "" }); // Reset formulir
    setShowForm(false); // Sembunyikan formulir
    setShowOptions(false); // Sembunyikan pilihan (jika perlu)
    setIsDelay(true);

    setTimeout(() => {
      send();
      setIsDelay(false);
    }, 6000);
  };

  return (
    <motion.div
      ref={ref}
      layoutId={`tanya-isma-${id}`}
      className="fixed bottom-24 z-50 flex min-h-[520px] w-[375px] origin-bottom touch-auto flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
      variants={{
        hidden: { opacity: 0, scale: 0, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0 },
      }}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      exit="hidden"
      role="dialog"
      aria-modal="true"
    >
      <header className="flex items-center justify-between bg-sky-500 p-4">
        <div className="flex items-center">
          <div className="relative mr-2 h-8 w-8">
            <Image
              src="/assets/image/tanya-isma/avatar.jpeg"
              alt="Icon Isma"
              fill
              style={{ borderRadius: "50%" }}
            />
          </div>
          <span className="text-lg font-bold text-white">
            Tanya Isma-goumrah.id
          </span>
        </div>
        <button className="cursor-pointer" onClick={onClose}>
          <X className="size-5 text-white" />
        </button>
      </header>

      <main className="content-area flex flex-1 flex-col justify-end overflow-y-auto px-4 py-6">
        {showInitialMessage && (
          <div className="mb-4 flex items-start">
            <div className="mr-2 rounded-full bg-teal-200 p-2.5">
              <MessageSquare className="h-5 w-5 text-gray-600" />
            </div>
            <div className="rounded-lg bg-teal-100 p-3">
              <p className="text-gray-700">
                Halo, Perkenalkan namaku Isma dari goumrah.id. Ada yang bisa
                Isma bantu?
              </p>
              <span className="text-sm text-gray-500">{timeNow}</span>
            </div>
          </div>
        )}

        {showOptions && (
          <>
            <div className="mb-4 rounded-lg border border-gray-200 p-4">
              <p className="mb-2 text-center text-xs text-gray-500">
                Informasi & data yang diberikan hanya untuk mempermudah
                pemesanan, konsultasi, dan layanan umrah
              </p>
              <form onSubmit={handleSubmitTochat} className="space-y-2">
                {/* Input Fields */}
                <div>
                  <label htmlFor="fullName" className="text-gray-600">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="text-gray-600">
                    No Telp
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Phone Number" // Ubah placeholder
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.currentTarget.value)}
                    placeholder="Type a message here..."
                    className="mr-2 w-full rounded-lg border border-gray-300 px-4 py-2"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-blue-500 p-2"
                  >
                    <Send className="h-5 w-5 text-white" />
                  </button>
                </div>
              </form>
            </div>
          </>
        )}

        {/* Tampilkan pesan pengguna dan input pesan setelah mengirimkan formulir */}
        {!showOptions && !showForm && (
          <div>
            {userMessage && ( // Tampilkan userMessage di sini
              <>
                <div className="mb-4 flex items-end">
                  <div className="rounded-lg bg-blue-100 p-3">
                    <p className="text-gray-700">{userMessage.message}</p>
                    <span className="text-sm text-gray-500">{timeNow}</span>
                  </div>
                  <div className="mr-2 rounded-full bg-blue-200 p-2.5">
                    <MessageSquare className="h-5 w-5 text-gray-600" />
                  </div>
                </div>

                <div className="mb-4 flex items-start">
                  {" "}
                  {/* Pesan bot baru */}
                  <div className="mr-2 rounded-full bg-gray-200 p-2.5">
                    <MessageSquare className="h-5 w-5 text-gray-600" />
                  </div>
                  <div
                    className={`rounded-lg bg-gray-100 p-3 ${isDelay ? "opacity-0" : "opacity-100"}`}
                  >
                    {/* Animasi loading */}
                    {isDelay && (
                      <div className="flex items-center justify-center gap-1">
                        <span className="size-1 animate-bounce rounded-full bg-[#30414C] [animation-delay:-0.3s]" />
                        <span className="size-1 animate-bounce rounded-full bg-[#30414C] [animation-delay:-0.15s]" />
                        <span className="size-1 animate-bounce rounded-full bg-[#30414C]" />
                      </div>
                    )}

                    {/* Pesan bot setelah delay */}
                    {!isDelay && (
                      <>
                        <p className="text-gray-700">
                          Baik!, Isma akan menyambungkan Kak{" "}
                          {userMessage.fullName} dengan agen kami melalui
                          WhatsApp dan akan membalas pesan Anda secepat mungkin,
                          biasanya dalam beberapa menit.
                          <br />
                          Ditunggu yaah...
                        </p>
                        <span className="text-sm text-gray-500">{timeNow}</span>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}

            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.currentTarget.value)}
                placeholder="Type a message here..."
                className="mr-2 w-full rounded-lg border border-gray-300 px-4 py-2"
              />
              <button
                type="button"
                onClick={send}
                className="rounded-full bg-blue-500 p-2"
              >
                {" "}
                {/* Nonaktifkan tombol kirim */}
                <Send className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        .content-area {
          flex-grow: 1;
          width: 100%;
          background-image: radial-gradient(#e3f6fd 1px, transparent 1px),
            radial-gradient(#e3f6fd 1px, transparent 1px);
          background-position:
            0 0,
            25px 25px;
          background-size: 50px 50px;
        }
      `}</style>
    </motion.div>
  );
};

export default ChatBox;
