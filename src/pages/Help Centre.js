import React from 'react'
import Sidebar from '../layouts/SideBar'
import AppHeader from '../layouts/Header'


const HelpCentre = () => {
  

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className='flex-1'>
        <AppHeader />
        <div >
          Help centre
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default HelpCentre