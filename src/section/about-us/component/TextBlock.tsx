import * as React from "react";
import { TextBlockProps } from "@/data/about/about-types";

export const TextBlock: React.FC<TextBlockProps> = ({ text, isBold, isItalic }) => {
  const className = `${isBold ? "font-bold" : ""} ${isItalic ? "italic" : ""}`.trim();
  return className ? <span className={className}>{text}</span> : <>{text}</>;
};