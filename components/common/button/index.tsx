import { motion } from "framer-motion";
import Link from "next/link";

import { hoverButton } from "animations/variants";

type Props = {
  className?: string;
  href: string;
  children: React.ReactNode;
  fill?: boolean;
  targetBlank?: boolean;
};

const Button = ({
  className = "",
  href,
  children,
  fill = false,
  targetBlank = false
}: Props): JSX.Element => (
  <Link
    href={href}
    target={targetBlank ? "_blank" : undefined}
    rel={targetBlank ? "noopener noreferrer" : undefined}
    scroll={false}
  >
    <motion.span
      className={`flex-none mt-2 mr-2 md:mr-4 px-6 py-1 border-2 border-main ${
        fill ? "text-white bg-main" : "text-main"
      } rounded-xl tracking-widest ${className}`}
      {...hoverButton}
    >
      {children}
    </motion.span>
  </Link>
);

export default Button;
