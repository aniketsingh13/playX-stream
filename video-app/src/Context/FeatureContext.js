import {createContext, useContext, useReducer} from "react";
import FeatureReducer from "../Reducer/FeatureReducer";

const FeatureContext = createContext();

const FeatureProvider = ({children}) => {
  const [featureState,featureDispatch] = useReducer(FeatureReducer,{
    playlists : [],
    likedVideos: [],
    watchlater: [],
  })

    return (
        <FeatureContext.Provider value = {{featureState,featureDispatch }}>
            {children}
        </FeatureContext.Provider>
    )
}

const useFeature = () => useContext(FeatureContext)

export {FeatureProvider,useFeature}