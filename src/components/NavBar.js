import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

let navLinkStyles = ({ isActive }) => ({
  fontWeight: isActive ? "bold" : "normal",
  color: isActive ? "gray" : "black",
});

const NavBar = (props) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          NewsMonkey
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={navLinkStyles}
                to="/business"
              >
                Business
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={navLinkStyles}
                to="/entertainment"
              >
                Entertainment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={navLinkStyles} to="/health">
                Health
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={navLinkStyles} to="/science">
                Science
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={navLinkStyles} to="/sports">
                Sports
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={navLinkStyles}
                to="/technology"
              >
                Technology
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
