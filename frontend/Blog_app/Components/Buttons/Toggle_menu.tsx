import React from "react";
import { Outlet, Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { BiAddToQueue, BiSearch } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { HiHome, HiUserGroup } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import Switcher from "../Switcher";
import { AvaBtn } from "./Ava_Btn";
import "../style.css";
interface IMenuProps {
  isMenuOpen: boolean;
}

export const Menu = ({ isMenuOpen }: IMenuProps) => {
  // console.log("isMenuOpen: " + isMenuOpen)
  return (
    <div className={`app-menu bg-white dark:bg-slate-900 ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="max-w-[70px] md:max-w-full min-h-screen p-[8px] flex flex-col text-gray-800 dark:text-white">
        <Link to="/" className="block h-[200px]">
          <img src={require("../../../assets/imgs/Logo.png")} className="" alt="logo" />
        </Link>
        <Link
          to="/"
          className="flex items-center relative w-[100%] p-[12px] text-[20px] font-medium hover:bg-[#f4f4f4cc] rounded-full"
        >
          <HiHome size={30} />
          <span className="pl-[12px] w-full hidden md:block">Trang chủ</span>
        </Link>
        <Link
          to="/search"
          className="flex items-center w-[100%] p-[12px] text-[20px] font-medium hover:bg-[#f4f4f4cc] rounded-full"
        >
          <BiSearch size={30} />
          <span className="pl-[12px] w-full hidden md:block">Tìm kiếm</span>
        </Link>
        <Link
          to="/posts"
          className="flex items-center w-[100%] p-[12px] text-[20px] font-medium hover:bg-[#f4f4f4cc] rounded-full"
        >
          <BiAddToQueue size={30} />
          <span className="pl-[12px] w-full hidden md:block">Posts</span>
        </Link>
        <Link
          to="/chat"
          className="flex items-center w-[100%] p-[12px] text-[20px] font-medium hover:bg-[#f4f4f4cc] rounded-full"
        >
          <RiMessengerLine size={30} />
          <span className="pl-[12px] w-full hidden md:block">Tin nhắn</span>
        </Link>
        <Link
          to="/notification"
          className="flex items-center w-[100%] p-[12px] text-[20px] font-medium hover:bg-[#f4f4f4cc] rounded-full"
        >
          <AiOutlineHeart size={30} />
          <span className="pl-[12px] w-full hidden md:block">Thông báo</span>
        </Link>
        <Link
          to="/settings"
          className="flex items-center w-[100%] p-[12px] text-[20px] font-medium hover:bg-[#f4f4f4cc] rounded-full"
        >
          <FiSettings size={30} />
          <span className="pl-[12px] w-full hidden md:block">Settings</span>
        </Link>
        <Link
          to="/settings"
          className="flex items-center w-[100%] p-[12px] text-[20px] font-medium hover:bg-[#f4f4f4cc] rounded-full"
        >
          <AvaBtn
            srcImg={`https://picsum.photos/200`}
            className={`w-[30px] h-[30px] rounded-full`}
          />
          <span className="w-full pl-[12px] hidden md:block">Win Lã</span>
        </Link>
        <div className="flex items-center w-[100%] p-[12px] text-[20px] font-medium hover:bg-[#f4f4f4cc] rounded-full mt-auto">
          <Switcher />
          <span className="w-full pl-[12px] hidden md:block" id="theme">
            Chuyển chủ đề
          </span>
        </div>
      </div>
    </div>
  );
};
