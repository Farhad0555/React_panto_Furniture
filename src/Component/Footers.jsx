import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footers = () => {
  return (
    <div className="container footer">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 text-center">
          <p className="mb-0">
            {" "}
            <strong>Copyright © {new Date().getFullYear()}</strong>{" "}
          </p>
        </div>
        <div className="col-md-2 text-center">
          <p className="mb-0">
            <strong>Terms & Conditions</strong>
          </p>
        </div>
        <div className="col-md-2 text-center">
          <p className="mb-0">
            {" "}
            <strong>Privacy Policy</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footers;
