import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="container">
      <nav className="navbar">
        <h3
          className="nav-element"
          onClick={() => setActive(0)}
          active={active ? 0 : 1}
          id="nav-el-l"
        >
          Me
        </h3>
        <h3
          className="nav-element"
          onClick={() => setActive(1)}
          active={active}
          id="nav-el-r"
        >
          Things I've done
        </h3>
      </nav>
    </div>
  );
};

export default Header;
