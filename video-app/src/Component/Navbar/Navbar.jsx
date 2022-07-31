import React from "react";
import "./Navbar.css";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useToast } from "../../Hooks/useToast";

const Navbar = () => {
  const { user,setUser } = useAuth();
  const {showToast} = useToast();

  const logoutHandler = () =>{
    localStorage.removeItem('token');
    setUser(null)
    showToast("success","Logged out!")
  }
  return (
    <div>
      <div className="navbar_cont flex p-m">
        <Link to="/" className="Nav_Title">
          <h3 className="f-m font-l ">PlayX-Stream</h3>
        </Link>
        {user ? (
          <button className="logout_btn f-m font-l mr-s" onClick={logoutHandler}>logout</button>
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
