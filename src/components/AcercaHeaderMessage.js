import React from "react";
import "./GlobalStyles.css";

const AcercaHeaderMessage = () => {
  return (
    <div className="text-center my-5">
      <h1 className="fw-bolder mb-3">
        Nuestra mision es la poder realizar envios a cualquier lugar de
        Colombia.
      </h1>
      <p className="lead fw-normal text-muted mb-4">
        PickUp "R" Us ™ fue creada partiendo de la necesidad de las personas
        para poder realizar envios a sus seres queridos sin importar que tan
        lejos esten dentro del pais.
      </p>
      {/* <a className="btn btn-primary btn-lg" href="#scroll-target">
        Read our story
      </a> */}
    </div>
  );
};

export default AcercaHeaderMessage;
