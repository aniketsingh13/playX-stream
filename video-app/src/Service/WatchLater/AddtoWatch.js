import axios from "axios"




const AddtoWatch = async(video,featureDispatch,showToast) => {
  try {
      const response = await axios.post(`/api/user/watchlater`,
     { video },{
        headers : {
            authorization: localStorage.getItem("token"),
           }
      })
      featureDispatch({type: "WATCH_LATER", payload: response.data.watchlater})
      showToast("success","video added to watchlater ")
  } catch (error) {
      showToast("error","something went wrong")
  }
}

export default AddtoWatch