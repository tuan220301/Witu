import React from "react";
// import '../../assets/global.css';
import './style.css';
import { TiThMenuOutline } from 'react-icons/ti';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import { SignOutButton } from '../../login_page';
import { ReactDimmer } from "react-dimmer";
import { Menu } from "./Toggle_menu";
import { useState } from "react";
export const Nav_menu = ({ accountId }) => {
    const [isMenuOpen, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu((prevState) => !prevState);
    };
    return (
        <div className='nav_menu_container'>
            <div className="menu">
                <TiThMenuOutline className="menu_btn" onClick={handleMenu} />
            </div>
            <div className="menu ">
                <div className="list_btn">
                    <button className="menu_btn">
                        <AiOutlineFacebook />
                    </button>
                    <button className="menu_btn">
                        <AiOutlineInstagram />
                    </button>
                    {/* <button className="menu_btn">
                        <FiLogOut />
                    </button> */}
                    <SignOutButton accountId={accountId.accountId} onClick={() => accountId.signOut()} />
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