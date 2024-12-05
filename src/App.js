import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import React from 'react'
import SignUp from './pages/Auth/SignUp';
import Login from'./pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Home from './pages/Home';
import Assets from './pages/Assets';
import Employees from './pages/Employees';
import Location from './pages/Location'
import Catalog from './pages/Catalog'
import Orders from './pages/Orders'
import Settings from './pages/Settings'
import HelpCentre from './pages/Help Centre'
import Integration from './pages/Intergration';




function App ()  {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Login/>}> </Route>
       <Route path="/signUp" element={<SignUp/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/assets" element={<Assets/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route  path="/location" element={<Location/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path= "/orders" element={<Orders/>} />
        <Route path= "/settings" element={<Settings/>} />
        <Route path="/help-centre" element={<HelpCentre/>} />
        <Route path="/integration" element={<Integration/>} />
        
      </Routes>
    </Router>
  )
}

export default App