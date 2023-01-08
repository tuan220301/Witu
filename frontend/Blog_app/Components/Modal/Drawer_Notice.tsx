import React from "react";
// import "../style.css";
interface IMenuProps {
    isNoticehOpen: boolean;
}

export const DrawerNotice = ({ isNoticehOpen }: IMenuProps) => {
    // console.log('param: ' + JSON.stringify(param))
    return (

        <div className={`app-menu ${isNoticehOpen ? "menu-open ml-20 lg:ml-64" : ""}`}>
            <h2>Example Notice </h2>
        </div>
    );
};
