import React from "react";
import { useParams } from "react-router-dom";
import { Aside, Navbar, VideoCard } from "../../Component";
import { useFeature } from "../../Context/FeatureContext";
import getPlaylistVideo from "../../Utils/getPlaylistVideo";
import "./PlaylistVideo.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import { useToast } from "../../Hooks/useToast";

const PlaylistVideo = () => {
  const { Id } = useParams();
  const { featureState, featureDispatch } = useFeature();
  const { playlists } = featureState;
  let playlistVideos = getPlaylistVideo(playlists, Id) ?? {} ;
  const { title, videos } = playlistVideos ;
 
  const {encodedToken} = useAuth();
  const {showToast} = useToast()

   const deleteHandler = async(PlayId) =>{
             try {
               const response = await axios.delete(`/api/user/playlists/${PlayId}`,{
                 headers :{
                  authorization: encodedToken
                 }
               })
               featureDispatch({type: "DELETE_PLAYLIST",payload: response.data.playlists})
               showToast("success","video deleted from playlist")
             } catch (error) {
              showToast("error","something went wrong" )
             }
   }


  return (
    <div>
      <div className="playList_navbar">
        <Navbar />
      </div>
      <div className="flex">
        <div className="playlist_aside">
          <Aside />
        </div>
        <div className="playList_main mt-l ml-s ">
          <div className="playList_delete flex ">
          <h2 className="f-m font-l"># {title}</h2>
          <button onClick={() => deleteHandler(Id)} className="playlist_deletebtn mr-l f-m font-l">Delete</button>
          </div>
          {!videos ? (
            <div className="mt-l">
              <h3 className="flex flex-center f-m font-l">
                Don't have any playlists.
                <Link to="/videolisting" className="ml-s mr-s">
                  explore
                </Link>
                🧐
              </h3>
            </div>
          ) : (
            <div className="mt-l flex flex-row playlistVideo_container">
              {videos?.map((videos) => (
                <VideoCard key={videos._id} videos={videos} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistVideo;
