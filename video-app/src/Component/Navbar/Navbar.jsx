import React from "react";
import "./Navbar.css";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="navbar_cont flex p-m">
        <Link to="/" className="Nav_Title">
          <h3 className="f-m font-l ">PlayX-Stream</h3>
        </Link>
        {user ? (
          <button>logout</button>
        ) : (
          <Link to="/login" style={{ color: "black" }}>
            <div className="f-l  mr-s">
              <BsPerson />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
