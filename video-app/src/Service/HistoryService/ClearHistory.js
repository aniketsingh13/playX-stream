import axios from "axios"


const ClearHistory = async(featureDispatch,showToast) => {
  try {
      const response = await axios.delete("/api/user/history/all",{
          headers : {
             authorization: localStorage.getItem("token") 
          }
      })
      featureDispatch({type: "HISTORY",payload: response.data.history})
      showToast("success","videos removed from history")
  } catch (error) {
      showToast("error","something went wrong")
  }
}

export default ClearHistory 