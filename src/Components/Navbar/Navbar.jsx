import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">ABOUT US</div>
      <div className="links">CHAPTERS</div>
      <div className="links">NEWSROOM</div>
      <div className="links">EVENTS</div>
      <div className="links">ACTIVITIES</div>
      <div className="links">GALLERY</div>
      <div className="links">ENGAGE</div>
      <div className="links">CONTACT US</div>
      <Link to={{ pathname: "/second_page" }}>
        <div className="links">Second Page</div>
      </Link>
    </div>
  );
};
