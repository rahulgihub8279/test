import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

function Navbar(probs) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${probs.mode} bg-${probs.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            <strong>{probs.title}</strong>
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  about
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={probs.toggleMode}
              />
              <label
                className={`form-check-label text-${
                  probs.mode === "dark" ? "light" : "dark"
                }`}
                for="flexSwitchCheckDefault"
              >
                switch {probs.mode === "light" ? "dark" : "light"} mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultrops = {
  title: "set title here",
  aboutText: "about text here",
};
