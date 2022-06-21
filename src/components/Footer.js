import { motion } from "framer-motion";

const variants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

const Footer = () => {
  return (
    <div className="footer">
      <motion.a
        href="mailto:pescatorim14@gmail.com"
        target="_blank"
        variants={variants}
        whileHover="hover"
        whileTap="tap"
      >
        <img src="..\icons\gmail.svg" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/valerio-pescatori"
        target="_blank"
        variants={variants}
        whileHover="hover"
        whileTap="tap"
      >
        <img src="..\icons\linkedin.svg" />
      </motion.a>
      <motion.a
        href="https://github.com/valerio-pescatori/"
        target="_blank"
        variants={variants}
        whileHover="hover"
        whileTap="tap"
      >
        <img src="..\icons\github.svg"></img>
      </motion.a>
    </div>
  );
};

export default Footer;
