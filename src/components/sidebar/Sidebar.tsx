// src/components/Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="w-60 bg-gray-300 text-gray-800 h-screen py-6 px-3 border-r-2 border-solid border-gray-400">
      <h2 className="text-xl font-semibold mb-6">Menú</h2>
      <ul className="w-full">
        <Link to="/appointment">
          <li className="py-1 border-b-2 border-solid border-gray-800 w-full hover:text-gray-500 hover:bg-gray-200 rounded">
            Citas
          </li>
        </Link>
        <Link to="/dashboard">
        <li className="py-1 border-b-2 border-solid border-gray-800 w-full hover:text-gray-500 hover:bg-gray-200 rounded">
            Dashboard
          </li>
        </Link>
        <Link to="/profile">
        <li className="py-1 border-b-2 border-solid border-gray-800 w-full hover:text-gray-500 hover:bg-gray-200 rounded">
            Perfil
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
