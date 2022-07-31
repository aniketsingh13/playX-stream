import axios from "axios";

const Removefromlike = async(Id,featureDispatch,showToast) => {
    try {
        const response = await axios.delete(`/api/user/likes/${Id}`,{
          headers : {
           authorization: localStorage.getItem("token"),
          }
        })
        
        featureDispatch({type: "DISLIKED_VIDEO",payload: response.data.likes})
        showToast("success","video removed from like video")
      } catch (error) {
        showToast("error","something went wrong")
      }
}

export default Removefromlike