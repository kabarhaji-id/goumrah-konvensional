"use client";
import React from "react";
import { useFAQSearch } from "@/context/search-context";

const TopSection = () => {

  const { searchQuery, setSearchQuery } = useFAQSearch();


  return (
      <section className="py-133 px-6 pb-6 bg-primary" aria-labelledby="faq-section-title">

        <div className="top-0 z-50 flex h-12 items-center justify-center bg-primary px-4">
          <h1 id="faq-section-title" className="text-sm font-bold tracking-wide text-white">Pertanyaan Umum (FAQ) - GoUmrah</h1>
        </div>

        <div className="w-full h-full">
          <div className="max-w-md mx-auto pt-10 pb-5 text-center">
            <p className="text-3sm font-normal text-white ">Selamat Datang di GoUmrah.id</p>
            <h2 className="text-3sm font-bold text-white">Ada yang bisa kami bantu?</h2>
          </div>

          <div className="flex px-4 py-3 rounded-md border-1 border-black-500 overflow-hidden max-w-md mx-auto bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                 className="fill-gray-600 mr-3 rotate-360" aria-hidden="true">  {/* Added aria-hidden */}
              <path
                  d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
              </path>
            </svg>
            <label htmlFor="faq-search-input" className="sr-only">Cari Pertanyaan</label> {/* Added label */}
            <input
                id="faq-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Using the more descriptive handler
                type="search" // Using the correct input type
                placeholder="Cari Pertanyaan..."
                className="w-full outline-none bg-transparent text-gray-600 text-sm"
                aria-label="Cari Pertanyaan Umum" // Improved accessibility
            />
          </div>

        </div>


      </section>
  );

};

export default TopSection;