import React from "react";
import "./VideoCard.css";
const VideoCard = ({ videos }) => {
  const { _id, thumbnail, duration, title, avatar, alt, creatorName, views } =
    videos;
  return (
    <div className=" video_container">
      <div className="video_card p-xss">
        <div className="img_container">
          <img src={thumbnail} alt={alt} className="video_img" />
          <div className="video_duration p-xss">{duration}</div>
        </div>
        <div className="video_body flex  p-s">
          <img src={avatar} alt={alt} className="video_avatar" />
          <div className="p-xss">
            <h4 className="video_title f-s font-l">{title}</h4>
            <h4 className=" f-s font-m p-xss">{creatorName}</h4>
            <h4 className="f-s font-m ">{views} Views</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
