import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Switch.css';

export default function Header(procs) {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    let savedDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    return savedDarkMode !== null ? savedDarkMode : false;
  });
  
  const [isChecked, setIsChecked] = useState(() => {
    let savedChecked = JSON.parse(localStorage.getItem('isChecked'));
    return savedChecked !== null ? savedChecked : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('isChecked', JSON.stringify(isChecked));
  }, [isChecked]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    <nav className="navbar navbar-expand-lg color">
      <div className="container-fluid">
        <Link className="navbar-brand" to="todo-list/">
          {procs.title}
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
              <Link
                className="nav-link active"
                aria-current="page"
                to="todo-list/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="todo-list/about">
                About
              </Link>
            </li>
          </ul>
          <label for="switch" className="fs-6 text-black">Theme</label>
          <label className="switch mx-2">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={toggleTheme}
            />
            <span className="slider"></span>
          </label>
          {procs.searchBar ? (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          ) : ("")}
        </div>
      </div>
    </nav>
  );
}
Header.defaultProps = {
  title: "Your Title name",
  searchBar: true,
};
Header.propType = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};
