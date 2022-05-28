import axios from "axios"


const ClearHistory = async(featureDispatch) => {
  try {
      const response = await axios.delete("/api/user/history/all",{
          headers : {
             authorization: localStorage.getItem("token") 
          }
      })
      featureDispatch({type: "HISTORY",payload: response.data.history})
  } catch (error) {
      console.log(error.response)
  }
}

export default ClearHistory 