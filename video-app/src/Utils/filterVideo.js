export const filterVideo=({video,filter})=>{
      if(filter !== "All"){
       return video?.filter((video) => video.category === filter)
      }
      return video;
}