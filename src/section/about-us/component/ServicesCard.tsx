"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Service } from "@/data/about/services";

interface ServiceCardProps extends Service {
  isLoading?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
                                                          icon,
                                                          title,
                                                          subtitle,
                                                          description,
                                                          servicesItems,
                                                          isLoading = false
                                                        }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (isLoading) {
    return (
      <article className="flex flex-col px-3 py-4 bg-white rounded-3xl shadow-sm w-[200px] animate-pulse">
        <div className="self-center w-[51px] h-[51px] bg-slate-200 rounded-full" />
        <div className="mt-4 h-6 bg-slate-200 rounded w-3/4 mx-auto" />
        <div className="mt-4 h-4 bg-slate-200 rounded w-5/6 mx-auto" />
        <div className="mt-4 space-y-2">
          <div className="h-4 bg-slate-200 rounded w-full" />
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col grow shrink px-3 py-4 bg-white rounded-3xl border border-gray-300 shadow-sm min-w-[240px] w-[200px]">
      {/* Ikon utama */}
      <div className="justify-center items-center border border-solid border-slate-200 rounded-[50px] shadow-[0px_2px_2px_-1px_rgba(0,0,0,0.1)] bg-[#F1FAFA] self-center flex w-[51px] p-[10px] flex-col overflow-hidden h-[51px]">
        {icon &&
          <Image
            src={icon}
            alt={subtitle}
            title ={title}
            width={50}
            height={50}
            className="object-contain w-[31px] aspect-[0.97]"
            priority
          />
        }
      </div>

      {/* Judul */}
      <div className="mt-4 text-base tracking-wide text-center text-emerald-950">
        <ReactMarkdown components={{
          strong: ({...props}) => (
            <span className="font-bold" {...props}/>
          )
        }}>
          {title}
        </ReactMarkdown>
      </div>

      {/* Subtitle */}
      <div className="mt-2 text-xs text-center text-emerald-700">
        <ReactMarkdown>{subtitle}</ReactMarkdown>
      </div>

      {/* Deskripsi */}
      {description && (
        <div className="mt-4 text-xs leading-6 text-justify text-emerald-950">
          <ReactMarkdown components={{
            strong: ({ ...props }) => (
              <span className="font-bold" {...props} />
            ),
            p: ({ ...props }) => (
              <p className="mb-4 last:mb-0" {...props} />
            )
          }}>
            {description}
          </ReactMarkdown>
        </div>
      )}

      {/* Bagian Expand/Collapse */}
      {servicesItems && servicesItems.length > 0 && (
        <div className="flex flex-col mt-4 w-full text-xs font-bold tracking-wide leading-6 text-emerald-950">
          {servicesItems.map((item, index) => (
            <div key={index} className="border-b border-gray-300 py-2">
              {/* Label Expandable */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="self-stretch my-auto ">
                  <ReactMarkdown components={{
                    strong: ({ ...props }) => (
                      <span className="font-mediumbold" {...props} />
                    )
                  }}>
                    {item.label}
                  </ReactMarkdown>
                </div>

                <Image
                  src={item.iconSrc}
                  title ={item.label}
                  width={20}
                  height={20}
                  alt="Toggle Icon"
                  className={`transition-transform duration-200 ${expandedIndex === index ? "rotate-180" : ""}`}
                  priority
                />
              </div>

              {/* Konten yang bisa diperluas */}
              {expandedIndex === index && item.items && (
                <ul className="pl-4 mt-2 text-xs text-gray-700 space-y-1 list-disc">
                  {item.items.map((child, i) => (
                    <li key={i} className="py-1 font-normal text-justify">
                      {`${child}`}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  );
};
