import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "../assets/banner.png";
import Mainsection from "../Component/Mainsection";
import Sellingproduct from "./Sellingproduct";
import { MdManageSearch } from "react-icons/md";
import Choosingus from "./Choosingus";

const Homepage = () => {
  return (
    <div>
      <Mainsection>
        <div
          className="container "
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "150px 0",
            color: "white",
            zIndex: 1, // Ensure text is above the shadow
            boxShadow: "0px 10px 20px rgba(193, 160, 160, 0.3)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(241, 233, 233, 0.4)", // Shadow-like overlay
              zIndex: -1,
            }}
          ></div>
          <div className="row d-flex mt-2 mb-5 justify-content-center5 ">
            <div className="col-md-12 text-center">
              <h1>Make your interior more</h1>
              <h1> minimalistic & modern</h1>
              <p>
                Turn your room with panto into a lot more minimalist and modern
                with ease and speed
              </p>
            </div>
          </div>
          <div className="row d-flex mt-5 justify-content-center5 ">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <form
                className="col-md-12 d-flex justify-content-center position-relative"
                role="search"
              >
                <input
                  className="form-control  rounded"
                  type="submit"
                  placeholder="Search"
                  aria-label="Search"
                />
                <MdManageSearch
                  className="position-absolute"
                  style={{
                    right: "10px", // Position the icon inside the input
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "black", // Icon color set to black
                  }}
                />
              </form>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <div className="container p-5 mt-5 mb-5">
          <Choosingus />
        </div>
        <div className="container p-5 mt-5 mb-5">
          <Sellingproduct />
        </div>
      </Mainsection>
    </div>
  );
};

export default Homepage;
