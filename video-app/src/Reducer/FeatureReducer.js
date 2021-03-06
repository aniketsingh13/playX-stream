const FeatureReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_PLAYLIST":
      return { ...state, playlists: action.payload };
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload._id
            ? { ...action.payload }
            : { ...playlist }
        ),
      };
    case "UPDATED_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload._id
            ? { ...action.payload }
            : { ...playlist }
        ),
      };
    case "DELETE_PLAYLIST":
      return { ...state, playlists: action.payload };

    case "LIKED_VIDEO":
      return { ...state, likedVideos: action.payload };
    case "DISLIKED_VIDEO":
      return { ...state, likedVideos: action.payload };
    case "WATCH_LATER":
      return { ...state, watchlater: action.payload };
    case "HISTORY":
      return { ...state, history: action.payload };
    default:
      throw new Error("Action type not found");
  }
};

export default FeatureReducer;
