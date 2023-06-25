/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";

const Banner = ({ slogan }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          {/* <p className="h4 pt-2 ">{banner.map((item, index)=>renderBannerItem(item,index))}</p> */}

          <h3>{slogan}</h3>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  slogan: PropTypes.string.isRequired,
};

export default Banner;
