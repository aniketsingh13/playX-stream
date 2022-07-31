import React from 'react';
import { Aside, Navbar, VideoCard } from '../../Component';
import { useFeature } from '../../Context/FeatureContext';
import "./Like.css";
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';


const Like = () => {
    const {featureState} = useFeature();
    const {likedVideos} = featureState;
      useDocumentTitle("Like")
   
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
        { !likedVideos.length  ? (<div className='mt-l'><h3 className="flex flex-center f-m font-l">
              Don't have any Liked Videos.
              <Link to="/videolisting" className="ml-s mr-s">
                explore
              </Link>
              🧐
            </h3></div>) :  (<div className='mt-l flex flex-row watchlaterContainer'>
                {likedVideos?.map((videos) => (
                    <VideoCard  key={videos._id} videos={videos} />
                ))}
              </div>)}
     </div>
     </div>
    </div>
  )
}

export default Like