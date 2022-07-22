
import './App.css';
import  ResponsiveDrawer from './components/Sidebar';
import Navbar from './components/Navbar';
import {MainPage} from './components/MainPage';
import List from "./components/Table";
import LoginPage from './components/LoginPage';
import { useContext } from 'react';

import { ProtectedRoute } from './Route/privateRoute';
import { Routes, Route, useNavigate } from "react-router-dom";


function App() {

  
  return (
    <div className="App">
     <div className='container'>
      <Navbar/>
    <ResponsiveDrawer/>
     </div>
    <MainPage/>
    <div>
      {/* <List></List> */}
    </div>


     </div>
  );
}

export default App;
