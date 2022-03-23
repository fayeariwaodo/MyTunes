import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footlist">
          <h4>Shop and Learn</h4>
          <hr />
          <ul>
            <li>Music</li>
            <li>Movies</li>
            <li>Shows</li>
            <li>Apps</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div className="footlist">
          <h4>Orange Store</h4>
          <hr />
          <ul>
            <li>Find a store</li>
            <li>Today at Orange</li>
            <li>Orange camp</li>
            <li>Financing</li>
            <li>Order status</li>
          </ul>
        </div>

        <div className="footlist">
          <h4>Education and Business</h4>
          <hr />
          <ul>
            <li>Orange & Education</li>
            <li>Shop for college</li>
            <li>Orange and Business</li>
            <li>Shop for Business</li>
            <li>Jobs</li>
          </ul>
        </div>

        <div>
          <h4>About Orange</h4>
          <hr />
          <ul className="footlist">
            <li>News room</li>
            <li>Orange Leadership</li>
            <li>Investors</li>
            <li>Events</li>
            <li>Contact Orange</li>
          </ul>
        </div>
      </div>

      <div className="copy">
        <p className="height">Copyright © 2019 Orange myTunes</p>
      </div>
    </div>
  );
};

export default Footer;
