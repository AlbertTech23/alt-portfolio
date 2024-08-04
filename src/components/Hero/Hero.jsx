import "./Hero.scss";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

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

const roles = [
  "Web Developer & UI/UX Designer",
  "Network Engineer & IoT Enthusiast",
  "Project Manager & Tech Mentor",
];

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
          <motion.h1 variants={textVariants}>
            <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
                startDelay: 1000,
                pauseFor: 1000,
                cursor: "_",
              }}
            />
          </motion.h1>
          <motion.div className="heroButtons" variants={textVariants}>
            <a href="#Skills">
              <motion.button
                variants={textVariants}
                whileHover={{
                  backgroundColor: "#f8f8f8",
                  color: "#c3073f",
                }}
              >
                See the Latest Works
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button
                variants={textVariants}
                whileHover={{ backgroundColor: "#f8f8f8", color: "#c3073f" }}
              >
                Contact Me
              </motion.button>
            </a>
          </motion.div>
          <motion.img
            src="./scroll.png"
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
          <img src="./AlbertTirto.png" alt="albert" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
