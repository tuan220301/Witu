import React from "react";
import { Outlet, Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { HiUserGroup } from 'react-icons/hi';
import './style.css'
interface IMenuProps {
  isMenuOpen: boolean;
}

export const Menu = ({ isMenuOpen }: IMenuProps) => {
  // console.log("isMenuOpen: " + isMenuOpen)
  return (
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
      <ul className="w-[100%] h-[100%]">
        <li>
          <img src={require('../../assets/imgs/Logo.png')} className='w-[250px] h-[200px]' alt="logo" />
        </li>
        <li className="w-[100%] p-[20px] text-2xl text-black hover:bg-[#f4f4f4] hover:font-bold">
          <div className="flex items-stretch">
            <span className="pr-[8px]"><AiOutlineHome /></span>
            <Link to="/" className="w-full">Home</Link>
          </div>
        </li>
        <li className="w-[100%] p-[20px] text-2xl text-black hover:bg-[#f4f4f4] hover:font-bold">
          <div className="flex items-stretch">
            <span className="pr-[8px]"><BiAddToQueue /></span>
            <Link className="w-full" to="/add_blog" >Add Blog</Link>
          </div>
        </li>
        <li className="w-[100%] p-[20px] text-2xl text-black hover:bg-[#f4f4f4] hover:font-bold">
          <div className="flex items-stretch">
            <span className="pr-[8px]"><FiSettings /></span>
            <Link className="w-full" to="/setting" >Settings</Link>
          </div>
        </li>
        <li className="w-[100%] p-[20px] text-2xl text-black hover:bg-[#f4f4f4] hover:font-bold">
          <div className="flex items-stretch">
            <span className="pr-[8px]"><HiUserGroup /></span>
            <Link className="w-full" to="/about_us" >About Us</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};
