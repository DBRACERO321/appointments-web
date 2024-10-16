// src/components/MainPage.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

const Main: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="flex-1 p-2 overflow-auto bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
