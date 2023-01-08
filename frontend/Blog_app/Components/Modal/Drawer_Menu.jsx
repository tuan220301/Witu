import React from "react";
import { Menu } from "../Buttons/Toggle_menu";
// import "../style.css";
// interface IMenuProps {
//     isSearchOpen: boolean;
// }

export const DrawerSearch = ({ isSearchOpen, option, listUser, wallet }) => {
    console.log('param: ' + JSON.stringify(option))
    return (

        <div className={`app-menu ${isSearchOpen ? "menu-open ml-20 lg:ml-64" : ""}`}>
            {/* <Menu listUser={listUser} wallet={wallet} /> */}
            <div className="">
                {option}
            </div>
        </div>
    );
};
