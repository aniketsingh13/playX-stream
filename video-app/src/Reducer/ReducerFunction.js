

const ReducerFunction = (state,action) => {
    switch(action.type){
      case "SET_VIDEO":
          return {...state,videos: action.payload}
          case "SET_CATEGORIES":
              return {...state,categories: action.payload}
              case "FILTERCATEGORIES":
                  return {...state,selectedCategory: action.payload}
              default: 
              throw new Error("Action type not found");
    }
}

export default ReducerFunction