import seoData from "@/data/seo/seo-data.json";

// Default SEO metadata values
const DEFAULT_SEO = {
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1", // Default robots value
  authors: "Go UMRAH Team",           // Default author
  publisher: "goumrah.id", // Default publisher
};

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  image: string;
  alt?: string;
  titleImage?: string;
  robots?: string;
  authors?: string;
  publisher?: string;
}

/**
 * Fetch SEO data based on the given slug.
 * @param slug - Slug to fetch SEO data for
 * @returns SEOData or null if not found
 */
export async function fetchSEOData(slug: string): Promise<SEOData | null> {
  if (!slug) {
    return null;
  }

  // Fetch SEO data based on the slug
  const seoDataForSlug: SEOData | null = seoData[slug as keyof typeof seoData] || null;

  if (seoDataForSlug) {
    // Merge the fetched SEO data with default values for missing fields
    return {
      ...seoDataForSlug,
      robots: seoDataForSlug.robots || DEFAULT_SEO.robots,
      authors: seoDataForSlug.authors || DEFAULT_SEO.authors,
      publisher: seoDataForSlug.publisher || DEFAULT_SEO.publisher,
    };
  }

  // Return null if no data is found for the given slug
  return null;
}
