import axios from "axios"

const RemoveFromWatch = async(Id,featureDispatch,showToast) => { 
  try {
      const response = await axios.delete(`/api/user/watchlater/${Id}`, 
      {
      headers: { authorization: localStorage.getItem("token"),},
      })
      featureDispatch({type: "WATCH_LATER",payload: response.data.watchlater})
      showToast("success","video removed from watchLater")
  } catch (error) {
     showToast("error","something went wrong")
  }
}

export default RemoveFromWatch 