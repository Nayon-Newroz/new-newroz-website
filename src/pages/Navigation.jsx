import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Test from "../Test";
import Company from "./Company";
import Services from "./Services";
import ServicesDetails from "./ServicesDetails";
import Contact from "./Contact";
import Career from "./Career";
import CareerDetails from "./CareerDetails";
import ApplyForm from "./ApplyForm";
import CaseStudies from "./CaseStudies";
import Products from "./Products";
import FastPayEwallet from "./FastPayEwallet";

const Navigation = ({ translations, lang, darkMode }) => {
  return (
    <div>
      {" "}
      <Routes>
        <Route
          path="/"
          element={
            <Home translations={translations} lang={lang} darkMode={darkMode} />
          }
        />
        <Route
          path="/company"
          element={
            <Company
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/services"
          element={
            <Services
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/services/details"
          element={
            <ServicesDetails
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/career"
          element={
            <Career
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/career/details"
          element={
            <CareerDetails
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/case-studies"
          element={
            <CaseStudies
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />
        <Route
          path="/product/fastpay-ewallet"
          element={
            <FastPayEwallet
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        />

        {/* <Route
          path="/apply"
          element={
            <ApplyForm
              translations={translations}
              lang={lang}
              darkMode={darkMode}
            />
          }
        /> */}
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default Navigation;
