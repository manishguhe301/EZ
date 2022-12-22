import React from "react";
import DescriptionArea from "./DescriptionArea";

const MainEntity = () => {
  return (
    <>
      <div className="MainEntity">
        <span className="Entities4">4 Entities</span>
        <div className="billingLocationSection">
          <span className="BillingLocation">Billing Location</span>
          <span className="EntityName">Entity Name</span>
          <span className="EntityCode">Entity Code</span>
          <span className="MSLAValid">MSLA Valid through</span>
          <span className="FileSharing">File Sharing</span>
        </div>
      <DescriptionArea />
      </div>
    </>
  );
};

export default MainEntity;
