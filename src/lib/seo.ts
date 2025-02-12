import seoData from "@/data/seo/seo-data.json";
interface SEOData {
  title: string;
  description: string;
  keywords: string;
  image: string;
}

/**
 * Fetch SEO data berdasarkan slug yang diberikan
 * @param slug - Slug untuk mendapatkan SEO data
 * @returns SEOData atau null jika tidak ditemukan
 */
export async function fetchSEOData(slug: string): Promise<SEOData | null> {


  if (!slug) {
    return null;
  }

  const seoDataForSlug = seoData[slug as keyof typeof seoData] || null;

  return seoDataForSlug;
}
