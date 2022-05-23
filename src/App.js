import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from './pages/Home';
import History from './pages/History';


function App() {
  return (
      <BrowserRouter>
      <ResponsiveAppBar />
        <Routes>
            <Route exact path = {"/"} element={<Home/>}/>
            <Route path = {"/history"} element={<History/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
