import React from "react";
import { Nav_menu } from "../Components/Nav_menu";
export const Settings = ({ wallet }) => {
    return (
        <div>
            <Nav_menu accountId={wallet} />
            <div>
                this is Settings page
            </div>
        </div>
    )
}