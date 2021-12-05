import React from "react";
import "./GlobalStyles.css";
import { NavLink } from "react-router-dom";

const BaseNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <NavLink to="/" className="navbar-brand">
          PickUp "R" Us ™
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/AcercaDe" className="nav-link">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Contactanos" className="nav-link">
                Contactanos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Login" className="nav-link">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Registro" className="nav-link">
                SignUp
              </NavLink>
            </li>

            {/* <div class="dropdown">
              <NavLink
                class="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cuenta
              </NavLink>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <NavLink class="dropdown-item active" to="/Login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink class="dropdown-item" to="/Registro">
                    Sign In
                  </NavLink>
                </li>
                <li>
                  <NavLink class="dropdown-item" href="#">
                    Something else here
                  </NavLink>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <NavLink class="dropdown-item" href="#">
                    Separated link
                  </NavLink>
                </li>
              </ul>
            </div> */}

            {/* <a className="nav-link" href="faq.html">
                Iniciar Sesion
              </a> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BaseNavBar;
