"use client";

import FullPageLoader from "@/components/ui/loading-spinner";

import { useState, useEffect } from "react";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  // if (isLoading) {
  //   return <FullPageLoader />;
  // }

  return <>{children}</>;
}
