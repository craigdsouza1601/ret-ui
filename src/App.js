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

  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  console.log(user);




  useEffect(()=> {
    const userData = { 
      id: 1, 
      lastName: 'DSouza', 
      firstName: 'Craig', 
      age: 22, 
      date: '2000-01-16', 
      sex: 'Male',
      type: 'admin' 
    }

    dispatch(userActions.login(userData))
    console.log(user);
  },[dispatch])

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
