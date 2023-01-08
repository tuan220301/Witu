import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BiAddToQueue, BiSearch } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";

import { AvaBtn } from "./Ava_Btn";
import "../style.css";
import DropUpRender from "./DropUpBtn";
import { DrawerSearch } from "../Modal/Drawer_Menu";
import { ReactDimmer } from "react-dimmer";
import { SignOutButton } from "../../../login_page";
import Switcher from "../Switcher";

const LinkStyle =
  "flex justify-center items-center w-[100%] p-[8px] text-[20px] font-medium hover:bg-[#f5f5f5] dark:hover:bg-[#5557] rounded-full";
export const Menu = ({ listUser, wallet }) => {
  const [drawSearch, setDrawSearch] = React.useState(false);
  const [option, setOption] = React.useState('');
  const handleMenu = () => {
    setDrawSearch(true);
    setOption('search')
  };
  const noticMenu = () => {
    setDrawSearch(true);
    // setDrawSearch((prevState) => !prevState);
    setOption('notice')
  }

  return (
    <div className="flex-1 bg-white dark:bg-black shadow-lg">
      <div className="max-w-[80px] lg:max-w-full min-h-screen p-[8px] flex flex-col gap-[8px] text-[#121212] dark:text-[#fafafa]">
        <Link to="/" className="flex items-center justify-center h-[100px] lg:w-[250px]">
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

        <button className={LinkStyle} onClick={handleMenu}>
          <BiSearch size={40} />
          <span className="pl-[12px] w-full text-left hidden lg:block">Tìm kiếm</span>
        </button>

        <Link to="/chat" className={LinkStyle}>
          <RiMessengerLine size={40} />
          <span className="pl-[12px] w-full hidden lg:block">Tin nhắn</span>
        </Link>
        <button className={LinkStyle} onClick={noticMenu}>
          <AiOutlineHeart size={40} />
          <span className="pl-[12px] text-left w-full hidden lg:block">Thông báo</span>
        </button>
        <button className={LinkStyle} >
          <Switcher />
          <span className="pl-[12px] text-left w-full hidden lg:block">Chuyển chủ đề</span>
        </button>
        <Link to="/settings" className={LinkStyle}>
          <FiSettings size={40} />
          <span className="pl-[12px] w-full hidden lg:block">Cài đặt</span>
        </Link>
        <Link to="/user" className={LinkStyle}>
          <AvaBtn
            srcImg={`https://picsum.photos/200`}
            className={`w-[40px] h-[40px] rounded-full border-[2px] border-x-orange-400 border-y-red-500`}
          />
          <span className="w-full pl-[12px] hidden lg:block">{listUser[0].first_name + ' ' + listUser[0].last_name}</span>
        </Link>

        <div className="flex items-center w-[100%] p-[12px] text-[20px] font-medium hover:bg-[#f4f4f4cc] rounded-full mt-auto">
          {/* <DropUpRender color_btn={'white'} name_btn={'Xem thêm'} wallet={wallet} /> */}
          <SignOutButton
            css={'block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 hover:text-gray-900'}
            accountId={wallet.accountId}
            onClick={() => wallet.signOut()}
            label={'Sign Out'} />
        </div>

        <DrawerSearch isSearchOpen={drawSearch} option={option} listUser={listUser} wallet={wallet} />
        <ReactDimmer
          isOpen={drawSearch}
          exitDimmer={setDrawSearch}
          zIndex={100}
          // blur={1.5}
          className="menu-backgroud"
        />

      </div>

    </div>
  );
};
