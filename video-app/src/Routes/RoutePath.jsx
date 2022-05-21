import React from 'react'
import {Routes,Route} from "react-router-dom"
import Mockman from "mockman-js";
import Home from "../Pages/Home/Home";
import { NotFound, SinglePage, VideoListing } from '../Pages';


  const RoutePath = () => {
    return (
      <div>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/videolisting' element={<VideoListing />} />
          <Route path='/videolisting/:Id'   element={<SinglePage />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/mockman' element={<Mockman />} />
          </Routes>
      </div>
    )
  }
  
  export default RoutePath


