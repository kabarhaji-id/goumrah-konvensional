export async function fetchSEOData(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiUrl = `${baseUrl}/api/seo/${slug}`;

  console.log("Fetching SEO data from:", apiUrl);

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });

    if (!res.ok) {
      console.error("SEO API returned error:", res.status, res.statusText);
      throw new Error("SEO data not found");
    }

    const data = await res.json();
    console.log("SEO data fetched:", data);
    return data;
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return null;
  }
}
