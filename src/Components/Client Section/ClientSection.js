import React from "react";
import CompanySection from "./CompanySection";

const ClientSection = () => {
  return (
    <div className="ClientSSECTION">
      <div className="client">
        <span className="Client_Span">Clients</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          //   width="18.67"
          //   height="16"
          fill="#3CC3F2"
          className="bi bi-sort-down Svg_Sort"
          viewBox="0 0 16 16"
        >
          <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
        </svg>
        <span className="CreationTime">Creation Time</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#3CC3F2"
          className="bi bi-plus-square-fill plus_Square"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
        </svg>
      </div>
      <div className="Input_Group">
        <input
          type="text"
          placeholder="Company, Entity, User, Domain, Service, Location"
        />
      </div>
      <CompanySection />
    </div>
  );
};

export default ClientSection;
