import React from "react";
import { Link } from "react-router-dom";
import Home from "../Pages/home";
import Sobre from "../Pages/sobre";
import Contato from "../Pages/contato";
import Login from "../Pages/login";
import Signup from "../Pages/signup";
import logo from "../Images/logo.png";

export default function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-md bg-info py-0 mx-0"
        id="navbar"
        style={{ width: "100%" }}
      >
	  <div className="container-md my-0 py-0">
          <Link className="navbar-brand my-0" to="/">
            <img
              src={logo}
              alt="Logo da empresa"
              id="logo_nav"
              className="img-fluid"
            />
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
            <span className="navbar-toggler-icon" id="toggle-button"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-info py-0 rounded-1 border border-info"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item navbar-links">
                <Link className="nav-link ms-2 mt-2" to={Home}>
                  Home
                </Link>
              </li>
              <li className="nav-item navbar-links">
                <Link className="nav-link ms-2 mt-2" to={Sobre}>
                  Sobre
                </Link>
              </li>
              <li className="nav-item navbar-links">
                <Link className="nav-link ms-2 mt-2" to={Contato}>
                  Contato
                </Link>
              </li>
              <li className="nav-item navbar-links">
                <Link className="nav-link ms-2 mt-2" to={Login}>
                  Login
                </Link>
              </li>
              <li className="nav-item navbar-links">
                <Link className="nav-link ms-2 mt-2" to={Signup}>
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
