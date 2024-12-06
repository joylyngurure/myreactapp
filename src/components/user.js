import React from 'react';
import joyuserImage from '../images/joyuser.png';

const UserProfileButton = () => {
  return (
    <button className="rounded-full w-10 h-10 bg-gray-100 flex items-center border-r border-red-900 justify-center  hover:bg-blue-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
      <img src={joyuserImage} alt="Joylyn User" className="w-full h-full object-cover rounded-full" />
    </button>
  );
};

export default UserProfileButton;