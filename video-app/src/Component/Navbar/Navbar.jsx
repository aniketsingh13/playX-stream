import React from "react";
import "./Navbar.css";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar_cont flex p-m">
        <Link to='/' className="Nav_Title"><h3 className="f-m font-l ">PlayX-Stream</h3></Link>
        <div className="f-l  mr-s">
          <BsPerson />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
