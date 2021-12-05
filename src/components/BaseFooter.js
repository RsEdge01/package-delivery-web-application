import React from "react";
import "./GlobalStyles.css";

const BaseFooter = () => {
  return (
    <div
      className="
        row
        align-items-center
        justify-content-between
        flex-column flex-sm-row
      "
    >
      <div className="col-auto">
        <div className="small m-0 text-white">
          Copyright &copy; PickUp "R" Us - 2021
        </div>
      </div>
      <div className="col-auto">
        <a className="link-light small" href="#!">
          Privacidad
        </a>
        <span className="text-white mx-1">&middot;</span>
        <a className="link-light small" href="#!">
          Terminos
        </a>
        <span className="text-white mx-1">&middot;</span>
        <a className="link-light small" href="#!">
          Contactanos
        </a>
      </div>
    </div>
  );
};

export default BaseFooter;
