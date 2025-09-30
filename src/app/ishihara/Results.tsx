"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function IshiharaResults() {
  const router = useRouter();

  useEffect(() => {
    // Assume scores are calculated and saved here
    sessionStorage.setItem("ishihara_scores", JSON.stringify({ /* scores data */ }));
    sessionStorage.setItem("ishihara_completed", "true");

    // Redirect to Hue test immediately
    router.push("/hue-test");
  }, [router]);

  return null; // No need to render anything since we redirect
}