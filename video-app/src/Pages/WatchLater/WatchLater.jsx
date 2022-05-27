import React from 'react'
import { Navbar, VideoCard } from '../../Component';
import { useFeature } from '../../Context/FeatureContext'
import "./WatchLater.css";
import { Aside} from '../../Component';
import { Link } from 'react-router-dom';

const WatchLater = () => {
  const {featureState} = useFeature();
  const {watchlater} = featureState;
  return (
    <div>
   <div className='watch_navbar'>
   <Navbar />
   </div>
   <div className="flex">
     <div className='watch_aside'>
   <Aside />
     </div>
     <div className='watch_main ml-s '>
      {!watchlater.length ? (<div className='mt-l'><h3 className="flex flex-center f-m font-l">
              Don't have any Videos in watchlater.
              <Link to="/videolisting" className="ml-s mr-s">
                explore
              </Link>
              🧐
            </h3></div>) : (<div className="mt-l flex flex-row likeVideoContainer">{watchlater?.map((videos) => (
              <VideoCard  key={videos._id} videos={videos} />
            ))}</div>)}
     </div>
   </div>
    </div>
  )
}

export default WatchLater