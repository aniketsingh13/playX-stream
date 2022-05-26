import axios from "axios";

const Removefromlike = async(Id,featureDispatch) => {
    try {
        const response = await axios.delete(`/api/user/likes/${Id}`,{
          headers : {
           authorization: localStorage.getItem("token"),
          }
        })
        
        featureDispatch({type: "DISLIKED_VIDEO",payload: response.data.likes})
      } catch (error) {
        console.log(error)
      }
}

export default Removefromlike