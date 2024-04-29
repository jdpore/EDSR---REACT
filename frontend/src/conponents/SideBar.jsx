import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFile,
  faChartBar,
  faSearch,
  faUser,
  faFileExport,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

export const SideBar = () => {
  const divStyle = {
    minHeight: "88vh",
  };
  return (
    <>
      <nav
        id="sidebar"
        className="col-md-3 col-lg-2 d-md-block bg-light"
        style={divStyle}
      >
        <div className="position-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link custom">
                <FontAwesomeIcon icon={faHome} className="me-1" />
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom">
                <FontAwesomeIcon icon={faFile} className="me-1" />
                Encode
              </a>
            </li>
            <li id="performanceTab" className="nav-item">
              <a className="nav-link custom">
                <FontAwesomeIcon icon={faChartBar} className="me-1" />
                Performance
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom">
                <FontAwesomeIcon icon={faSearch} className="me-1" />
                Search
              </a>
            </li>
            <li id="users" className="nav-item admin">
              <a className="nav-link custom">
                <FontAwesomeIcon icon={faUser} className="me-1" />
                User
              </a>
            </li>
            <li id="leave" className="nav-item admin">
              <a className="nav-link custom">
                <FontAwesomeIcon icon={faFileExport} className="me-1" />
                Leave Data
              </a>
            </li>
            <li id="customize" className="nav-item admin">
              <a className="nav-link custom">
                <FontAwesomeIcon icon={faCog} className="me-1" />
                Customize
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
