import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import Values from "./components/values";
import { GlobiaGroup } from "./components/GlobiaGroup";
import CardHeader from "./components/CardHeader";
import "./i18n";

import "./App.css";

// Yeni bileşeni ekliyoruz

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();

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

              <GetToKnowUs data={landingPageData.GetToKnowUs} />
              <About data={landingPageData.About} />
              <Services data={landingPageData.Services} />
              <Products data={landingPageData.Products} />
              <Sustainability data={landingPageData.Sustainability} />
              <Media data={landingPageData.Media} />
              <CardHeader />
              <Contact data={landingPageData.Contact} />
            </>
          }
        />
        <Route path="/values" element={<Values />} />
        <Route path="/globia-group" element={<GlobiaGroup />} />
      </Routes>
    </div>
  );
};

export default App;
