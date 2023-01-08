import React from "react";
import { AvaBtn } from "../Buttons/Ava_Btn";
export const NoticeView = () => {
    const goToNotice = () => {
        console.log('notice')
    }
    return (
        <div className="w-full">
            <div className="w-full p-3">
                <h1 className="text-2xl font-bold my-1">Thông báo</h1>

            </div>
            <div className="w-full border-b-[1px] border-gray-300">
                <div className="w-full p-3 h-full">
                    <h1 className="text-lg mb-2">Tuần này</h1>
                    <div className="w-full flex items-stretch cursor-pointer" onClick={goToNotice}>
                        <div className="w-[15%]">
                            <AvaBtn srcImg={`https://picsum.photos/200`}
                                className={`w-[50px] h-[50px] rounded-full border-[2px] border-x-orange-400 border-y-red-500`} />
                        </div>
                        <div className="text-lg w-[85%]">
                            <span className="font-bold">Nguyen Minh Tuan </span>
                            <span>Đã bình luận bài viết của bạn</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border-b-[1px] border-gray-300">
                <div className="w-full p-3 h-full" >
                    <h1 className="text-lg mb-2">Tuần trước</h1>
                    <div className="w-full flex items-stretch cursor-pointer" onClick={goToNotice}>
                        <div className="w-[15%]">
                            <AvaBtn srcImg={`https://picsum.photos/200`}
                                className={`w-[50px] h-[50px] rounded-full border-[2px] border-x-orange-400 border-y-red-500`} />
                        </div>
                        <div className="text-lg w-[85%]">
                            <span className="font-bold">Win Lã </span>
                            <span>Đã bình luận bài viết của bạn</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}