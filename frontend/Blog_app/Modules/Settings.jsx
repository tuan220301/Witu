import React, { useState, useEffect } from "react";
import { Nav_menu } from "../Components/Nav_menu";
import { AvaBtn } from "../Components/Buttons/Ava_Btn";
import { ava } from "../Components/Nav_menu";
import { FaUserCog } from "react-icons/fa";
import { GrSystem } from "react-icons/gr";
import { UserSettings } from "./Setting_Components/User_settings_component";
import { SystemSettings } from "./Setting_Components/app_settings_components";
import ClipLoader from "react-spinners/ClipLoader";
import { Loader } from "../Components/Loader";
export const Settings = ({ wallet, controller }) => {
    // console.log(wallet);
    const avaCss = 'w-[200px] h-[200px] rounded-full';
    const [userSettings, setUserSettings] = useState(true);
    const openUserSettings = () => {
        setUserSettings(true);
        console.log(userSettings);
    };
    const openSystemSettings = () => {
        setUserSettings(false);
        console.log(userSettings)
    };
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <div >
            <Nav_menu accountId={wallet} />
            {loading ? <Loader open={loading} />
                :
                <div className="w-full h-full">

                    <div className="grid grid-flow-col p-[10px] h-[90vh]">
                        <div className="border-[#f4f4f4] border-r-2">
                            <div className="flex justify-center items-center mt-[20%]">
                                <AvaBtn className={avaCss} srcImg={ava} />
                            </div>
                            <p className="text-center text-2xl mt-[5%] p-[10px] font-bold">{wallet.accountId}</p>
                            <div className="grid grid-flow-row mt-[20%] text-xl">
                                <button className=" p-[20px] hover:bg-[#f4f4f4] hover:font-bold"
                                    onClick={openUserSettings}
                                >
                                    <div className="flex justify-center items-center">
                                        <div className="flex items-stretch">
                                            <FaUserCog />
                                            <label className="ml-3">User Settings</label>
                                        </div>
                                    </div>
                                </button>
                                <button className=" p-[20px] hover:bg-[#f4f4f4] hover:font-bold"
                                    onClick={openSystemSettings}
                                >
                                    <div className="flex justify-center items-center">
                                        <div className="flex items-stretch">
                                            <GrSystem />
                                            <label className="ml-3">System Settings</label>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col-span-4 ">
                            <div className="m-auto">
                                <div className={userSettings ? 'block' : 'hidden'}>
                                    <UserSettings controller={controller} wallet={wallet} />
                                </div>
                                <div className={userSettings ? 'hidden' : 'block'}>
                                    <SystemSettings />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}