import React, { useEffect, useState } from "react";
import { Aside, SingleVideoCard } from "../../Component";
import Navbar from "../../Component/Navbar/Navbar";
import "./SinglePage.css";
import { useParams } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import axios from "axios";

const SinglePage = () => {
  const { Id } = useParams();
  const{state} = useVideo();
  const {error} = state;
  const [video,setVideo] = useState(null)

  

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${Id}`)
       setVideo(response.data.video)
      } catch (error) {
        console.log(error.response)
      }
    })()
  },[Id])

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
            <SingleVideoCard video={video} {...video}  key={video._id} />
          ) : (
            <h2 className="p-xl f-xl font-xl">...Loading</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
