import React from "react";
import "./Sass/Contact.scss";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-flex">
        <div className="contact-left">
          <h2>Have something to tell us?</h2>
          <hr />
          <h3>Contact Information</h3>
          <ul>
            <li><LocationOnOutlinedIcon /> Lorem, Lorem 12345, USA</li>
            <li><PhoneEnabledIcon /> (610)-123-4567</li>
            <li><PhoneIphoneIcon /> (610)-123-4565</li>
            <li><EmailIcon /> example@gmail.com</li>
          </ul>
          <h4>Our Attitude</h4>
          <p>
            We take customer feedback very seriously and would love to hear
            about your experience doing business with us. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <form className="contactform">
          <div className="contactform-top">
            <p>Contact Us</p>
          </div>
          <div className="contactform-content">
            <div className="form-group">
              <label htmlFor="name" className="mt0">
                Name
              </label>
              <input
                type="text"
                name="name"
                aria-required="true"
                aria-label="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                aria-required="true"
                aria-label="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                aria-required="true"
                aria-label="phone"
                placeholder="Phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                aria-required="true"
                aria-label="message"
                placeholder="Message"
              />
            </div>
            <button type="submit" className="hero-button">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
