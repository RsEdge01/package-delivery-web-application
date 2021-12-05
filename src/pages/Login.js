import React from "react";
import BaseFooter from "../components/BaseFooter";
import BaseNavBar from "../components/BaseNavBar";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <body className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        <BaseNavBar></BaseNavBar>
        <header className="bg-dark py-5">
          <div className="container px-5">
            <LoginForm></LoginForm>
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
}

export default Login;
