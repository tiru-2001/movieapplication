import React from "react";

// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <>
      <nav>
        <section className="logo">
          <h1>MovieApp</h1>
        </section>
        <section className="nav-items">
          <ul>
            <li>
              <Link className="links" to="/">
                home
              </Link>
            </li>
            <li>
              <Link className="links" to="/movielist">
                movielist
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
};

export default Header;
