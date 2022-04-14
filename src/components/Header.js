import { motion } from "framer-motion";

const Header = ({ active, setActive }) => {
  const variants = {
    left: {
      x: "-65%",
      width: "40%",
    },
    right: {
      x: "45%",
      width: "45%",
    },
  };

  return (
    <div className="container">
      <nav className="navbar" active={active}>
        <motion.div
          className="nav-line"
          variants={variants}
          animate={active == 0 ? "left" : "right"}
          transition={{ type: "spring", stiffness: 650, damping: 30 }}
        />
        <h3 className="nav-element" onClick={() => setActive(0)} active={active ? 0 : 1} id="nav-el-l">
          Who I am
        </h3>
        <div className="tri" active={active ? 0 : 1} />
        <h3 className="nav-element" onClick={() => setActive(1)} active={active} id="nav-el-r">
          Things I've done
        </h3>
      </nav>
    </div>
  );
};

export default Header;
