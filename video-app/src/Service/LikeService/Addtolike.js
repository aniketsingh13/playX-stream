

import axios from "axios";





const Addtolike = async(video,featureDispatch,showToast) => 

{
    try {
        const response = await axios.post("/api/user/likes",{
          video
        },{
          headers : {
           authorization: localStorage.getItem("token") ,
          }
        })
        
        featureDispatch({type: "LIKED_VIDEO", payload: response.data.likes})
        showToast("success","video added to like video")
      } catch (error) {
        showToast("error","somenthing went wrong")
      }
}

export default Addtolike