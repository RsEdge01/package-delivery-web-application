import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Inicio from "./pages/Inicio";
import AcercaDe from "./pages/AcercaDe";
import Contactanos from "./pages/Contactanos";
import Login from "./pages/Login";
import Registro from "./pages/Registro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/AcercaDe" element={<AcercaDe />} />
        <Route path="/Contactanos" element={<Contactanos />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
