import React, { useState } from "react";
import "./GlobalStyles.css";

const LoginForm = () => {
  useState();

  const clickHandlerLogin = () => {
    console.log("Clicked");
  };

  return (
    <section className="py-5">
      <div className="container px-5">
        {/* <!-- Contact form--> */}
        <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-envelope"></i>
            </div>
            <h1 className="fw-bolder">Iniciar sesión</h1>
            <p className="lead fw-normal text-muted mb-0">
              Ingrese correo y contraseña
            </p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              {/* <!-- * * * * * * * * * * * * * * *-->
                  <!-- * * SB Forms Contact Form * *-->
                  <!-- * * * * * * * * * * * * * * *-->
                  <!-- This form is pre-integrated with SB Forms.-->
                  <!-- To make this form functional, sign up at-->
                  <!-- https://startbootstrap.com/solution/contact-forms-->
                  <!-- to get an API token!--> */}
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                {/* <!-- Email address input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="Correo-electronico"
                    type="email"
                    placeholder="nombre@example.com"
                    data-sb-validations="required,Correo-electronico"
                  />
                  <label for="Correo-electronico">Correo electronico</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="Correo-electronico:required"
                  >
                    Se requiere Correo electronico.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="Correo-electronico:Correo-electronico"
                  >
                    Correo electronico no valido.
                  </div>
                </div>
                {/* <!-- Password input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="Contraseña"
                    type="text"
                    placeholder="Inserte contraseña"
                    data-sb-validations="required,Contraseña"
                  />
                  <label for="Contraseña">Contraseña</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="Contraseña:required"
                  >
                    Debe ingresar contraseña.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="Contraseña:Contraseña"
                  >
                    Contraseña incorrecta.
                  </div>
                </div>
                {/* <!-- Submit success message-->
                      <!---->
                      <!-- This is what your users will see when the form-->
                      <!-- has successfully submitted--> */}
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Registro exitoso!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>
                {/* <!-- Submit error message-->
                      <!---->
                      <!-- This is what your users will see when there is-->
                      <!-- an error submitting the form--> */}
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                {/* <!-- Submit Button--> */}
                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-lg"
                    id="submitButton"
                    type="submit"
                    onClick={clickHandlerLogin}
                  >
                    Iniciar sesion
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
