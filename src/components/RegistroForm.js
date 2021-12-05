import React from "react";
import "./GlobalStyles.css";

function RegistroForm() {
  const clickHandlerSignUp = () => {
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
            <h1 className="fw-bolder">Registro</h1>
            <p className="lead fw-normal text-muted mb-0">
              Ingrese los datos correspondientes
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
                {/* <!-- Name input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="Nombre-completo"
                    type="text"
                    placeholder="Inserte su nombre..."
                    data-sb-validations="required"
                  />
                  <label for="Nombre-completo">Nombre completo</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="Nombre-completo:required"
                  >
                    Debe Ingresar el nombre.
                  </div>
                </div>
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
                {/* <!-- Confirm Password input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="Cofirmar-contraseña"
                    type="text"
                    placeholder="Confirmar contraseña"
                    data-sb-validations="required,Cofirmar-contraseña"
                  />
                  <label for="Confirmar-contraseña,">
                    Confirmar contraseña
                  </label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="Cnfirmar-contraseña:required"
                  >
                    Debe coincidar la contraseña.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="Confirmar-contraseña:Contraseña"
                  >
                    No coincide la Contraseña.
                  </div>
                </div>
                {/* <!-- CC number input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="Cedula-NIT"
                    type="tel"
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label for="Cedula-NIT">Cedula/NIT</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="Cedula-NIT:required"
                  >
                    Se requiere numero cedula o NIT de empresa.
                  </div>
                </div>
                {/* <!-- Address input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="Direccion"
                    type="text"
                    placeholder="Inserte direccion"
                    data-sb-validations="required"
                  />
                  <label for="Direccion">Dirección</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="Direccion:required"
                  >
                    Se requiere Dirección.
                  </div>
                </div>
                {/* <!-- Manager input-->                                     */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="Empresa"
                    type="text"
                    placeholder="Inserte nombre de empresa"
                    data-sb-validations="required"
                  />
                  <label for="Empresa">Empresa</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="Telefono:required"
                  >
                    Se requiere nombre de empresa.
                  </div>
                </div>
                {/* <!-- Phone number input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="Telefono"
                    type="tel"
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label for="Telefono">Telefono</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="Telefono:required"
                  >
                    Se requiere numero de telefeno.
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
                    className="btn btn-primary btn-lg disabled"
                    id="submitButton"
                    type="submit"
                    onClick={clickHandlerSignUp}
                  >
                    Registrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistroForm;
