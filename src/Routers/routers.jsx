import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/home";
import Sobre from "../Pages/sobre";
import Contato from "../Pages/contato";
import Login from "../Pages/login";
import Signup from "../Pages/signup";
import { MyRelatorioContextProvider } from "../hooks/MyRelatorioContext";
import { MyPermissoesContextProvider } from "../hooks/permissoes/MyPermissoesContext";

function Rotas() {
  return (
    <MyPermissoesContextProvider>
      <MyRelatorioContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </MyRelatorioContextProvider>
    </MyPermissoesContextProvider>

  );
}

export default Rotas;