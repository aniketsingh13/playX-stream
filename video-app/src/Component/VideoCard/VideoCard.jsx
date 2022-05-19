import React from "react";
import "./VideoCard.css";
import {Link} from "react-router-dom";

const VideoCard = ({ videos }) => {
  const { _id, thumbnail, duration, title, avatar, alt, creatorName, views } =
    videos;
  return (
    <Link to={`/videolisting/${_id}`} >
      <div className=" video_container">
      <div className="video_card p-xss">
        <div className="img_container">
          <img src={thumbnail} alt={alt} className="video_img" />
          <div className="video_duration p-xss">{duration}</div>
        </div>
        <div className="video_body flex  p-s">
          <img src={avatar} alt={alt} className="video_avatar" />
          <div className="p-xss" style={{color: "black"}}>
            <h4 className="video_title f-s font-l">{title}</h4>
            <h4 className=" f-s font-m p-xss">{creatorName}</h4>
            <h4 className="f-s font-m ">{views} Views</h4>
          </div>
        </div>
      </div>
      </div>
    </Link>
  );
};

export default VideoCard;
