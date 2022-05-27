import axios from "axios"




const RemoveFromWatch = async(Id,featureDispatch) => { 
  try {
      const response = await axios.delete(`/api/user/watchlater/${Id}`, 
      {
      headers: { authorization: localStorage.getItem("token"),},
      })
      featureDispatch({type: "WATCH_LATER",payload: response.data.watchlater})
  } catch (error) {
      console.log(error.response)
  }
}

export default RemoveFromWatch 