"use client"
import React, { useState } from "react";
import axios from "axios";

const SubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/subscribe", { email });

      if (response.status === 201) {
        setMessage(response.data.message);
      }
    } catch (error: any) {
      setMessage(error.response?.data.error || "Terjadi kesalahan, coba lagi.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-5 w-full text-sm tracking-wide">
      <div
        className="flex overflow-hidden justify-between items-center px-3 py-2.5 w-full leading-none bg-white rounded-xl border border-solid border-zinc-300 min-h-[40px] text-neutral-800">
        <label htmlFor="email" className="sr-only">Masukkan alamat email kamu</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan alamat email kamu"
          className="flex-1 shrink gap-3 items-center self-stretch my-auto w-full basis-0 min-w-[240px] bg-transparent border-none focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="overflow-hidden gap-2 self-stretch p-2 mt-2 w-full leading-6 text-teal-50 whitespace-nowrap bg-teal-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        Subscribe
      </button>

      {/* Display message after submission */}
      {message && (
        <div className="mt-4 text-center text-sm font-medium text-green-600">
          {message}
        </div>
      )}
    </form>
  );
};

export default SubscriptionForm;
