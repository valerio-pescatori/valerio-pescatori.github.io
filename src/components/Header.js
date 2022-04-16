import { motion } from "framer-motion";
import { getBreakPoint, debounce } from "./../utils";
import { useState, useEffect } from "react";

const variants = {
  meSm: {
    x: "-65%",
    width: "40vw",
  },
  cardsSm: {
    x: "45%",
    width: "45vw",
  },

  me: {
    x: "-65%",
    width: "40%",
  },

  cards: {
    x: "45%",
    width: "45%",
  },
};

const Header = ({ active, setActive }) => {
  const [bp, setBp] = useState(getBreakPoint(window.innerWidth));

  // first render
  useEffect(() => {
    setBp(getBreakPoint(window.innerWidth));
  }, []);

  useEffect(() => {
    // wrappo la chiamata a debounce in una variabile
    // const debouncedHandleResize = debounce(setBp, 50, getBreakPoint(window.innerWidth));

    // no debounce version
    const setter = () => setBp(getBreakPoint(window.innerWidth));

    // aggiungo l'event listener
    // window.addEventListener("resize", debouncedHandleResize);

    // no debounce version
    window.addEventListener("resize", setter);

    // cleanup
    return () => {
      // window.removeEventListener("resize", debouncedHandleResize);

      // no debounce version
      window.removeEventListener("resize", setter);
    };
  });

  return (
    <div className="container">
      <nav className="navbar" active={active}>
        <motion.div
          className="nav-line"
          variants={variants}
          animate={() => (bp === "sm" ? (active == 0 ? "meSm" : "cardsSm") : active == 0 ? "me" : "cards")}
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
