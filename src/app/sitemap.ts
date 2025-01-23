import { packageDetailData } from "@/data/package-details";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const packageDetailEntries: MetadataRoute.Sitemap = packageDetailData.map(
    ({ id }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/umrah/${id}`,
    }),
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    ...packageDetailEntries,
  ];
}
