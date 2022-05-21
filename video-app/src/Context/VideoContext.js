import { createContext, useContext, useEffect, useReducer, useState, } from "react";
import ReducerFunction from "../Reducer/ReducerFunction";
import axios from "axios";



const VideoContext = createContext()

const VideoProvider =({children}) =>{
  const [state,dispatch] =useReducer(ReducerFunction,{
    videos: [],
    categories: [],
    selectedCategory: "All",
  })
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        setLoading(false);
        dispatch({ type: "SET_VIDEO", payload: response.data.videos });
      } catch (error) {
        console.log(error.response);
        setError(true)
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setLoading(false);
        dispatch({ type: "SET_CATEGORIES", payload: response.data.categories });
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);
    return (
        <VideoContext.Provider value={{state,dispatch,error}}>
            {children}
        </VideoContext.Provider>
    )
}

const useVideo=() => useContext(VideoContext)

export {VideoProvider,useVideo}