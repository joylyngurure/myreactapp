import React from 'react'
import Sidebar from '../layouts/SideBar'
import AppHeader from '../layouts/Header'

const Catalog = () => {
    

    return (
      <div className='flex'>
        <Sidebar/>
        <div className='flex-1'>
            <AppHeader/>
            <div>
                Welcome to catalog
            </div>
        </div>
      </div>
    );
}

export default Catalog