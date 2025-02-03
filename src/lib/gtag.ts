export const pageview = (url: string, title: string) => { // Add title parameter
  if (typeof window!== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID as string, {
      page_path: url,
      page_title: title, // Include page_title
    });
  }
};