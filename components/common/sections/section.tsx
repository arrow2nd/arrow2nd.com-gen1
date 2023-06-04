"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { fadeInUp } from "animations/variants";

type Props = {
  className?: string;
  title: string;
  children: React.ReactNode;
  dataTestId?: string;
};

const Section = ({
  className = "",
  title,
  children,
  dataTestId
}: Props): JSX.Element => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true
  });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <motion.div
      className={`text-main tracking-wide ${className}`}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      data-testid={dataTestId}
    >
      <h3 className="block font-medium text-2xl">{title}</h3>
      {children}
    </motion.div>
  );
};

export default Section;
