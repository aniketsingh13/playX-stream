

import axios from "axios";

const Addtolike = async(video,featureDispatch) => 

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
      } catch (error) {
        console.log(error.response)
      }
}

export default Addtolike