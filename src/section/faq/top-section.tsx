import React from "react";

;

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Umrah?",
    answer: "Umrah is a pilgrimage to Mecca, performed by Muslims that can be undertaken at any time of the year, in contrast to the Ḥajj which has specific dates."
  },
  {
    question: "What are the requirements for Umrah?",
    answer: "Requirements typically include a valid passport, visa, and proof of vaccination.  Check with your travel agent for the latest requirements."
  },
  {
    question: "How much does Umrah cost?",
    answer: "The cost varies depending on the package, duration of stay, and chosen amenities. Contact us for personalized quotes."
  },
  // ... more FAQ items
  {
    question: "What are the different Umrah packages available?",
    answer: "We offer a variety of Umrah packages to suit different budgets and preferences, including economy, standard, and luxury options."
  },
  {
    question: "How do I book an Umrah package?",
    answer: "You can easily book an Umrah package through our website or by contacting our customer service team. We will guide you through the process."
  },
  {
    question: "What is included in the Umrah package?",
    answer: "Our Umrah packages typically include flights, accommodation, visa processing, transportation, and guidance from experienced tour guides.  Specific inclusions may vary by package."
  }
];

const TopSection = () => {


  return (
    <section className="py-133 px-6 pb-6 bg-primary">

      <div className="max-w-md mx-auto pt-10 pb-5">
        <p className="text-3sm font-normal text-white text-center">Selamat Datang di goumroh
          Care,</p>
        <h2 className="text-3sm font-bold text-white text-center">Ada yang bisa kami bantu?</h2>
      </div>

      <div
        className="flex px-4 py-3 rounded-md border-1 border-black-500 overflow-hidden max-w-md mx-auto bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
             className="fill-gray-600 mr-3 rotate-360">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
        <input type="email" placeholder="Search Something..."
               className="w-full outline-none bg-transparent text-gray-600 text-sm" />
      </div>

    </section>
  );

};

export default TopSection;