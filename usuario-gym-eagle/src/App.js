import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Inicio from '../src/Inicio';
import Rutina from './Pages/Rutina';
import Menu from './Pages/Menu';
import InicioSesion from './Pages/InicioSesion';
import Editar from './Pages/EditarUsuario.jsx';


function App() {
  const currentPath = window.location.pathname.toLowerCase(); // Convertir a minúsculas
  const navbarDisplay = (currentPath !== '/' && currentPath !== '/iniciosesion') ? "block" : "none";

  return (
    <Router>
      <div style={{ display: navbarDisplay }}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/rutinas" element={<Rutina />} />
        <Route path="/iniciosesion" element={<InicioSesion />} />
        <Route path="/editar" element={<Editar />} />
       
      </Routes>
    </Router>
  );
}


export default App;
