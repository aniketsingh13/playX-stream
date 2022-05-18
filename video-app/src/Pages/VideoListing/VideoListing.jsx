import React, { useEffect, useState } from 'react'
import "./VideoListing.css";
import { Aside, Chips, Navbar, VideoCard } from '../../Component';
import axios from "axios";
import {useFilter} from "../../Context/FilterContext";
  import { filterVideo } from '../../Utils/filterVideo';

const VideoListing = () => {
  const [videos,setVideos] = useState([])
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState([]);
  const {filter} = useFilter();
  const filterCard= filterVideo(videos,filter)
   console.log(filterCard)
useEffect(() => {
  (async () =>{
      try {
        const response=await axios.get("/api/videos")
       setLoading(false)
       setVideos(response.data.videos)
      } catch (error) {
        console.log(error.response)
      }
  })()
},[])

useEffect(() => {
   (async () =>{
     try {
        const response = await axios.get("/api/categories")
        setLoading(false)
        setCategory(response.data.categories)
     } catch (error) {
        console.log(error.response)
     }
   })()
},[])

  return (
    <div >
      <div className='videoListing_navbar'>
     <Navbar />
    </div>
    <div className='flex'>
    <div className='videoListing_aside'>
      <Aside />
    </div>
    <div className='videoListing_main'>
         <div className='VideoListing_category mt-l ml-l mb-l flex' >
          {category.map(({_id,categoryName}) => (
            <Chips key={_id} category={categoryName} />
          ))}
         </div>
       <div className='VideoListing_Card ml-s mt-s mb-s flex'>
         {videos.map(video => {
         return(
           <VideoCard  key={video._id} videos={video}/>
         )})}
       </div>
    </div>
    </div>
    </div>
  )
}

export default VideoListing