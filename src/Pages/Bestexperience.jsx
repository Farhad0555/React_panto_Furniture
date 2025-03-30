import React from "react";
import expricences from "../assets/expricences.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLongArrowAltRight } from "react-icons/fa";
const Bestexperience = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={expricences} alt="" className="w-100" />
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Bestexperience;
