import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer">
      <motion.a href="mailto:pescatorim14@gmail.com" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <img src="..\icons\gmail.svg" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/valerio-pescatori"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src="..\icons\linkedin.svg" />
      </motion.a>
    </div>
  );
};

export default Footer;
