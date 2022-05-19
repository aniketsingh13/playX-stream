import React, { useEffect, useState } from "react";
import { Aside, SingleVideoCard } from "../../Component";
import Navbar from "../../Component/Navbar/Navbar";
import "./SinglePage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SingleVideo } from "../../Utils/SingleVideo";

const SinglePage = () => {
  const { Id } = useParams();
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        setVideos(response.data.videos);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);
  const video = SingleVideo(videos, Id);

  return (
    <div>
      <div className="videoListing_navbar">
        <Navbar />
      </div>
      <div className="flex">
        <div className="SinglePageListing_aside">
          <Aside />
        </div>
        <div className="SinglePageListing_main flex ml-l mr-l mt-l ">
          {video && !error ? (
            <SingleVideoCard videos={video} key={video._id} />
          ) : (
            <h2 className="p-xl f-xl font-xl">...Loading</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
