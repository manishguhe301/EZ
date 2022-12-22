import React from "react";

const Data = () => {
  const arr = [1, 2, 3];
  return (
    <>
      {arr.map((item, id) => {
        return (
          <div className="Data" key={item}>
            <span style={{ marginLeft: "20px" }}>
              Arabic Language Translation : EZ Assured
            </span>
            <span style={{ marginLeft: "95px" }}>Words</span>
            <span style={{ marginLeft: "118px" }}>0.1 AED</span>
            <span style={{ marginLeft: "129px" }}>0.09 AED</span>
            <span style={{ marginLeft: "144px" }}>10% ( 19% )</span>
          </div>
        );
      })}
    </>
  );
};

export default Data;
