import { motion } from "framer-motion";
import Link from "next/link";
import { RiArrowLeftSLine, RiHome5Line } from "react-icons/ri";

import { hoverLink } from "animations/variants";

import { pageLinks } from "data/pages";

type Props = {
  backPagePath: string;
};

const Header = ({ backPagePath }: Props): JSX.Element => {
  const links = pageLinks.map(({ href, name }) => (
    <Link href={href} scroll={false} key={name}>
      <motion.span className="inline-block tracking-widest" {...hoverLink}>
        {name}
      </motion.span>
    </Link>
  ));

  return (
    <div className="px-10 py-12 flex flex-row w-full items-center font-medium text-main">
      <Link href={backPagePath || "/"} scroll={false}>
        <motion.span className="inline-block text-2xl" {...hoverLink}>
          {backPagePath === "" ? <RiHome5Line /> : <RiArrowLeftSLine />}
        </motion.span>
      </Link>
      <div className="ml-auto space-x-6 text-lg">{links}</div>
    </div>
  );
};

export default Header;
