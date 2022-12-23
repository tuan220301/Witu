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
const LinkStyle =
  "flex justify-center items-center w-[100%] p-[8px] text-[20px] font-medium hover:bg-[#f5f5f5] dark:hover:bg-[#5557] rounded-full";
export const Menu = ({ accountId, listUser }) => {
  // console.log("isMenuOpen: " + isMenuOpen)
  return (
    <div className="app-menu flex-1 bg-white dark:bg-black shadow-lg">
      <div className="max-w-[72px] lg:max-w-full min-h-screen p-[8px] flex flex-col gap-[8px] text-[#121212] dark:text-[#fafafa]">
        <Link to="/" className="flex items-center justify-center h-[100px] lg:w-[200px]">
          <img
            src={require("../../../assets/logo_main.png")}
            className="dark:hidden lg:hidden"
            alt="logo"
          />
          <img
            src={require("../../../assets/logo_main_dark.png")}
            className="hidden dark:block lg:hidden dark:lg:hidden"
            alt="logo"
          />
          <span className="font-custom1 text-[55px] leading-none hidden lg:block">WiTuSocial</span>
        </Link>
        <Link to="/" className={LinkStyle}>
          <HiHome size={40} />
          <span className="pl-[12px] w-full hidden lg:block">Trang chủ</span>
        </Link>
        <Link to="/search" className={LinkStyle}>
          <BiSearch size={40} />
          <span className="pl-[12px] w-full hidden lg:block">Tìm kiếm</span>
        </Link>
        <Link to="/posts" className={LinkStyle}>
          <BiAddToQueue size={40} />
          <span className="pl-[12px] w-full hidden lg:block">Posts</span>
        </Link>
        <Link to="/chat" className={LinkStyle}>
          <RiMessengerLine size={40} />
          <span className="pl-[12px] w-full hidden lg:block">Tin nhắn</span>
        </Link>
        <Link to="/notification" className={LinkStyle}>
          <AiOutlineHeart size={40} />
          <span className="pl-[12px] w-full hidden lg:block">Thông báo</span>
        </Link>
        <Link to="/settings" className={LinkStyle}>
          <FiSettings size={40} />
          <span className="pl-[12px] w-full hidden lg:block">Cài đặt</span>
        </Link>
        <Link to="/settings" className={LinkStyle}>
          <AvaBtn
            srcImg={`https://picsum.photos/200`}
            className={`w-[40px] h-[40px] rounded-full border-[2px] border-x-orange-400 border-y-red-500`}
          />
          <span className="w-full pl-[12px] hidden lg:block">Win Lã</span>
        </Link>
        <div className="flex items-center w-[100%] p-[12px] text-[20px] font-medium hover:bg-[#f4f4f4cc] rounded-full mt-auto">
          <Switcher />
          <span className="w-full pl-[12px] hidden lg:block" id="theme">
            Chuyển chủ đề
          </span>
        </div>
      </div>
    </div>
  );
};
