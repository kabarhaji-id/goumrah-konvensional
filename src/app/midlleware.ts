import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export function middleware(req: NextRequest) {
  const nonce = crypto.randomBytes(16).toString("base64");
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' https://*.googletagmanager.com https://*.google-analytics.com https://connect.facebook.net https://*.googleapis.com https://cdnjs.cloudflare.com https://*.googletagservices.com https://adservice.google.com https://pagead2.googlesyndication.com https://static.cloudflareinsights.com;
    style-src 'self' 'nonce-${nonce}' https://*.googleapis.com https://cdnjs.cloudflare.com;
    img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com https://*.google.com https://*.gstatic.com https://pagead2.googlesyndication.com https://lh3.googleusercontent.com https://*.fbcdn.net https://static.xx.fbcdn.net;
    connect-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://*.googleapis.com https://g.doubleclick.net https://*.google.com https://*.cloudflareinsights.com;
    frame-src 'self' https://*.googletagmanager.com https://*.facebook.com https://*.google.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com;
    font-src 'self' https://*.gstatic.com;
    object-src 'none';
    base-uri 'self';
    frame-ancestors 'none';
    form-action 'self';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, " ").trim();

  const res = NextResponse.next();
  res.headers.set("Content-Security-Policy", cspHeader);
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("Permissions-Policy", "geolocation=(self), microphone=(), camera=()");
  res.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload"); // HSTS
  res.headers.set("X-Nonce", nonce);

  return res;
}

export const config = {
 matcher: [
  {
   source:
     '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
   missing: [
    { type: 'header', key: 'next-router-prefetch' },
    { type: 'header', key: 'purpose', value: 'prefetch' },
   ],
  },

  {
   source:
     '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
   has: [
    { type: 'header', key: 'next-router-prefetch' },
    { type: 'header', key: 'purpose', value: 'prefetch' },
   ],
  },

  {
   source:
     '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
   has: [{ type: 'header', key: 'x-present' }],
   missing: [{ type: 'header', key: 'x-missing', value: 'prefetch' }],
  },
 ],
};
