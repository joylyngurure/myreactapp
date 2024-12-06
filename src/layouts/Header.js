import React from 'react';
import { Input } from 'antd';
import {  SearchOutlined, BellOutlined } from '@ant-design/icons';
import { FaUserCircle } from "react-icons/fa";
import AdminDropdown from '../components/Dropdown';
import   joyuserImage from "/home/joylyn/Documents/joy/testit/src/images/joyuser.png"
import UserProfileButton from "../components/user.js"



const AppHeader = ({ showSidebar }) => {
  return (
    <nav className={`bg-blue-950 flex items-center justify-between px-6  py-5 transition-all duration-300 w-full rounded-l`}>
      <div className="flex items-center gap-4 flex-1">
        <div className="text-white text-lg font-bold">
        </div>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          className="rounded-full flex-1 max-w-sm h-10 shadow-md"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <BellOutlined className="text-white text-2xl" size='large'/>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-white bg-green-500 rounded-full transform translate-x-1/2 -translate-y-1/2">
            3
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div >
            <UserProfileButton/>
          </div>
          <div className="text-white">
            <strong className="block">Joylyn Gurure</strong>
            <span>IT Graduate Trainee</span>
            <button className='inline-block ml-2 h-6 w-6'> 
            <AdminDropdown className='inline-block m-2'/></button>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;