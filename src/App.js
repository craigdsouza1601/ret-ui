import './App.css'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from './store/user';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Upload from './pages/Upload';
import History from './pages/History';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';





function App() {

  return (
      <BrowserRouter>
      <ResponsiveAppBar />
        <Routes>
            <Route exact path = {"/"} element={<Home/>}/>
            <Route path = {"/upload"} element={<Upload/>}/>
            <Route path={"/login"} element={<Login/>} />
            <Route path={"/register"} element={<Register/>} />
            <Route path = {"/history"} element={<History/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
