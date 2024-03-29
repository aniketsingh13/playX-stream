import React, { useState } from "react";
import "./SingleVideoCard.css";
import { BiLike } from "react-icons/bi";
import { RiPlayListAddFill } from "react-icons/ri";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { useAuth } from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import PlaylistModal from "../PlaylistModal/PlaylistModal";
import { AiFillLike } from "react-icons/ai";
import { useFeature } from "../../Context/FeatureContext";
import Removefromlike from "../../Service/LikeService/Removefromlike";
import Addtolike from "../../Service/LikeService/Addtolike";
import RemoveFromWatch from "../../Service/WatchLater/RemoveFromWatch";
import AddtoWatch from "../../Service/WatchLater/AddtoWatch";
import isVideoinPlaylist from "../../Utils/isVideoinPlaylist";
import { useToast } from "../../Hooks/useToast";


const SingleVideoCard = ({
  _id,
  title,
  views,
  avatar,
  description,
  creatorName,
  alt,
  video,
}) => {
  const [isModal, setIsModal] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { featureState, featureDispatch } = useFeature();
  const { likedVideos, watchlater } = featureState;
  const likeVideo = isVideoinPlaylist(likedVideos, _id);
  const watchLaterVideo = isVideoinPlaylist(watchlater, _id);
  const {showToast} = useToast()

  const savePlaylistModal = () => {
    if (user) {
      setIsModal(true);
    } else {
      navigate("/login", { replace: true, state: { from: location } });
    }
  };

  const likeHandler = () => {
    if (user) {
      if (likeVideo) {
        Removefromlike(_id, featureDispatch,showToast);
      } else {
        Addtolike(video, featureDispatch,showToast);
      }
    } else {
      navigate("/login", { replace: true, state: { from: location } });
    }
  };

  const watchHandler = () => {
    if (user) {
      if (watchLaterVideo) {
        RemoveFromWatch(_id, featureDispatch,showToast);
      } else {
        AddtoWatch(video, featureDispatch,showToast);
      }
    } else {
      navigate("/login", { replace: true, state: { from: location } });
    }
  };

  return (
    <div className="singleVideo_card">
      <iframe
        src={`https://www.youtube.com/embed/${_id}`}
        title="youtube player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3 className="f-m font-l mt-s">{title}</h3>
      <div className="singleVideo_center flex mt-l">
        <div className="flex ">
          <img src={avatar} alt={alt} className="singlePage_avatar" />
          <div>
            <h4 className="p-xss ml-s f-s font-xl">{creatorName}</h4>
            <h4 className="p-xss ml-s f-s font-xl">{views} Views</h4>
          </div>
        </div>
        <div className="flex singleVideo_icons">
          <div className="flex mr-l" onClick={likeHandler}>
            {likeVideo ? (
              <AiFillLike className="f-s" />
            ) : (
              <BiLike className="f-s " />
            )}
            <span className="singlepage_iconText ml-s f-s font-xl mb-s">
              {" "}
              {likeVideo ? "liked" : "like"}
            </span>
          </div>
          <div className="flex mr-l" onClick={savePlaylistModal}>
            <RiPlayListAddFill className="f-s " />
            <span className="singlepage_iconText ml-s f-s font-xl mb-s">
              {" "}
              SAVE TO PLAYLIST
            </span>
          </div>
          <div className="flex" onClick={watchHandler}>
            {watchLaterVideo ? (
              <MdWatchLater className="f-s" />
            ) : (
              <MdOutlineWatchLater className="f-s " />
            )}
            <span className="singlepage_iconText ml-s f-s font-xl mb-s">
              {" "}
              WATCH LATER
            </span>
          </div>
        </div>
      </div>
      <p className="mt-l mb-l f-s font-m singlePage_description">
        {description}
      </p>
      {isModal && <PlaylistModal video={video} setIsModal={setIsModal} />}
    </div>
  );
};

export default SingleVideoCard;
