import React from 'react'
import {Routes,Route} from "react-router-dom"
import Mockman from "mockman-js";
import Home from "../Pages/Home/Home";
import { History, Like, Login,  NotFound, PlayList, Signup, SinglePage, VideoListing, WatchLater } from '../Pages';
import RequireAuth from '../Utils/RequireAuth';
import PlaylistVideo from '../Pages/PlaylistVideo/PlaylistVideo';


  const RoutePath = () => {
    return (
      <div>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/videolisting' element={<VideoListing />} />
          <Route path='/videolisting/:Id'   element={<SinglePage />} />
          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/playlist" element={<RequireAuth><PlayList /></RequireAuth>} />
          <Route path="/playlist/:Id" element={<RequireAuth><PlaylistVideo /></RequireAuth>} />
          <Route path='/Like'  element={<RequireAuth><Like /></RequireAuth>} />
          <Route path='/watchlater' element={<RequireAuth><WatchLater /></RequireAuth>} />
          <Route path="/history"  element={<RequireAuth><History /></RequireAuth>} />
          <Route path='*' element={<NotFound />} />
          <Route path='/mockman' element={<Mockman />} />
          </Routes>
      </div>
    )
  }
  
  export default RoutePath


