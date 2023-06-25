/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css'

const Banner = () => {
    const banner = [
    {
        p: 'Precisa de equipamentos?'
    },
    {
        p: 'Queremos lhe ajudar!'
    }
];

const renderBannerItem = (bannerItem,index) => {
    return(
            <p key={index}>{bannerItem.p}</p>
    )
}

return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <p className="h4 pt-2 ">{banner.map((item, index)=>renderBannerItem(item,index))}</p>
            </div>

        </div>


    </div>
)
};

export default Banner;