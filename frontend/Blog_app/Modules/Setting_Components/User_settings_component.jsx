import React from "react";
import { Required } from "../../Components/Required_span";
export const UserSettings = () => {
    return (
        <div className="w-full p-[20px]" >
            <label className="text-3xl">User Settings</label>
            <div className="grid grid-cols-2">
                <div className="grid gird-flow-row">
                    <div className="p-[20px]">
                        <div className="flex items-stretch">
                            <label htmlFor="fname">First Name</label>
                            <Required />
                        </div>
                        <input className="border-2 border-black rounded-xl p-[10px] " type="text" id="fname" placeholder="" />
                    </div>
                    <div className="p-[20px]">
                        <div className="flex items-stretch">
                            <label htmlFor="lname">Last Name</label>
                            <Required />
                        </div>
                        <input className="border-2 border-black rounded-xl w-full" type="text" id="lname" placeholder="" />
                    </div>
                    <div className="p-[20px]">
                        <div className="flex items-stretch">
                            <label htmlFor="email">Email</label>
                            <Required />
                        </div>
                        <input className="border-2 border-black rounded-xl w-full" type="email" id="email" placeholder="" />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}