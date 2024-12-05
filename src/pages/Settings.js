import React from 'react'
import Sidebar from '../layouts/SideBar'
import AppHeader from '../layouts/Header'


const Settings= () => {

    return (
        <div className='flex'>
        <Sidebar/>
        <div className='flex-1'>
          <AppHeader/>
          <div>
            Settings
          </div>
        </div>
      </div>
    );
}

export default Settings