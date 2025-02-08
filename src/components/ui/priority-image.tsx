"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

const PriorityImage = ({ src, priority, ...props }: ImageProps) => {
  const isLocal = typeof src === "string" && src.startsWith("/");
  const [size, setSize] = useState({ width: 0, height: 0 });

  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      <Image
        {...props}
        src={src}
        width={size.width || 100} // Default agar tidak error
        height={size.height || 100}
        priority={priority ?? isLocal} // Prioritaskan gambar lokal
        onLoad={(event) => {
          const img = event.currentTarget;
          if (size.width === 0 && size.height === 0) {
            setSize({ width: img.naturalWidth, height: img.naturalHeight });
          }
        }}
        style={{ width: "100%", height: "auto" }} // Pastikan gambar responsif
      />
    </div>
  );
};

export default PriorityImage;
