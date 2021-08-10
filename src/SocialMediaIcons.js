import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Socialmediaicons(props) {
  return (
    <div>
      <a
        href={props.weburl}
        title={props.webtitle}
        rel="noopener"
        target="_blank"
      >
        {props.socialmedia == "facebook" && <FacebookIcon />}
        {props.socialmedia == "twitter" && <TwitterIcon />}
        {props.socialmedia == "linkedin" && <LinkedInIcon />}
        {props.socialmedia == "pinterest" && <PinterestIcon />}
        {props.socialmedia == "instagram" && <InstagramIcon />}
      </a>{" "}
    </div>
  );
}

export default Socialmediaicons;
