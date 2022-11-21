import React from "react";
import { AvaBtn } from "./Ava_Btn";
import { ava } from "./Nav_menu";
import { AiOutlineFacebook, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai"
export const UserSummary = (user) => {
    console.log((user.data));
    const accountId = user.data.accountId;
    const avaCss = 'w-[150px] h-[150px] rounded-full';
    return (
        <div className="rounded-xl w-[80%]  p-[10px] grid grid-flow-row">
            <div className=" text-xl w-full bg-white ml-[15%] rounded-xl">
                <div className="flex justify-center items-center p-[10px]">
                    <AvaBtn className={avaCss} srcImg={ava} />
                </div>
                <div className="text-xl text-center mt-[20px]">
                    <label>{accountId}</label>
                </div>
                <div className="border-[#f4f4f4] border-t-2 mt-[10px] text-5xl">
                    <div className="p-[10px] text-center">
                        <button className="p-[5px] hover:bg-[#6ba4e9] hover:text-white hover:rounded-xl"><AiOutlineFacebook /></button>
                        <button className="p-[5px] hover:bg-[#6ba4e9] hover:text-white hover:rounded-xl"><AiOutlineInstagram /></button>
                        <button className="p-[5px] hover:bg-[#6ba4e9] hover:text-white hover:rounded-xl"><AiFillLinkedin /></button>
                    </div>

                </div>
            </div>
        </div>
    )
}