"use client";

import { useEffect, useState } from "react";
import SiteLoader from "./SiteLoader";

type Props = {
  children: React.ReactNode;
};

export default function AppLoaderProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minDuration = 1200; // 1.2s basic polish
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, minDuration);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <SiteLoader />}
      <div className={isLoading ? "opacity-0 pointer-events-none" : "opacity-100"}>
        {children}
      </div>
    </>
  );
}