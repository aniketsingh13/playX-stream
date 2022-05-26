import React, { useEffect, useState } from 'react';
import { Aside, Navbar, VideoCard } from '../../Component';
import { useFeature } from '../../Context/FeatureContext';
import "./Like.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../Context/AuthContext';

const Like = () => {
    const {featureState} = useFeature();
     const {encodedToken} = useAuth()
   const[likeVideo,setLikeVideo] = useState([])


   useEffect(() =>{
     (async () => {
      try {
        const response = await axios.get("/api/user/likes",{
             headers : {
              authorization: encodedToken
             }
        })
        setLikeVideo(response.data.likes)
      } catch (error) {
        console.log(error.response)
      }
     })()
   },[])

  return (
    <div>
        <div className='liked_navbar'>
        <Navbar />
        </div>
     <div className='flex'>
     <div className='like_aside'>
       <Aside />
     </div>
     <div className='like_main ml-s'>
        { featureState.likeVideos && featureState.likedVideos.length === 0 ? (<div className='mt-l'><h3 className="flex flex-center f-m font-l">
              Don't have any Liked Videos.
              <Link to="/videolisting" className="ml-s mr-s">
                explore
              </Link>
              🧐
            </h3></div>) :  (<div className='mt-l flex flex-row likeVideoContainer'>
                {likeVideo?.map((videos) => (
                    <VideoCard  key={videos._id} videos={videos} />
                ))}
              </div>)}
     </div>
     </div>
    </div>
  )
}

export default Like