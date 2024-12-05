import React from 'react'
import Sidebar from '../layouts/SideBar'
import AppHeader from '../layouts/Header'

const Orders = () => {
    

    return (
      <div className='flex' >
        <Sidebar/>
        <div className='flex-1'>
            <AppHeader/>
            <div>
                Orders
            </div>
        </div>
      </div>
    );
}

export default Orders