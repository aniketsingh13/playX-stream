import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";

import "./Home.css";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { useVideo } from "../../Context/VideoContext";
const Home = () => {
  const { state, dispatch } = useVideo();
  const { categories } = state;
  useDocumentTitle("Home");

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
        <Link
          to="/videolisting"
          className="centerContainer_btn f-m font-l p-s"
          onClick={() => dispatch({ type: "FILTERCATEGORIES", payload: "All" })}
        >
          Explore Games
        </Link>
      </div>
      <h3 className="f-m font-l p-s">Categories</h3>
      <div className="flex flex-center category_container">
        {categories.map(({ _id, categoryName, image }) => (
          <Link
            to="/videolisting"
            key={_id}
            onClick={() =>
              dispatch({ type: "FILTERCATEGORIES", payload: categoryName })
            }
            className="categoriesType_container"
          >
            <img src={image} alt={categoryName} className="category_img" />
            <div className="categroies_nameDiv p-xss">
              <h3 className="categories_Name f-m font-xl p-xss">
                {categoryName}
              </h3>
            </div>
          </Link>
        ))}
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
