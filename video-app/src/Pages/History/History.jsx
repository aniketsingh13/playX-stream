import React from "react";
import "./History.css";
import { Aside, Navbar, VideoCard } from "../../Component";
import { useFeature } from "../../Context/FeatureContext";
import ClearHistory from "../../Service/HistoryService/ClearHistory";
import { Link } from "react-router-dom";
import { useToast } from "../../Hooks/useToast";

const History = () => {
  const { featureDispatch, featureState } = useFeature();
  const { history } = featureState;
  const {showToast} = useToast()

  const historyClearHandler = () => {
    ClearHistory(featureDispatch,showToast);
  };

  return (
    <div>
      <div className="history_navbar">
        <Navbar />
      </div>
      <div className="flex">
        <div className="history_aside">
          <Aside />
        </div>
        <div className="history_Main ml-s mt-l">
          <button
            className="historyClear_btn f-m font-xl"
            onClick={historyClearHandler}
          >
            ClearAll
          </button>
          {!history.length ? (
            <div>
              <h3 className="flex flex-center f-m font-l">
                Don't have history start exploring
                <Link to="/videolisting" className="ml-s mr-s">
                  explore
                </Link>
                🧐
              </h3>
            </div>
          ) : (
            <div className="mt-l flex flex-row historyVideoContainer">
              {history?.map((videos) => (
                <VideoCard key={videos._id} videos={videos} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
