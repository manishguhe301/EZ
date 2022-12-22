import React from "react";
import EzBoxes from "./EzBoxes";

const EZSideBar = () => {
  return (
    <div className="EZSidebar">
      <div className="EZSidebar2">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E0BAQEfgcnqD1tlxQ/company-logo_200_200/0/1592378165630?e=2159024400&v=beta&t=igGQfL09r5C7jaw-fC81jU9ae96aGGA84lebINGQ2iI"
            alt="Ez Works"
            className="EzWroksLOgo"
          />
          <EzBoxes />
          <EzBoxes />
          <EzBoxes />
      </div>
    </div>
  );
};

export default EZSideBar;
