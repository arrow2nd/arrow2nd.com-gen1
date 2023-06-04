"use client";

import { AnimatePresence } from "framer-motion";
import { Zen_Maru_Gothic } from "next/font/google";

import "styles/globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "500"],
  subsets: ["latin"]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <body className={zenMaruGothic.className}>{children}</body>
      </AnimatePresence>
    </html>
  );
}
