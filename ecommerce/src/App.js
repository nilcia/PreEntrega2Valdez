import React from 'react';
import './App.css';
import NavbarMenu from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home/Home';
import SuculentId from './Routes/SuculentId/SuculentId';
import Suculents from './Routes/Suculents/Suculents';


export default function App() {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <br/>
      {/* <ItemListContainer greeting="Hola, haz comprado suculentas!" /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:id" element={<Suculents />} />
        <Route exact path="/item/:id" element={<SuculentId />} />
      </Routes>
    </BrowserRouter>
  );
}