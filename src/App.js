import Header from "./components/Header";
import Body from "./components/Body";
import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import { AnimatePresence } from "framer-motion";

function App() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter={true}>
      {!loaded ? (
        <Loader key="load" />
      ) : (
        <React.Fragment key="loaded">
          <Header active={active} setActive={setActive} />
          <Body active={active} />
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}

export default App;
