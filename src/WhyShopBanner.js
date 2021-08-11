import React from 'react';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import LanguageIcon from '@material-ui/icons/Language';
import HttpsIcon from '@material-ui/icons/Https';
import "./Sass/WhyShopBanner.scss";

function WhyShopBanner() {
    return (
        <div className="wsbanner">
            <div className="wsbanner-flex">
                <div className="wsbanner-header">
                    <h2>Why shop with us?</h2>
                </div>
                <div className="wsbanner-items">
                    <div className="wsbanner-item">
                        <div className="wsbanner-item-content">
                            <MonetizationOnIcon />
                            <h3>Low Prices</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div className="wsbanner-item">
                        <div className="wsbanner-item-content">
                            <LocalShippingIcon />
                            <h3>Fast Shipping</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div className="wsbanner-item">
                        <div className="wsbanner-item-content">
                            <HeadsetMicIcon />
                            <h3>Customer Service</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div className="wsbanner-item">
                        <div className="wsbanner-item-content">
                            <LanguageIcon />
                            <h3>Online Refunds</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div className="wsbanner-item">
                        <div className="wsbanner-item-content">
                            <HttpsIcon />
                            <h3>Secure Payments</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyShopBanner
