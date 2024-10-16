import React from "react";
import { useAuth } from "../../context/auth/AuthContext";
import PrimaryButton from "../buttons/PrimaryButton";

const Topbar = () => {
  const { logout } = useAuth();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    logout();
  };
  return (
    <div className="flex justify-between items-center h-12 bg-gray-300 px-2 text-gray-800">
      <span>DARWIN BRACERO</span>
      <PrimaryButton 
      label="Cerrar sesión"
      onClick={(e)=>handleLogout(e)}
      className="bg-blue-500 text-white rounded cursor-pointer px-2 py-1 
                    hover:bg-blue-600 transition"
      />
      
    </div>
  );
};

export default Topbar;
