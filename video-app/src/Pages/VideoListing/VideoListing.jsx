import React from "react";
import "./VideoListing.css";
import { Aside, Navbar, VideoCard } from "../../Component";
import { filterVideo } from "../../Utils/filterVideo";
import { useVideo } from "../../Context/VideoContext";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";

const VideoListing = () => {
  const {state,dispatch} = useVideo();
  const {videos,categories,selectedCategory} = state;
  const filterCard = filterVideo(videos, selectedCategory);
  useDocumentTitle("Explore")

  
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
