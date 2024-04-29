import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const NavBar = () => {
  const divStyle = {
    minHeight: "12vh",
    backgroundColor: "#2691d9",
  };
  return (
    <>
      <nav
        style={divStyle}
        className="sticky-top navbar navbar-expand-lg navbar-dark px-5"
      >
        <div className="container-fluid p-0">
          <a className="navbar-brand" href="#">
            <h3>E-DSR</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-light">Users</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
