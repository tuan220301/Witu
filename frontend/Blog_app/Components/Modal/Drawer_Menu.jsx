import React from "react";
import { SearchView } from "./Search_View";
import { NoticeView } from "./Notice_View";
export const DrawerSearch = ({ isSearchOpen, option }) => {
    // console.log('param: ' + JSON.stringify(option))
    return (

        <div className={`app-menu ${isSearchOpen ? "menu-open ml-20 lg:ml-64" : ""}`}>
            {/* <Menu listUser={listUser} wallet={wallet} /> */}
            <div className="">
                {
                    option === 'search' ? <SearchView /> : <NoticeView />
                }
            </div>
        </div>
    );
};
