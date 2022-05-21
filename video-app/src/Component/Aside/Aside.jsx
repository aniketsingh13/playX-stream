import React from "react";
import "./Aside.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { BiLike } from "react-icons/bi";
import { MdOutlineWatchLater, MdHistory } from "react-icons/md";

const Aside = () => {
  
  return (
    <div>
      <div className="flex flex-center flex-column mt-s">
        <div className="aside_Iconscontainer  " >
          <Link to="/" className="flex f-m p-xss">
            <span className="aside_icon ">
              <AiOutlineHome />
            </span>
            <span className="ml-m font-l aside_icon">Home</span>
          </Link>
        </div>
        <div className="aside_Iconscontainer mt-s  ">
          <Link to="/videolisting" className="flex f-m p-xss"  >
            <span className="aside_icon ">
              <MdExplore />
            </span>
            <span className="ml-m font-l aside_icon ">Explore</span>
          </Link>
        </div>
        <div className="aside_Iconscontainer  mt-s">
          <Link to="" className="flex f-m p-xss">
            <span className="aside_icon ">
              <CgPlayList />
            </span>
            <span className="ml-m font-l aside_icon">Playlist</span>
          </Link>
        </div>
        <div className="aside_Iconscontainer  mt-s">
          <Link to="" className="flex f-m p-xss">
            <span className="aside_icon ">
              <MdOutlineWatchLater />
            </span>
            <span className="ml-m font-l aside_icon">Watch later</span>
          </Link>
        </div>
        <div className="aside_Iconscontainer  mt-s">
          <Link to="" className="flex f-m p-xss">
            <span className="aside_icon ">
              <BiLike />
            </span>
            <span className="ml-m font-l aside_icon">Liked Video</span>
          </Link>
        </div>
        <div className="aside_Iconscontainer  mt-s">
          <Link to="" className="flex f-m p-xss">
            <span className="aside_icon ">
              <MdHistory />
            </span>
            <span className="ml-m font-l aside_icon">History</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aside;
