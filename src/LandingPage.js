import React from 'react';
import BannerProductOne from './BannerProductOne';
import Hero from "./Hero";
import RowItems from './RowItems';
import "./Sass/LandingPage.scss";

function LandingPage() {
    return (
        <div className="landing-page">
            <Hero />
            <RowItems />
            <BannerProductOne />
        </div>
    )
}

export default LandingPage
