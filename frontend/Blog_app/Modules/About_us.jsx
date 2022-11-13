import React from "react";
import { Nav_menu } from "../Components/Nav_menu";
export const AboutUs = ({ wallet }) => {
    return (
        <div>
            <Nav_menu accountId={wallet} />
            <div>
                this is about us page
            </div>
        </div>
    )
}