import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { Routes, Route, useLocation } from "react-router-dom";
=======
>>>>>>> parent of eb51822 (Last-Design)
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import Values from "./components/values";
import { GlobiaGroup } from "./components/GlobiaGroup";
import CardHeader from "./components/CardHeader";
import "./i18n";

import "./App.css";
<<<<<<< HEAD

// Yeni bileşeni ekliyoruz
=======
>>>>>>> parent of eb51822 (Last-Design)

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
<<<<<<< HEAD
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
=======
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
>>>>>>> parent of eb51822 (Last-Design)
    </div>
  );
};

export default App;
