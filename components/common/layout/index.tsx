"use client";

import { motion } from "framer-motion";

import { pageTransition } from "animations/variants";

import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
  backPagePath?: string;
  disablePaddingX?: boolean;
};

const Layout = ({
  children,
  backPagePath = "",
  disablePaddingX = false
}: Props): JSX.Element => (
  <motion.div
    className="flex flex-col items-center min-h-screen"
    {...pageTransition}
  >
    <Header backPagePath={backPagePath} />
    <main
      className={`flex-1 w-full max-w-screen-lg ${
        disablePaddingX || "px-10"
      } py-12`}
    >
      {children}
    </main>
    <Footer />
  </motion.div>
);

export default Layout;
