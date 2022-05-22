import React, { useState } from "react";
import "./PlaylistModal.css";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { useFeature } from "../../Context/FeatureContext";
import { useAuth } from "../../Context/AuthContext";
import playlistId from "../../Utils/playlistId";

const PlaylistModal = ({ video, setIsModal }) => {
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [playlistInput, setPlaylistInput] = useState("");
  const { featureState, featureDispatch } = useFeature();
  const { encodedToken } = useAuth();
  const { playlists } = featureState;

  const newPlaylistHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/user/playlists",
        {
          playlist: { title: playlistInput.trim() },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      featureDispatch({
        type: "ADD_TO_PLAYLIST",
        payload: response.data.playlists,
      });
      setPlaylistInput("");
    } catch (error) {
      console.log(error.response);
    }
  };

  const playListHandler = async (e, playlistId, videoId) => {
    if (e.target.checked) {
      try {
        await axios.post(
          `/api/user/playlists/${playlistId}`,
          {
            video,
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        featureDispatch({
          type: "UPDATED_PLAYLIST",
          payload: { video, playlistId },
        });
      } catch (error) {
        console.log(error.response);
      }
    } else {
      try {
        await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
          headers: {
            authorization: encodedToken,
          },
        });
        featureDispatch({
          type: "DELETE_FROM_PLAYLIST",
          payload: { playlistId, videoId },
        });
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div className="Modal" onClick={closeModal}>
      <div className="playListModal" onClick={(e) => e.stopPropagation()}>
        <div className="playlistModal_header flex mt-l pb-s">
          <h3 className="f-s font-l">Save to...</h3>
          <div className="f-s closePlaylist" onClick={closeModal}>
            <IoCloseSharp />
          </div>
        </div>
        <hr />
        <div className="p-m">
          {playlists?.map(({ _id, videos, title }) => (
            <div className=" flex p-xss pl-s" key={_id}>
              <input
                type="checkbox"
                checked={playlistId(videos, video._id)}
                onChange={(e) => playListHandler(e, _id, video._id)}
              />
              <p className="ml-s f-s font-l">{title}</p>
            </div>
          ))}
        </div>
        <hr />
        <div className="playlistModal_footer flex mt-s mb-s">
          <div
            className="f-s addPlaylist"
            onClick={() => setShowPlaylist((prev) => !prev)}
          >
            <AiOutlinePlus />
          </div>
          <h3 className="f-s font-l"> Create playlist... </h3>
        </div>
        <div>
          {showPlaylist && (
            <form
              className="mt-s flex flex-column"
              onSubmit={newPlaylistHandler}
            >
              <input
                type="text"
                className="playList_input ml-s mr-s "
                autoFocus
                value={playlistInput}
                required
                onChange={(e) => setPlaylistInput(e.target.value)}
              />
              <button className="playlist_btn f-s font-l p-m" type="submit">
                Create
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistModal;
