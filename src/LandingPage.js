import React from 'react';
import BannerProductOne from './BannerProductOne';
import CardDouble from './CardDouble';
import Hero from "./Hero";
import RowItems from './RowItems';
import "./Sass/LandingPage.scss";

function LandingPage() {
    return (
        <div className="landing-page">
            <Hero />
            <RowItems />
            <BannerProductOne />
            <CardDouble />
        </div>
    )
}

export default LandingPage
