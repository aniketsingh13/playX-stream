import React from 'react'
import { useFilter } from '../../Context/FilterContext';
import "./Chips.css";

const Chips = ({category}) => {
    const {filter,setFilter} = useFilter();
  return (
    <div className='chips f-s font-l p-xss ' onClick={() => setFilter(category)}>
        {category}
    </div>
  )
}

export default Chips