import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Choosingus from "./Pages/Choosingus";
import Bestexperience from "./Pages/Bestexperience";
import Seriousmaterials from "./Pages/Seriousmaterials";
import Testimonials from "./Pages/Testimonials";
import Footers from "./Component/Footers";

const App = () => {
  return (
    <div>
      <Homepage />
      <div className="container p-5 mt-5 mb-5">
        <Bestexperience />
      </div>
      <div className="container p-5 mt-5 mb-5">
        <Seriousmaterials />
      </div>
      <div className="container p-5 mt-5 mb-5">
        <Testimonials />
      </div>
      <div className="container p-5 mt-2 ">
        <Footers />
      </div>
    </div>
  );
};

export default App;
