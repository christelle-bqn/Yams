import { Link } from "react-router-dom";
import React from "react";
import { Nav, Ul, Li, Logo, Line } from "./navBarStyles";

const NavBar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <Link to="/">
            <Logo>YAMS</Logo>
          </Link>
        </Li>
        <Li>
          <Link to="/">JEU</Link>
        </Li>
        <Li>
          <Link to="/statistiques">STATISTIQUES</Link>
        </Li>
      </Ul>
      <Line />
    </Nav>
  );
};

export default NavBar;
