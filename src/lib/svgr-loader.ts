import { transform } from "@svgr/core";
import fs from "fs/promises";

export default async function svgrLoader({
  resolve,
}: {
  resolve: () => string;
}) {
  const svgPath = resolve();
  const svgContent = await fs.readFile(svgPath, "utf-8");

  // Transform SVG ke React Component menggunakan SVGR
  const reactComponentCode = await transform(svgContent, {
    typescript: true, // Mendukung TypeScript
    svgo: true,
    svgoConfig: {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              removeViewBox: false, // Jangan hapus viewBox
            },
          },
        },
      ],
    },
  });

  return reactComponentCode;
}
