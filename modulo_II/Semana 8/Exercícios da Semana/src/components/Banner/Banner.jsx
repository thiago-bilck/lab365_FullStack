/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";
import { BannerContext } from "../../contexts/BannerContext";

const Banner = () => {

  const [banner, ] = useContext(BannerContext)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          {/* <p className="h4 pt-2 ">{banner.map((item, index)=>renderBannerItem(item,index))}</p> */}

          <h3>{banner.title}</h3>
          <h4>{banner.subtitle}</h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
