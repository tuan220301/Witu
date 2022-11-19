import React from "react";
// import '../../assets/global.css';
import './style.css';
import { TiThMenuOutline } from 'react-icons/ti';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { AiOutlineMessage, AiOutlineMenu } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import { SignOutButton } from '../../login_page';
import { ReactDimmer } from "react-dimmer";
import { Menu } from "./Toggle_menu";
import { useState } from "react";
export const ava = 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/314337830_2212128372320281_3796251610106824436_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cXsyV9bBltMAX8qj-kI&_nc_ht=scontent.fsgn8-2.fna&oh=00_AfAbLoqVCqSHN1An5BJ02qs0nD-h70PCP1YITaK5HPtlUg&oe=637B1FF3';
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
                        <AiOutlineMessage />
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
                    <button className="w-[50px] h-[50px] rounded-[50px] ">
                        <img className="rounded-[50px]" src={ava} alt="ava" />
                    </button>
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