import React from "react";
import Headers from "./Headers";

const Mainsection = ({ children }) => {
  return (
    <div>
      <Headers />
      {children}
    </div>
  );
};

export default Mainsection;
