import React from "react";
import BaseFooter from "../components/BaseFooter";
import AcercaHeaderMessage from "../components/AcercaHeaderMessage";
import BaseNavBar from "../components/BaseNavBar";

const AcercaDe = () => {
  return (
    <body className="d-flex flex-column">
      <main className="flex-shrink-0">
        <BaseNavBar></BaseNavBar>
        <header className="py-5">
          <div className="container px-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xxl-6">
                <AcercaHeaderMessage></AcercaHeaderMessage>
              </div>
            </div>
          </div>
        </header>
        <footer className="bg-dark py-4 mt-auto">
          <div className="container px-5">
            <BaseFooter></BaseFooter>
          </div>
        </footer>
      </main>
    </body>
  );
};

export default AcercaDe;
