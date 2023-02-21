import { motion } from "framer-motion";
import Link from "next/link";

import { hoverLink } from "animations/variants";

import { pageLinks } from "data/pages";

type Props = {
  className: string;
};

const Links = ({ className }: Props): JSX.Element => {
  const links = pageLinks.map(({ name, href }) => (
    <Link className="block" href={href} key={name}>
      <motion.div {...hoverLink}>{name}</motion.div>
    </Link>
  ));

  return (
    <div className={`space-y-3 text-xl text-main tracking-0.2 ${className}`}>
      {links}
    </div>
  );
};

export default Links;
