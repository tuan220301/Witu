import React from "react";
import { Outlet, Link } from "react-router-dom";

import './style.css'
interface IMenuProps {
  isMenuOpen: boolean;
}

export const Menu = ({ isMenuOpen }: IMenuProps) => {
  // console.log("isMenuOpen: " + isMenuOpen)
  return (
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="grid grid-rows-5 h-[50%] w-[100%]">
        <h1 className="w-[100%] h-[100px] bg-white text-center text-6xl font-bold text-black pt-[20px] border-b-4">WiTu</h1>
        <Link to="/" className="hover:bg-[#262422] hover:font-bold text-center pt-[30px] text-2xl">Home</Link>
        <Link to="/add_blog" className="hover:bg-[#262422] hover:font-bold text-center pt-[30px] text-2xl">Add Blog</Link>
        <Link to="/setting" className="hover:bg-[#262422] hover:font-bold text-center pt-[30px] text-2xl">Settings</Link>
        <Link to="/about_us" className="hover:bg-[#262422] hover:font-bold text-center pt-[30px] text-2xl">About Us</Link>
      </div>
    </div>
  );
};
