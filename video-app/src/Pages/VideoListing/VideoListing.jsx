import React, { useEffect, useReducer, useState } from "react";
import "./VideoListing.css";
import { Aside, Navbar, VideoCard } from "../../Component";
import axios from "axios";
import { filterVideo } from "../../Utils/filterVideo";
import ReducerFunction from "../../Reducer/ReducerFunction";

const VideoListing = () => {
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(ReducerFunction, {
    videos: [],
    categories: [],
    selectedCategory: "All",
  });
  const { videos, categories, selectedCategory } = state;
  const filterCard = filterVideo(videos, selectedCategory);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        setLoading(false);
        dispatch({ type: "SET_VIDEO", payload: response.data.videos });
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setLoading(false);
        dispatch({ type: "SET_CATEGORIES", payload: response.data.categories });
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);

  return (
    <div>
      <div className="videoListing_navbar">
        <Navbar />
      </div>
      <div className="flex">
        <div className="videoListing_aside">
          <Aside />
        </div>
        <div className="videoListing_main">
          <div className="VideoListing_category mt-l ml-l mb-l flex">
            {categories.map(({ _id, categoryName }) => (
              <p className="category_Name p-xss font-l"
                key={_id}
                onClick={() =>
                  dispatch({ type: "FILTERCATEGORIES", payload: categoryName })
                }
              >
                {categoryName}
              </p>
            ))}
          </div>
          <div className="VideoListing_Card ml-s mt-s mb-s flex">
            {filterCard.map((video) => {
              return <VideoCard key={video._id} videos={video} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoListing;
