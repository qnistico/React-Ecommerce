import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxHero = (props) => {
  return (
    <ParallaxBanner
      className="parallaxclass"
      layers={[{ image: props.imgsrc, amount: 0.35}]}
      style={{ height: props.height, position: props.position}}
    >
      <div>{props.children}</div>
    </ParallaxBanner>
  );
};

export default ParallaxHero
