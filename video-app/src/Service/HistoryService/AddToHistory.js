import axios from "axios"; 

const AddToHistory = async(video,featureDispatch) =>{
  try {
      const response = await axios.post("/api/user/history",{
          video
      },{
          headers : { authorization: localStorage.getItem("token") ,}
      })
      featureDispatch({type: "HISTORY",payload: response.data.history})
  } catch (error) {
      console.log(error.response)
  }
}

export default AddToHistory