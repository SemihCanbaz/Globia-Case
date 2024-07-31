import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { GetToKnowUs } from "./components/GetToKnowUs";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Products } from "./components/products";
import { Sustainability } from "./components/Sustainability";
import { Media } from "./components/media";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
// Yeni bileşeni ekliyoruz

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header data={landingPageData.Header} />
              <GetToKnowUs data={landingPageData.Features} />{" "}
              <About data={landingPageData.About} />
              <Services data={landingPageData.Services} />
              <Products data={landingPageData.Products} />{" "}
              <Sustainability data={landingPageData.Sustainability} />
              <Media data={landingPageData.Media} />
              <Contact data={landingPageData.Contact} />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
