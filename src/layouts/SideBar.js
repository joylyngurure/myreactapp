import React, { useState } from 'react';
import {
  AppstoreOutlined,
  UserOutlined,
  EnvironmentOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  FileTextOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { HiPuzzlePiece } from 'react-icons/hi2';
import { useLocation } from 'react-router-dom';
import mylogo from '../images/mylogo.png';
import { Tooltip } from 'antd';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true); 
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`${
        showSidebar ? 'w-64' : 'w-20'
      } bg-gray-100 h-screen flex flex-col border-r-2 border-gray-200 shadow-md transition-all duration-300`}
    >
      
      <div
           className={`flex items-center justify-center py-1 border-b  border-gray-200 shadow-sm ${
             showSidebar ? 'w-full' : 'w-20'
              }`}
                  >
            <img
               src={mylogo} alt='myLogo'
                 className={`transition-all duration-300 ease-in-out h-[80px] w-20 ${
                  showSidebar ? 'w-28' : 'w-12'
                       } h auto object-contain`}
             />
</div>

      <ul className="text-black flex-1">
        {showSidebar && <p className="font-bold mt-6 py-2 ml-4 text-lg">Management</p>}
        <li className="ml-4">
          <Tooltip title={!showSidebar ? 'Dashboard ' : ''} placement="right">
            <a
              href="/home"
              className={`flex items-center px-3 py-2 hover:bg-blue-300 rounded-xl mb-2 mr-2  duration-300 cursor-pointer ${
                showSidebar ? '' : 'justify-center'
              } ${isActive('/home') ? 'bg-blue-900 text-white rounded-xl mr-2' : ''}`}
            >
              <HomeOutlined className="inline-block mr-2" />
              {showSidebar && <span className="ml-4">Dashboard</span>}
            </a>
          </Tooltip>
        </li>
        <li className="ml-4">
          <Tooltip title={!showSidebar ? 'Assets' : ''} placement="right">
            <a
              href="/assets"
              className={`flex items-center px-3 py-2 hover:bg-blue-300 mb-2 mr-2 rounded-xl duration-300 cursor-pointer ${
                showSidebar ? '' : 'justify-center'
              } ${isActive('/assets') ? 'bg-blue-900 text-white rounded-xl mr-2' : ''}`}
            >
              <AppstoreOutlined className="inline-block mr-2" />
              {showSidebar && <span className="ml-4">Assets</span>}
            </a>
          </Tooltip>
        </li>
        <li className="ml-4">
          <Tooltip title={!showSidebar ? 'Employees' : ''} placement="right">
            <a
              href="/employees"
              className={`flex items-center px-3 py-2 hover:bg-blue-300 mb-2 mr-2 rounded-xl duration-300 cursor-pointer ${
                showSidebar ? '' : 'justify-center'
              } ${isActive('/employees') ? 'bg-blue-900 text-white rounded-xl mr-2' : ''}`}
            >
              <UserOutlined className="inline-block mr-2" />
              {showSidebar && <span className="ml-4">Employees</span>}
            </a>
          </Tooltip>
        </li>
        <li className="ml-4">
          <Tooltip title={!showSidebar ? 'Location' : ''} placement="right">
            <a
              href="/location"
              className={`flex items-center px-3 py-2 hover:bg-blue-300 mb-2 mr-2 rounded-xl duration-300 cursor-pointer ${
                showSidebar ? '' : 'justify-center'
              } ${isActive('/location') ? 'bg-blue-900 text-white rounded-xl mr-2' : ''}`}
            >
              <EnvironmentOutlined className="inline-block mr-2" />
              {showSidebar && <span className="ml-4">Location</span>}
            </a>
          </Tooltip>
        </li>
        <div className="mt-10">
          {showSidebar && <p className="font-bold py-2 text-lg ml-4">Marketplace</p>}
          <li className="ml-4">
            <Tooltip title={!showSidebar ? 'Catalog' : ''} placement="right">
              <a
                href="/catalog"
                className={`flex items-center px-3 py-2 hover:bg-blue-300 mb-2 mr-2 rounded-xl duration-300 cursor-pointer ${
                  showSidebar ? '' : 'justify-center'
                } ${isActive('/catalog') ? 'bg-blue-900 text-white rounded-xl mr-2' : ''}`}
              >
                <ShoppingCartOutlined className="inline-block mr-2" />
                {showSidebar && <span className="ml-4">Catalog</span>}
              </a>
            </Tooltip>
          </li>
          <li className="ml-4">
            <Tooltip title={!showSidebar ? 'Orders' : ''} placement="right">
              <a
                href="/orders"
                className={`flex items-center px-3 py-2 hover:bg-blue-300 mb-2 mr-2 rounded-xl duration-300 cursor-pointer ${
                  showSidebar ? '' : 'justify-center'
                } ${isActive('/orders') ? 'bg-blue-900 text-white rounded-xl mr-2' : ''}`}
              >
                <FileTextOutlined className="inline-block mr-2" />
                {showSidebar && <span className="ml-4">Orders</span>}
              </a>
            </Tooltip>
          </li>
        </div>
        <li className="ml-4 mt-40">
          <Tooltip title={!showSidebar ? 'Integration' : ''} placement="right">
            <a
              href="/integration"
              className={`flex items-center px-3 py-2 hover:bg-blue-300 mb-2 mr-2 rounded-xl duration-300 cursor-pointer ${
                showSidebar ? '' : 'justify-center'
              } ${isActive('/integration') ? 'bg-blue-900 text-white rounded-l mr-2' : ''}`}
            >
              <HiPuzzlePiece className="inline-block mr-2" />
              {showSidebar && <span className="ml-4">Integration</span>}
            </a>
          </Tooltip>
        </li>
        <li className="ml-4">
          <Tooltip title={!showSidebar ? 'Settings' : ''} placement="right">
            <a
              href="/settings"
              className={`flex items-center px-3 py-2 hover:bg-blue-300 mb-2 mr-2 rounded-xl duration-300 cursor-pointer ${
                showSidebar ? '' : 'justify-center'
              } ${isActive('/settings') ? 'bg-blue-900 text-white rounded-xl mr-2' : ''}`}
            >
              <SettingOutlined className="inline-block mr-2" />
              {showSidebar && <span className="ml-4">Settings</span>}
            </a>
          </Tooltip>
        </li>
        <li className="ml-4">
          <Tooltip title={!showSidebar ? 'Help Centre' : ''} placement="right">
            <a
              href="/help-centre"
              className={`flex items-center px-3 py-2 hover:bg-blue-300 mb-2 mr-2 rounded-xl duration-300 cursor-pointer ${
                showSidebar ? '' : 'justify-center'
              } ${isActive('/help-centre') ? 'bg-blue-900 text-white rounded-xl mr-2' : ''}`}
            >
              <QuestionCircleOutlined className="inline-block mr-2" />
              {showSidebar && <span className="ml-4">Help Centre</span>}
            </a>
          </Tooltip>
        </li>
      </ul>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="bg-blue-950 text-white p-2  rounded-md m-1 hover:bg-blue-800"
      >
        {showSidebar ? '<' : '>'}
      </button>
    </div>
  );
};

export default Sidebar;
