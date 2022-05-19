import React from "react";
import "./SingleVideoCard.css";
import {BiLike} from "react-icons/bi";
import {RiPlayListAddFill} from "react-icons/ri";
import {MdOutlineWatchLater} from "react-icons/md"

const SingleVideoCard = ({ videos }) => {
  const { _id, title, views, avatar, description, creatorName,alt } = videos;
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
          <img src={ avatar} alt={alt}  className='singlePage_avatar'/>
          <div>
              <h4 className="p-xss ml-s f-s font-xl">{creatorName}</h4>
              <h4 className="p-xss ml-s f-s font-xl">{views}</h4>
              </div>
          </div>
          <div className="flex">
          <div className="flex mr-l"><BiLike className="f-s " /><span className="singlepage_iconText ml-s f-s font-xl mb-s"> LIKE</span></div>
          <div className="flex mr-l"><RiPlayListAddFill className="f-s " /><span className="singlepage_iconText ml-s f-s font-xl mb-s"> SAVE TO PLAYLIST</span></div>
          <div className="flex"><MdOutlineWatchLater className="f-s " /><span className="singlepage_iconText ml-s f-s font-xl mb-s"> WATCH LATER</span></div>
          </div>
      </div>
      <p className="mt-l mb-l f-s font-m singlePage_description">{description}</p>
    </div>
  );
};

export default SingleVideoCard;
