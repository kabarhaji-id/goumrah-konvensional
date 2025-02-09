import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ServiceCardProps } from '@/data/about/services';
import Image from "next/legacy/image";

export const ServiceCard: React.FC<ServiceCardProps> = ({
                                                          icon,
                                                          title,
                                                          subtitle,
                                                          description,
                                                          items,
                                                          isLoading = false
                                                        }) => {
  if (isLoading) {
    return <article
      className="flex flex-col grow shrink px-3 py-4 bg-white rounded-3xl shadow-sm min-w-[240px] w-[200px] animate-pulse"
      role="status" aria-label="Loading service card">
      <div className="self-center w-[51px] h-[51px] bg-slate-200 rounded-full" />
      <div className="mt-4 h-6 bg-slate-200 rounded w-3/4 mx-auto" />
      <div className="mt-4 h-4 bg-slate-200 rounded w-5/6 mx-auto" />
      <div className="mt-4 space-y-2">
        <div className="h-4 bg-slate-200 rounded w-full" />
        <div className="h-4 bg-slate-200 rounded w-5/6" />
        <div className="h-4 bg-slate-200 rounded w-4/6" />
      </div>
    </article>;
  }

  return (
    <article className="flex flex-col grow shrink px-3 py-4 bg-white rounded-3xl border border-gray-300 shadow-sm min-w-[240px] w-[200px]">
      <div
        className="justify-center items-center border border-solid border-slate-200 rounded-[50px] shadow-[0px_2px_2px_-1px_rgba(0,0,0,0.1)] bg-[#F1FAFA] self-center flex w-[51px] p-[10px] flex-col overflow-hidden h-[51px]">
        {icon && (
          <Image
            src={icon}
            alt=""
            width={50}
            height={50}
            className="object-contain w-[31px] aspect-[0.97]"
          />
        )}
      </div>

      <div className="mt-4 text-base tracking-wide text-center text-emerald-950">
        <ReactMarkdown components={{
          strong: ({...props}) => (
            <span className="font-bold" {...props}/>
          )
        }}>
          {title}
        </ReactMarkdown>
      </div>

      <div className="mt-4 text-xs leading-6 text-center text-emerald-950">
        <ReactMarkdown components={{
          strong: ({...props}) => (
            <span className="font-bold" {...props}/>
          )
        }}>
          {subtitle}
        </ReactMarkdown>
      </div>

      {description && (
        <div className="mt-4 text-xs leading-6 text-justify text-emerald-950">
          <ReactMarkdown components={{
            strong: ({...props}) => (
              <span className="font-bold" {...props}/>
            ),
            p: ({...props}) => (
              <p className="mb-4 last:mb-0" {...props}/>
            )
          }}>
            {description}
          </ReactMarkdown>
        </div>
      )}

      {items && (
        <div className="flex flex-col mt-4 w-full text-xs font-bold tracking-wide leading-6 text-emerald-950">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex gap-10 justify-between items-center p-2 w-full border-b border-emerald-950 border-opacity-30"
            >
              <div className="self-stretch my-auto">
                <ReactMarkdown components={{
                  strong: ({...props}) => (
                    <span className="font-bold" {...props}/>
                  )
                }}>
                  {item.label}
                </ReactMarkdown>
              </div>
              <Image
                src={item.iconSrc}
                width={50}
                height={50}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </div>
          ))}
        </div>
      )}
    </article>
  );
};