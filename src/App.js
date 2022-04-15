import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Header active={active} setActive={setActive} />
      <Body active={active} />
    </>
  );
}

export default App;
