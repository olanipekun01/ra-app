import React from "react";
import "../../styles/Management.scss";
import BatchImg from '../../assets/newpics/Group 26086148.jpg'
import { MdOutlineSettingsInputComposite } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";



const BatchManagement = () => {
  return (
    <>
      <div className="batch">
        <div className="bactdiv">
          <div className="batchtext">
            <h1> A user-friendly and <br /> straightforward <br /> experience <br /> with RA_SYS</h1>
            <p>Discover the high-energy in-app activities that position RA_SYS as the top choice for users</p>
            <div className="batch_div">
              <div className="work">
                  <FaNetworkWired/>
                <h2>Work Management</h2>
                <p>Grouping employees into department for better judgement on requests</p>
              </div>
              <div className="req">
              <MdOutlineSettingsInputComposite />
                <h2>Request Tracking</h2>
                <p>Easy tracking of request and Comments </p>
              </div>
            </div>
          </div>

          <div className="batchimage">
          <img src={BatchImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BatchManagement;
