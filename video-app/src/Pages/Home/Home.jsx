import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";

import "./Home.css";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
const Home = () => {

  useDocumentTitle("Home")

  return (
    <div>
      <div className="home_nav">
        <Navbar />
      </div>
      <div className="home_centerContainer">
        <img
          className="home_img"
          src="https://res.cloudinary.com/aniket-singh/image/upload/v1652624759/Images/gotham-knights-keyart-2021_cqwmqx.jpg"
          alt="Gotham_Knights"
        />
        <Link to="/videolisting" className="centerContainer_btn f-m font-l p-s">
          Explore Games
        </Link>
      </div>
      <h3 className="f-m font-l p-s">Categories</h3>
      <div className="flex flex-center category_container">
        <div className="categoriesType_container ">
          <img
            src="https://res.cloudinary.com/aniket-singh/image/upload/v1652628177/Images/no-mans-sky-1621906996170_hguwaw.jpg"
            className="category_img"
            alt="games"
          />
          <div className="categroies_nameDiv p-xss">
            <h3 className="categories_Name f-m font-xl p-xss">Games</h3>
          </div>
        </div>
        <div className="categoriesType_container ">
          <img
            src="https://res.cloudinary.com/aniket-singh/image/upload/v1652637547/Images/l-intro-1645209424_msay4q.jpg"
            className="category_img"
            alt="controller"
          />
          <div className="categroies_nameDiv p-xss">
            <h3 className="categories_Name f-m font-xl p-xss">Controller</h3>
          </div>
        </div>
        <div className="categoriesType_container ">
          <img
            src="https://res.cloudinary.com/aniket-singh/image/upload/v1652638383/Images/https___hybrismediaprod.blob.core.windows.net_sys-master-phoenix-images-container_hd3_h57_9081222660126_RZ04-02670100-R3U1-0_yxptea.jpg"
            className="category_img"
            alt="accessories"
          />
          <div className="categroies_nameDiv p-xss">
            <h3 className="categories_Name f-m font-xl p-xss">Accesssories</h3>
          </div>
        </div>
        <div className="categoriesType_container ">
          <img
            src="https://res.cloudinary.com/aniket-singh/image/upload/v1652639014/Images/dYpWGqygVSVet396ZyNHWZ_ek2ecn.jpg"
            className="category_img"
            alt="console"
          />
          <div className="categroies_nameDiv p-xss">
            <h3 className="categories_Name f-m font-xl p-xss">Console</h3>
          </div>
        </div>
      </div>
      <footer className="category_footer mt-l mb-m">
        <h3 className="f-s font-l">made with 💗 by Aniket Singh</h3>
        <div className="f-m p-s">
          <a
            href="https://github.com/aniketsingh13"
            target="_blank"
            className="fotter_icons mr-m"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="https://twitter.com/ANIKETS42266714"
            target="_blank"
            className="fotter_icons"
          >
            <AiOutlineTwitter />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
