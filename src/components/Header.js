import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li>
            <h3
              className="nav-element"
              onClick={() => setActive(0)}
              active={active ? 0 : 1}
            >
              Me
            </h3>
          </li>
          <div className="triangle" active={active ? 0 : 1}></div>
          <li>
            <h3
              className="nav-element"
              onClick={() => setActive(1)}
              active={active}
            >
              Things I've done
            </h3>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
