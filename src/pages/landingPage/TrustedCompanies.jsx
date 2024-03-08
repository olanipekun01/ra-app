import React from "react";
import "../../styles/TrustedCompanies.scss";
import Rectangle from "../../assets/Rectangle 130 (1).png";
import Rectangle1 from "../../assets/Rectangle 130 (2).png";
import Group1 from "../../assets/Rectangle 130.png";

const TrustedCompanies = () => {
  return (
    <>
      <div className="TrustedCompanies">
        <h1>Our Features</h1>

        <div className="trustcom">
          <div className="divtrust">
            <div className="imgdiv">
              <img src={Group1} alt="" />
            </div>
            <div className="textdiv">
              <h3>Staff Health Management System</h3>
              <p>
                With our paperless ideation, leave request based on staff health
                can be monitored and evaluated after a period of time{" "}
              </p>
              <a href="#">Learn Now</a>
            </div>
          </div>

          <div className="divtrust">
            <div className="imgdiv">
              <img src={Rectangle} alt="" />
            </div>
            <div className="textdiv">
              <h3>Single, Batch & Sorting approval of Leave Request</h3>
              <p>
                Leave request cam easily be sorted according to dates and time
                and other features for single or batch approval
              </p>
              <a href="#"> Learn Now</a>
            </div>
          </div>

          <div className="divtrust">
            <div className="imgdiv">
              <img src={Rectangle1} alt="" />
            </div>
            <div className="textdiv">
              <h3>Easy Tracking of Leave Request</h3>
              <p>Leave requested by staff can easily be monitored and feedback received immediately</p>
              <a href="#">Learn Now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedCompanies;
