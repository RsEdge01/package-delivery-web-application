import React from "react";
import BaseFooter from "../components/BaseFooter";
import BaseNavBar from "../components/BaseNavBar";
import ContactanosForm from "../components/ContactanosForm";

const Contactanos = () => {
  return (
    <body className="d-flex flex-column">
      <main className="flex-shrink-0">
        {/* <section className="py-5"> */}
        {/* <div className="container px-5"> */}
        <BaseNavBar></BaseNavBar>
        <header className="py-5">
          <div className="container px-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xxl-6">
                <ContactanosForm></ContactanosForm>
              </div>
            </div>
          </div>
        </header>
        <footer className="bg-dark py-4 mt-auto">
          <div className="container px-5">
            <BaseFooter></BaseFooter>
          </div>
        </footer>
        {/* </div> */}
        {/* </section> */}
      </main>
    </body>
  );
};

export default Contactanos;
