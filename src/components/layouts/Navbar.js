import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = ({ icon, title }) => {
  return (
    <nav
      className='nav bg-primary'
      style={{ padding: "10px", textAlign: "center" }}
    >
      <h1>
        <i className='fab fa-github' />
        {title}
      </h1>
      <ul style={{ display: "flex", justifyContent: "center" }}>
        <li style={{ margin: "12px" }}>
          <Link style={{ color: "white" }} to='/'>
            Home
          </Link>
        </li>
        <li style={{ margin: "12px" }}>
          <Link style={{ color: "white" }} to='/about'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: " Github Finder",
  icon: "fab fa-github",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
