import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiFastForwardButton } from "react-icons/gi";
import Mainsection from "../Component/Mainsection";
const Choosingus = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <h3>Why</h3>
            <h3>Choosing Us</h3>
          </div>
          <div className="col-md-3">
            <p>Luxury facilities</p>
            <p>
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <button className="btn">
              More Info{" "}
              <span>
                <GiFastForwardButton />
              </span>
            </button>
          </div>
          <div className="col-md-3">
            <p>Affordable Price</p>
            <p>
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <button className="btn">
              More Info{" "}
              <span>
                <GiFastForwardButton />
              </span>
            </button>
          </div>
          <div className="col-md-3">
            <p>Many Choices</p>
            <p>
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <button className="btn">
              More Info{" "}
              <span>
                <GiFastForwardButton />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choosingus;
