import React from "react";
// import '../../assets/global.css';
import './style.css';
import { TiThMenuOutline } from 'react-icons/ti';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { AiOutlineMessage, AiOutlineMenu } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import { SignOutButton } from '../../login_page';
import { ReactDimmer } from "react-dimmer";
import { Menu } from "./Buttons/Toggle_menu";
import { useState } from "react";
import ToggleBtn from "./Buttons/ToggleBtn";
import ToggleChat from "./Buttons/Toggle_chat";
export const ava = 'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6';
export const Nav_menu = ({ accountId }) => {
    const [isMenuOpen, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu((prevState) => !prevState);
    };

    return (
        <div className='w-[100%] h-[60px] bg-white grid grid-cols-2 lg:grid-cols-3'>
            <div className="w-full h-[60px]">
                <ul className="w-full h-full">
                    <li className="inline-block">
                        <img src={require('../../assets/imgs/Logo.png')} className='w-[80px] h-[60px]' alt="logo" />
                    </li>
                    <li className="inline-block text-[35px] p-[10px] rounded-xl hover:bg-[#6ba4e9] hover:text-white">
                        <AiOutlineMenu onClick={handleMenu} />
                    </li>
                    <li className="inline-block text-[35px] p-[10px] rounded-xl hover:bg-[#6ba4e9] hover:text-white">
                        <IoIosNotificationsOutline />
                    </li>
                    <li className="inline-block text-[35px] p-[10px] rounded-xl hover:bg-[#6ba4e9] hover:text-white">
                        {/* <AiOutlineMessage /> */}
                        <ToggleChat />
                    </li>
                </ul>
            </div>
            <div className="lg:block lg:w-full lg:h-[60px] lg:p-[7px] hidden">
                <div className="border border-black flex items-stretch w-[500px] h-[45px] p-[5px] rounded-xl">
                    <input type="text" placeholder="Search" className="w-[450px] h-[35px] pl-[10px] focus:outline-0" />
                    <label className="text-3xl p-[3px]"><BiSearchAlt2 /></label>
                </div>
            </div>
            <div className="w-full h-[60px]">
                <div className="float-right mr-2 p-[5px]">
                    <ToggleBtn wallet={accountId} />

                </div>
            </div>
            <Menu isMenuOpen={isMenuOpen} />
            <ReactDimmer
                isOpen={isMenuOpen}
                exitDimmer={setMenu}
                zIndex={100}
                blur={1.5}
            />
        </div>
    )
}