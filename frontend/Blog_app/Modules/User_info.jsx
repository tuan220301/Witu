import React from "react";
import { AvaBtn } from "../Components/Buttons/Ava_Btn";
import { FiSettings } from "react-icons/fi";
import ListBlog from "../Components/List_Blog";
function UserView({ user, blogs, listControl, wallet }) {
    return (
        <div className="w-full h-full flex gap-[16px] flex-col overflow-y-scroll">
            <div className="w-[1000px] mx-auto px-[16px] flex flex-col gap-[12px]">
                <div className="flex items-stretch h-40 p-5 mt-3">
                    <div className="w-[25%]">
                        <AvaBtn srcImg={`https://picsum.photos/200`}
                            className={`w-[150px] h-[150px] rounded-full border-[2px] border-x-orange-400 border-y-red-500`} />
                    </div>
                    <div className="w-[75%]">
                        <div className="flex items-stretch">
                            <span className="text-lg p-3 hover:font-bold">{user[0].first_name + ' ' + user[0].last_name}</span>
                            <button className="text-lg flex items-stretch p-3 rounded-lg bg-slate-300 hover:bg-slate-400"
                            >
                                Chỉnh sửa trang cá nhân
                                <label className="text-2xl cursor-pointer ml-2">
                                    <FiSettings />
                                </label>

                            </button>
                        </div>
                        <div className="flex items-stretch p-3 text-lg">
                            <span className="mr-3 hover:font-bold">{blogs.length + ' bài viết'}</span>
                            <span className="mr-3 hover:font-bold">{'facebook: ' + user[0].facebook}</span>
                            <span className="mr-3 hover:font-bold">{'instaram: ' + user[0].instagram}</span>
                        </div>
                        <div className="p-3 text-lg">
                            <span className="hover:font-bold">{'Ngày sinh: ' + user[0].birthday}</span>

                        </div>
                    </div>
                </div>
                <div className="border-t-2 border-gray-300 mt-5 w-[800px]">
                    <div className="text-center p-2 mt-2">
                        <span className="text-xl italic underline">Bài viết</span>
                    </div>
                    <div className="mt-2  flex justify-center items-center">
                        <ListBlog listControl={listControl} accountId={wallet.accountId} blogs={blogs} users={user} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default React.memo(UserView);