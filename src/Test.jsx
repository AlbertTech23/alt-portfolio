import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="course">
      <motion.div
        className="box"
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 2 }}
        // whileInView={{ opacity: 1, scale: 2 }}
        // // drag
        variants={variants}
        transition={{ duration: 2 }}
        animate={open ? "visible" : "hidden"}
      ></motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>Toggle</button>
    </div>
  );
};

export default Test;
