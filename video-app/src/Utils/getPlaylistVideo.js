


const getPlaylistVideo = (video,Id) => {
  return video?.find((video) => video._id === Id) 
}

export default getPlaylistVideo