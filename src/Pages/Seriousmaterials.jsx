import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import material3 from "../assets/material3.png";
import material1 from "../assets/material1.png";
import material2 from "../assets/material2.png";
import { FaLongArrowAltRight } from "react-icons/fa";
const Seriousmaterials = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6  mt-5">
            <h4 style={{ color: "#E58411" }}>Experiences</h4>
            <h1>we provide you the </h1>
            <h1>best experience</h1>
            <p>
              You don’t have to worry about the result because all of these
              interiors are made by people who are professionals in their fields
              with an elegant and lucurious style and with premium quality
              materials
            </p>
            <button className="btn">
              More Info{" "}
              <span style={{ color: "#E58411" }}>
                {" "}
                <FaLongArrowAltRight />
              </span>
            </button>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <img src={material1} alt="" className="w-100" />
                  </div>
                  <div className="col-md-6">
                    <img src={material2} alt="" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img src={material3} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seriousmaterials;
