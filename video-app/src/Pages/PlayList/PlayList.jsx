import React from "react";
import { Aside, Navbar } from "../../Component";
import { useFeature } from "../../Context/FeatureContext";
import "./PlayList.css";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";

const PlayList = () => {
  const { featureState } = useFeature();
  const { playlists } = featureState;
  useDocumentTitle("PlayList")
  
  return (
    <div>
      <div className="playList_navbar">
        <Navbar />
      </div>
      <div className="flex">
        <div className="playlist_aside">
          <Aside />
        </div>
        <div className="playList_main mt-l ml-s">
          {!playlists.length ? (
            <div>
              <h3 className="flex flex-center f-m font-l">
                Don't have any playlists.
                <Link to="/videolisting" className="ml-s mr-s">
                  explore
                </Link>
                🧐
              </h3>
            </div>
          ) : (
            <div className="flex flex-row playList_titleContainer">
              {playlists?.map(({ title, _id }) => {
                return (
                  <Link
                    to={`/playlist/${_id}`}
                    className="playList_title flex f-s font-l "
                    key={_id}
                  >
                    <h3 className="ml-s p-xss">{title}</h3>
                    <div className="mr-s p-xss">
                      <BiLinkExternal />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayList;
