import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoSettings } from "react-icons/io5";


function AdminDropdown(user) {

  const [isDropdownOpen, setOpenDropDown] = useState(false);

  const toggleDropDown = () => {
    setOpenDropDown(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block mr-2">
      <button className="flex items-center   " onClick={toggleDropDown} p-1 >
      <IoIosArrowDropdownCircle className={`text-white h-6 w-6 inline-block  ${isDropdownOpen ? "rotate-180" : ""}` } />
      </button>
      {isDropdownOpen && (
        <div className="absolute top-full right-0 z-1 rounded-md text-blue-900 min-w-[160px] shadow-lg p-2 mt-6 font-bold text-lg " >
           <ul>
             <li><Link to="/profile" className='flex items-center justify-evenly'><CgProfile/> Profile</Link></li> 
             <li><Link to="/settings" className='flex items-center justify-evenly'><IoSettings />Settings</Link></li> 
             <div className="border-t border-gray-200">
             <li><Link to="/login" className='flex items-center justify-evenly'><MdLogout/> Log Out</Link></li> 
             </div>
            </ul>
        </div>
      )}
    </div>
  );
}

export default AdminDropdown;