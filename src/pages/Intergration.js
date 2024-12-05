import React from 'react'
import Sidebar from '../layouts/SideBar'
import AppHeader from '../layouts/Header'


const Intergration = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex-1'>
            <AppHeader/>
            <div>
                Integration
            </div>
        </div>
    </div>
  )
}

export default Intergration