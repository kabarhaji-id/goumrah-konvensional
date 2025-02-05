"use client";

import React, { useEffect, useState } from "react";
import ChevronDown from "@/public/icons/chevron_down.svg";
import ChevronUp from "@/public/icons/chevron_up.svg";
import { FAQItem, MainChild, SubMainChild } from "./faq-item";
import ReactMarkdown from "react-markdown";

import FAQDatas from "@/data/faq/faqs.json"; // Ensure this path is correct

const FAQSection: React.FC = () => {
  const [expandedFAQs, setExpandedFAQs] = useState<Record<number, boolean>>({});
  const [faqs, setFaqs] = useState<FAQItem[] | null>(null);

  const transformFAQItem = (item: any): FAQItem => {
    const transformedItem: FAQItem = {
      mainID: item.mainID,
      mainQuestion: item.mainQuestion,
      mainAnswer: item.mainAnswer
    };

    if (item.mainChildren && Array.isArray(item.mainChildren)) {
      transformedItem.mainChildren = item.mainChildren.map((child: any) => {
        const transformedMainChild: MainChild = {
          subMainId: child.subMainId,
          subMainQuestion: child.subMainQuestion,
          subMainAnswer: child.subMainAnswer
        };
        if (child.subMainChildren && Array.isArray(child.subMainChildren)) {
          transformedMainChild.subMainChildren = child.subMainChildren.map(
            (subChild: any) => ({
              childId: subChild.childId,
              childQuestion: subChild.childQuestion,
              childAnswer: subChild.childAnswer
            })
          );
        }
        return transformedMainChild;
      });
    }

    return transformedItem;
  };

  useEffect(() => {
    if (Array.isArray(FAQDatas)) {
      const transformedData: FAQItem[] = FAQDatas.map((item) =>
        transformFAQItem(item)
      );
      setFaqs(transformedData);
    } else {
      console.error("FAQDatas is not a valid array:", FAQDatas);
      setFaqs(null);
    }
  }, []); // Ensure it runs only once

  const toggleFAQ = (id: number) => {
    setExpandedFAQs((prev) => ({
      ...prev,
      [id]: !prev[id] // Toggle the current item
    }));
  };

  const renderFAQs = (faqs: FAQItem[] | MainChild[] | SubMainChild[] | undefined) => {
    if (!faqs || faqs.length === 0) {
      return <p>No FAQs available.</p>;
    }

    return faqs.map((faq, index) => {
      const id =
        "mainID" in faq
          ? faq.mainID
          : "subMainId" in faq
            ? faq.subMainId
            : faq.childId;
      const isExpanded = !!expandedFAQs[id];

      return (
        <div key={index} className="bg-white border-b border-gray-200">
          {"mainID" in faq ? (
            <>
              <button
                className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                onClick={() => toggleFAQ(faq.mainID)}
                aria-expanded={isExpanded}
              >
                <div className="flex justify-between items-center">
                  <p
                    className={`text-md font-bold  w-[100%] transition-colors duration-300 ${
                      isExpanded ? "text-[#1B8386]" : "text-[#002626]"
                    }`}
                  >
                    {faq.mainQuestion}
                  </p>
                  {isExpanded ? (
                    <ChevronUp className="text-indigo-600 h-6 w-6" width={24} height={24} />
                  ) : (
                    <ChevronDown className="text-indigo-600 h-6 w-6" width={24} height={24} />
                  )}
                </div>
              </button>
              {isExpanded && (
                <div className="transition-all duration-300 ease-in-out">
                  <ReactMarkdown
                    className="ps-4  text-xs text-gray-700 markdown-list"
                    components={{
                      a: ({ href, children }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                          {children}
                        </a>
                      ),
                      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                      ul: ({ children }) => <ul className="list-none pl-5">{children}</ul>,
                      ol: ({ children }) => <ol className="list-node pl-6">{children}</ol>,
                      li: ({ children }) => <li className="ml-4">{children}</li>,
                      p: ({ children }) => <p className="mb-2">{children}</p>// Example of styling paragraphs
                    }}
                  >
                    {faq.mainAnswer}
                  </ReactMarkdown>

                  {faq.mainChildren && renderFAQs(faq.mainChildren)}
                </div>
              )}
            </>
          ) : "subMainId" in faq ? (
            <>
              <button
                className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                onClick={() => toggleFAQ(faq.subMainId)}
                aria-expanded={isExpanded}
              >
                <div className="flex justify-between items-center">
                  <p
                    className={`text-xs font-bold w-[100%] transition-colors duration-300 ${
                      isExpanded ? "text-[#1B8386]" : "text-[#002626]"
                    }`}
                  >
                    {faq.subMainQuestion}
                  </p>
                  {isExpanded ? (
                    <ChevronUp className="text-indigo-600 h-6 w-6" width={18} height={18} />
                  ) : (
                    <ChevronDown className="text-indigo-600 h-6 w-6" width={18} height={18} />
                  )}
                </div>
              </button>
              {isExpanded && (
                <div className="ps-4 transition-all duration-300 ease-in-out">

                  <ReactMarkdown
                    className="text-xs text-gray-700 markdown-list "
                    components={{
                      a: ({ href, children }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                          {children}
                        </a>
                      ),
                      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                      ul: ({ children }) => <ul className="list-none pl-5">{children}</ul>,
                      ol: ({ children }) => <ol className="list-node pl-6">{children}</ol>,
                      li: ({ children }) => <li className="ml-4">{children}</li>,
                      p: ({ children }) => <p className="mb-2">{children}</p>
                    }}>
                    {faq.subMainAnswer}
                  </ReactMarkdown>
                  {faq.subMainChildren && renderFAQs(faq.subMainChildren)}
                </div>
              )}
            </>
          ) : (
            <>
              <button
                className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                onClick={() => toggleFAQ(faq.childId)}
                aria-expanded={isExpanded}
              >
                <div className="flex justify-between items-center">
                  <p
                    className={`text-base font-bold transition-colors duration-300 ${
                      isExpanded ? "text-[#1B8386]" : "text-[#002626]"
                    }`}
                  >
                    {faq.childQuestion}
                  </p>
                  {isExpanded ? (
                    <ChevronUp className="text-indigo-600 h-6 w-6" width={18} height={18} />
                  ) : (
                    <ChevronDown className="text-indigo-600 h-6 w-6" width={18} height={18} />
                  )}
                </div>
              </button>
              {isExpanded && (
                <div className="ps-4 transition-all duration-300 ease-in-out">
                  <ReactMarkdown
                    className="text-xs text-gray-700 markdown-list "
                    components={{
                      a: ({ href, children }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                          {children}
                        </a>
                      ),
                      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                      ul: ({ children }) => <ul className="list-none pl-5">{children}</ul>,
                      ol: ({ children }) => <ol className="list-node pl-6">{children}</ol>,
                      li: ({ children }) => <li className="ml-4">{children}</li>,
                      p: ({ children }) => <p className="mb-2">{children}</p>
                    }}>
                    {faq.childAnswer}
                  </ReactMarkdown>
                </div>
              )}
            </>
          )}
        </div>
      );
    });
  };

  return (
    <section
      id="faqs-section"
      className="font-[sans-serif] max-w-4xl mx-auto px-6 pb-6"
    >
      {faqs === null ? <p>Loading FAQs...</p> : renderFAQs(faqs)}
    </section>
  );
};

export default FAQSection;

