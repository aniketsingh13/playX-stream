const filterVideo=(video,selectCategory)=>{
    const filteredVideo = [...video];
    if(selectCategory !== "All"){
          return filteredVideo.filter((video) => video.category === selectCategory)
    }
    return filteredVideo
}

export {filterVideo}
