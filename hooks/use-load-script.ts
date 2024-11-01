"use client";

import { useState, useEffect } from "react";

interface LoadScriptProps {
  googleMapsApiKey: string;
  libraries: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[];
}

export function useLoadScript({ googleMapsApiKey, libraries }: LoadScriptProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<Error | null>(null);

  useEffect(() => {
    if (!googleMapsApiKey) {
      setLoadError(new Error("Google Maps API key is required"));
      return;
    }

    const scriptId = "google-maps-script";
    
    if (document.getElementById(scriptId)) {
      if (window.google) {
        setIsLoaded(true);
      }
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=${libraries.join(",")}`;
    script.async = true;
    script.defer = true;

    const onScriptLoad = () => {
      if (window.google) {
        setIsLoaded(true);
      }
    };

    const onScriptError = () => {
      setLoadError(new Error("Failed to load Google Maps script"));
      script.remove();
    };

    script.addEventListener("load", onScriptLoad);
    script.addEventListener("error", onScriptError);

    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", onScriptLoad);
      script.removeEventListener("error", onScriptError);
    };
  }, [googleMapsApiKey, libraries]);

  return { isLoaded, loadError };
}