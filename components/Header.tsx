import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="half">
        <div className="spacing">
          <h1>
            Eco <span>Scan</span>
          </h1>
          <p>
            Introducing our new recycling app that makes recycling easy and
            efficient!
          </p>
          <p>
            Whether it`s paper, plastic, or glass, our app will provide clear
            instructions on how to recycle each item.
          </p>
          <button className="ctaButton">Read more</button>
        </div>
      </div>
      <div className="backgroundImage"></div>
    </div>
  );
};

export default Header;
