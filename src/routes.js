import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import Manifesto from "./paginas/manifesto";
import './index.css';
import Footer from "componentes/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="*" element={<h1> Página não encontrada </h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
