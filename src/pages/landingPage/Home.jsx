import React from "react";
import "../../styles/Home.scss";
import chart from '../../assets/newpics/chart.png'

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home_section">
      <div className="divsection">
        <div className="valuediv"> <br /><br />
          <p>We Give the Best value  for  <br />
            <br />for your paperless <br />  <br />organisation Goal
          </p>

          <div className="sm">
            <p>Get started with a free account today</p>
            <div className="get">
              <a href="">Get Started</a>
            </div>
          </div>
        </div>
        <div className="imgdiv">
          <img src={chart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
