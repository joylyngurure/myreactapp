// Assets.js
import React from 'react'
import AppHeader from '../layouts/Header'
import Table from '../components/Table'
import Sidebar from '../layouts/SideBar'



const Assets = () => {
  

  return (
    <div className='flex'>
      <Sidebar/>
      <div className='flex-1'>
         <AppHeader/>
         <div>
          <Table/>
         </div>
      </div>
    </div>
  );
}

export default Assets