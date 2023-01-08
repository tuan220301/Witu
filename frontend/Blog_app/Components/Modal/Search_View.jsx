import React from "react";
import { AvaBtn } from "../Buttons/Ava_Btn";
import OptionsBtn from "../Buttons/Option_Button";
export const SearchView = () => {
    return (
        <div className="w-full">
            <div className="border-b-[1px] border-gray-500 w-full p-3 h-36">
                <h1 className="text-2xl font-bold my-5">Tìm kiếm</h1>
                <input className="bg-gray-200 rounded-lg p-3 w-[98%] h-10 text-sm" placeholder="Tìm kiếm" type="text" />
            </div>
            <div className="w-full p-3 h-full">
                <h1 className="text xl mb-2">Gần đây</h1>
                <div className="w-full flex items-stretch mb-3">
                    <div className="w-[20%]">
                        <AvaBtn srcImg={`https://picsum.photos/200`}
                            className={`w-[50px] h-[50px] rounded-full border-[2px] border-x-orange-400 border-y-red-500`} />
                    </div>
                    <div className="w-[70%] text-lg">
                        <h1 className="font-bold">Win Lã </h1>
                        <span>La Mai Win</span>
                    </div>
                    <button className="w-[15%]">
                        x
                    </button>
                </div>

            </div>

        </div>
    )
}