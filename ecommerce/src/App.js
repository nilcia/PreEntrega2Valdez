import React from 'react';
import './App.css';
import NavbarMenu from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import SuculentId from './routes/SuculentId/SuculentId';
import Suculents from './routes/Suculents/Suculents';


export default function App() {
  return (
    <BrowserRouter>
      <NavbarMenu />
      {/* <ItemListContainer greeting="Hola, haz comprado suculentas!" /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:id" element={<Suculents />} />
        <Route exact path="/item/:id" element={<SuculentId />} />
      </Routes>
    </BrowserRouter>
  );
}