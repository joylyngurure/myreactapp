// Assets.js
import React from 'react'
import AppHeader from '../layouts/Header'
import Sidebar from '../layouts/SideBar';



const Location = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='flex-1'>
        <AppHeader/>
        <div>
          Location
        </div>
      </div>
    </div>
  );
  
}

export default Location