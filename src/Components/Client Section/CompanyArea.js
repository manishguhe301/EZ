import React from "react";

const CompanyArea = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <>
      <div className="companyArea">
        {array.map((item, id) => {
          return (
            <div className="CompanyData" key={item}>
              <div className="company">
                <span className="CompanyName">Company Name</span>
                <span className="CCDE">CCDE</span>
              </div>
              <div className="CompanyEntities">
                <span>8 Entities</span>
                <span>64 Users</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CompanyArea;
