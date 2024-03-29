import { motion } from "framer-motion";
import Image from "next/image";

import { pageTransition } from "animations/variants";

import Dots from "components/common/dots";
import SEO from "components/common/seo";

import neko from "public/neko.png";

import Links from "./links";

const Home = (): JSX.Element => (
  <motion.div
    className="flex flex-col h-screen justify-center items-center font-medium"
    data-testid="home-body"
    {...pageTransition}
  >
    <SEO />
    <Image src={neko} alt="neko" width={192} height={110} placeholder="blur" />
    <span className="mt-2 text-3xl text-main tracking-0.4">arrow2nd</span>
    <Dots className="mt-6" count={4} />
    <Links className="mt-6" />
  </motion.div>
);

export default Home;
