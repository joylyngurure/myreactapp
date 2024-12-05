import React from 'react'
import Sidebar from '../layouts/SideBar'
import AppHeader from '../layouts/Header'



const Employees = () => {
  

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className='flex-1'>
        <AppHeader />
        <div className="p-6  flex">
          Employees
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Employees