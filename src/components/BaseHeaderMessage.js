import React from "react";
import "./GlobalStyles.css";

const BaseHeaderMessage = () => {
  return (
    <div className="row gx-5 align-items-center justify-content-center">
      <div className="col-lg-8 col-xl-7 col-xxl-6">
        <div className="my-5 text-center text-xl-start">
          <h1 className="display-5 fw-bolder text-white mb-2">
            Somos la mejor alternativa para el envio seguro de su mercancia!
          </h1>
          <p className="lead fw-normal text-white-50 mb-4">
            Gracias a los mas de 60 puntos distribuidos por toda Colombia
            podemos garantizar envios a cualquier parte del pais. Nuestro
            personal altamente calificado hace que la experiencia de nuestros
            clientes sea unica, generando asi confianza en nuestros servicio.
          </p>
          <div
            className="
        d-grid
        gap-3
        d-sm-flex
        justify-content-sm-center justify-content-xl-start
      "
          >
            <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">
              Programar
            </a>
            <a className="btn btn-outline-light btn-lg px-4" href="#!">
              Rastrear
            </a>
          </div>
        </div>
      </div>
      <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
        <img
          className="img-fluid rounded-3 my-5"
          src="https://dummyimage.com/600x400/343a40/6c757d"
          alt="..."
        />
      </div>
    </div>
  );
};

export default BaseHeaderMessage;
