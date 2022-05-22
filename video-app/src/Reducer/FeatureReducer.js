const FeatureReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_PLAYLIST":
      return { ...state, playlists: action.payload };
    case "DELETE_FROM_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload.playlistId
            ? {
                ...playlist,
                videos: playlist.videos.filter(
                  (video) => video._id !== action.payload.videoId
                ),
              }
            : playlist
        ),
      };
    case "UPDATED_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload._id
            ? {
                ...playlist,
                videos: playlist.videos.concat(action.payload.video),
              }
            : playlist
        ),
      };
    default:
      throw new Error("Action type not found");
  }
};

export default FeatureReducer;
