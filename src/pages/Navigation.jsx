import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Test from "../Test";

const Navigation = ({ translations, lang }) => {
  return (
    <div >
      {" "}
      <Routes>
        <Route
          path="/"
          element={<Home translations={translations} lang={lang} />}
        />

        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default Navigation;
