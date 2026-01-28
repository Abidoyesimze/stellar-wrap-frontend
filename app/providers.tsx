"use client";

import { ThemeProvider } from "./context/ThemeContext";
import { useEffect, useState } from "react";
import { initWalletKit } from "./utils/walletKit";

export function Providers({ children }: { children: React.ReactNode }) {
  const [isWalletKitReady, setIsWalletKitReady] = useState(false);

  useEffect(() => {
    // Initialize wallet kit on client side
    if (typeof window !== "undefined") {
      initWalletKit();
      setIsWalletKitReady(true);
    }
  }, []);

  return <ThemeProvider>{children}</ThemeProvider>;
}
