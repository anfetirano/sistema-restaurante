// src/Routes/Routes.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header"; // Importamos el Header
import Footer from "../Components/Footer";

import Home from "../Pages/Home";
import Inventario from "../Pages/Inventario";
import Pedidos from "../Pages/Pedidos";
import Preelaboraciones from "../Pages/Preelaboraciones";
import Configuracion from "../Pages/Configuracion";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header /> {/* Incluimos el Header aquí */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/preelaboraciones" element={<Preelaboraciones />} />
        <Route path="/configuracion" element={<Configuracion />} />
      </Routes>
      <Footer /> {/* Footer se renderiza al final */}
    </Router>
  );
};

export default AppRoutes;
