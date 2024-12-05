import React from 'react';
import mylogo from '../images/mylogo.png';

const Logo = () => {
  return (
    <div className='flex justify-center h-20 w-40'> 
      <img src={mylogo} alt="My Logo"  />
    </div>
  )
};

export default Logo;