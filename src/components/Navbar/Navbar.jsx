import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const linkVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const socialLinks = [
    { src: "facebook.png", alt: "facebook" },
    { src: "instagram.png", alt: "instagram" },
    { src: "github.png", alt: "github" },
    { src: "linkedin.png", alt: "linkedin" },
  ];

  return (
    <div className="navbarParent">
      <Sidebar />
      <div className="navbarWrapper">
        <motion.a
          href="https://github.com/AlbertTech23"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img src="./githubleft.png" alt="githublogo" />
            AlbertTech23
          </motion.span>
        </motion.a>
        <div className="social">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
              href="#"
            >
              <img src={link.src} alt={link.alt} />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
