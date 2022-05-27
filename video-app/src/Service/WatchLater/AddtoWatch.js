import axios from "axios"




const AddtoWatch = async(video,featureDispatch) => {
  try {
      const response = await axios.post(`/api/user/watchlater`,
     { video },{
        headers : {
            authorization: localStorage.getItem("token"),
           }
      })
      featureDispatch({type: "WATCH_LATER", payload: response.data.watchlater})
  } catch (error) {
      console.log(error.response)
  }
}

export default AddtoWatch