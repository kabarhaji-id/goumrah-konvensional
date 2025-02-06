import React, { useState } from 'react';

const SubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-5 w-full text-sm tracking-wide">
      <div className="flex overflow-hidden justify-between items-center px-3 py-2.5 w-full leading-none bg-white rounded-xl border border-solid border-zinc-300 min-h-[40px] text-neutral-800">
        <label htmlFor="email" className="sr-only">Masukan alamat email kamu</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukan alamat email kamu"
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
    </form>
  );
};

export default SubscriptionForm;
