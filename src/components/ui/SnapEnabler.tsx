"use client";

import { useEffect } from "react";

export default function SnapEnabler() {
  useEffect(() => {
    // Enable css scroll snap on the html document specifically for this page
    document.documentElement.classList.add("md:snap-y", "md:snap-proximity");
    
    return () => {
      // Disable css scroll snap when navigating away
      document.documentElement.classList.remove("md:snap-y", "md:snap-proximity");
    };
  }, []);

  return null;
}
