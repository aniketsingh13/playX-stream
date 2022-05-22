

import React from 'react'

const playlistId = (video,id) => {
  return video?.find((video) => video._id ===id) 
}

export default playlistId