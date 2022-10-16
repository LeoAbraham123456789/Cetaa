import React from "react";
import "./Footer.scss";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="contents">
        <div className="writings">
          <div className="first_line">
            <p className="items">Powered By</p>
          </div>
          <div className="second_line">
            <p className="items">Terms of Use</p>
            <p className="items">Privacy Policy</p>
            <p className="items">Disclaimer</p>
          </div>
        </div>
        <div className="button">Feedback</div>
      </div>
    </div>
  );
};
