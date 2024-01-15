import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      repeat: Infinity,
      duration: 2,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-550%",
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 25,
    },
  },
};

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroWrapper">
        <motion.div
          className="heroTextContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ALBERT TIRTO</motion.h2>
          {/* later apply the typewriter effect */}
          <motion.h1 variants={textVariants}>
            Web Developer and UI Designer
          </motion.h1>
          <motion.div className="heroButtons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            animate="scrollButton"
            variants={textVariants}
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Teacher Leader Learner Explorer
        </motion.div>
        <div className="heroImageContainer">
          <img src="/AlbertTirto.png" alt="albert" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
