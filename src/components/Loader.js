import { motion } from "framer-motion";

const variants = {
  loading: {
    pathLength: [0, 1, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

function Loader() {
  return (
    <motion.div className="loader" exit={{ opacity: 0 }}>
      <div className="dot-wrapper">
        <svg height={"15em"} width={"15em"}>
          <motion.circle
            variants={variants}
            animate="loading"
            cx="7em"
            cy="7em"
            r="3em"
            stroke={"var(--white)"}
            strokeWidth={".5em"}
            strokeLinecap={"round"}
            fill={"none"}
          />
        </svg>
      </div>
    </motion.div>
  );
}

export default Loader;
