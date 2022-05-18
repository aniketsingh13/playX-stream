import { useState,createContext,useContext } from "react";

const FilterContext =createContext()


const FilterProvider=({children})=>{
  const [filter,setFilter]= useState("All")


    return(
        <FilterContext.Provider value={{filter,setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext)

export {useFilter,FilterProvider}