import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "skills"
            ? "linear-gradient(180deg, #1a1a1d, #0c0c1d)"
            : "linear-gradient(180deg, #1a1a1d, #4e4e50)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "skills" ? "Skills & Proficiency" : "Experience Spotlight"}
      </motion.h1>
      <motion.div className="mountains" style={{ y: yBg }}></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "./planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  );
};

export default Parallax;
