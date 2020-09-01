import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: "10px",
    borderRadius: "4px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link to="/" style={linkStyle}>
        Home
      </Link>{" "}
      |{" "}
      <Link to="/about" style={linkStyle}>
        About
      </Link>
    </header>
  );
};

export default Header;
