import React from "react";
import GoogleAnalytics from "@/components/analytic/google-analytics";
import TagManager from "@/components/analytic/tag-manager";
import FacebookPixel from "@/components/analytic/meta-pixel";

const Header = () => {
  const nonce = typeof window !== "undefined"
    ? document.querySelector('meta[name="X-Nonce"]')?.getAttribute('content') || ''
    : '';
  return <>
    <meta name="X-Nonce" content={nonce} />

    <GoogleAnalytics nonce={nonce} />
    <TagManager nonce={nonce} />
    <FacebookPixel nonce={nonce} />
  </>;
};

export default Header;
