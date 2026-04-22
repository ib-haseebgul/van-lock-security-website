import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ChooseYourVan from "./pages/ChooseYourVan";
import OurServices from "./pages/OurServices";
import Fleets from "./pages/Fleets";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/chooseYourVan" element={<ChooseYourVan />} />
          <Route path="/ourServices" element={<OurServices />} />
          <Route path="/fleets" element={<Fleets />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;