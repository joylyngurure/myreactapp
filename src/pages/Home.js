import React from "react";
import AppHeader from "../layouts/Header";
import Sidebar from "../layouts/SideBar";
import DashboardContent from "../layouts/DashboardContent";

const Home = () => {
  

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <AppHeader/>
          <div>
            <DashboardContent/>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Home;
