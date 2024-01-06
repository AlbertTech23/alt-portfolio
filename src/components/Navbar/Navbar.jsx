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
    { src: "youtube.png", alt: "youtube" },
    { src: "linkedin.png", alt: "linkedin" },
  ];

  return (
    <div className="navbarParent">
      {/* Sidebar */}
      <div className="navbarWrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          ALBERT TIRTO
        </motion.span>
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
