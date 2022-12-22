import React from "react";
import AnotherCompanies from "./AnotherCompanies";
import Data from "./Data";

const DescriptionArea = () => {
  return (
    <div>
      <div className="DescriptionArea">
        <div className="Riyadh">
          <span style={{ marginLeft: "24px" }}>
            Riyadh, Kingdom of Saudi Arabia
          </span>
          <span style={{ marginLeft: "107px" }}>
            Lucas Films Private Limited
          </span>
          <span style={{ marginLeft: "107px" }}>LUCF01</span>
          <span style={{ marginLeft: "135px" }}>3 June 2022 - 5 June 2030</span>
          <span style={{ marginLeft: "107px" }}>External</span>
          <span style={{ marginLeft: "80px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="#3CC3F2"
              className="bi bi-chevron-up svg_Arrow_up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          </span>
        </div>
        <div className="AdressArea">
          <div className="address">
            <span>Address</span>
            <br />
            <span style={{ marginTop: "100px" }}>Line 1</span>
            <br />
            <span>Line 2</span>
            <br />
            <span>City, Country</span>
            <br />
            <span>ZIP Code</span>
            <div className="ChargeCodePoNo">
              <span>Charge Code / PO Number</span>
              <br />
              <span>Required</span>
            </div>
            <div className="MSLA" style={{ marginTop: "16px" }}>
              <span>MSLA</span>
              <br />
              <span>
                20200916 EZ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill=""
                  className="bi bi-code"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
                </svg>{" "}
                LucasFilms MOU_signed by George.pdf
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="#3CC3F2"
                  className="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: "10px" }}
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#3CC3F2"
                  className="bi bi-download"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: "10px" }}
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="CompanyRegVal">
            <div className="CompanyRegistrationName">
              <span>Company Registration Name</span>
              <br />
              <span>UICE87F2T749WEY</span>
            </div>
            <br />
            <div className="CompanyRegistrationValidity">
              <span>Company Registration Validity</span>
              <br />
              <span>5 June 2025</span>
            </div>
            <div className="DurationOfStorage">
              <span>Duration Of File Storage</span>
              <br />
              <span>90 Days</span>
            </div>
          </div>
          <div className="TaxRegistrationNoTRN">
            <div className="TaxRegistrationNo">
              <span>TAX Registration No</span>
              <br />
              <span>AHR37T983Q7TRG8FG</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="27"
                fill="#3CC3F2"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
                style={{
                  marginLeft: "60px",
                  marginRight: "10px",
                }}
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </div>
            <div className="trnvalidity" style={{ marginTop: "16px" }}>
              <span>TRN Validity</span>
              <br />
              <span>5 June 2025</span>
            </div>
            <div className="currency" style={{ marginTop: "16px" }}>
              <span>Currency</span>
              <br />
              <span>US Dollar ($)</span>
            </div>
            <div className="VatWht" style={{ marginTop: "16px" }}>
              <span>VAT + WHT</span>
              <br />
              <span>5% + 5%</span>
            </div>
          </div>
        </div>
        <div className="Corporateprice">
          <span style={{ marginTop: "16px", marginLeft: "32px" }}>
            Corporate Price As MSLA
          </span>
          <div className="servicesUnits">
            <span style={{ marginLeft: "33px", marginTop: "8px" }}>
              Service
            </span>
            <span style={{ marginLeft: "355px", marginTop: "8px" }}>Units</span>
            <span style={{ marginLeft: "128px", marginTop: "8px" }}>
              List Price
            </span>
            <span style={{ marginLeft: "119px", marginTop: "8px" }}>
              Offered Price
            </span>
            <span style={{ marginLeft: "118px", marginTop: "8px" }}>
              Discount
            </span>
            <Data />
          </div>
        </div>
      </div>
      <AnotherCompanies />
    </div>
  );
};

export default DescriptionArea;
