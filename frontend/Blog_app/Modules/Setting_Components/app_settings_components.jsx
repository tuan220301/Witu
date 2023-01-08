import React from "react";
import { AvaBtn } from "../../Components/Buttons/Ava_Btn";

export const SystemSettings = () => {
  return (
    <div className="w-full h-full flex justify-center overflow-auto">
      <div className="flex flex-row max-w-full m-[20px] lg:mt-[50px] m-x-auto h-[auto] w-[780px] bg-white dark:bg-black dark:text-[#fafafa] rounded-2xl shadow overflow-hidden border dark:border-[#5557] border-[#fafafa]">
        <div className="flex basis-2/6 border-[#f4f4f4] dark:border-[#121212] border-r-2 p-[12px] flex-col gap-[8px] text-[#121212] dark:text-[#fafafa]">
          <span>Chỉnh sửa trang cá nhân</span>
          <span>Chỉnh sửa trang cá nhân</span>
          <span>Chỉnh sửa trang cá nhân</span>
        </div>
        <div className="flex flex-col gap-[8px] basis-4/6 p-[30px]">
          {/* avatar, name, link facebook instagram */}
          <div className="flex flex-col gap-[12px] w-full">
            <div className="flex gap-[30px]">
              <div className="flex justify-end basis-1/3">
                <AvaBtn
                  srcImg={`https://picsum.photos/200`}
                  className={`w-[50px] h-[50px] rounded-full border-[2px] border-x-orange-400 border-y-red-500`}
                />
              </div>
              <span className="basis-2/3 text-[20px] cursor-pointer">win lax</span>
            </div>
            <div className="flex gap-[30px]">
              <div className="flex justify-end basis-1/3">
                <span>Link facebook</span>
              </div>
              <input
                type="text"
                placeholder="Enter your content"
                className="basis-2/3 text-base font-thin w-full rounded-[20px] px-[12px] py-[8px] bg-[#f1f2f6] dark:bg-[#121212] dark:text-[#fafafa] focus:outline-none break-words resize-none border-none break-all hover:bg-gray-200 dark:hover:bg-[#161616] border border-[#5557]"
              />
            </div>
            <div className="flex gap-[30px]">
              <div className="flex justify-end basis-1/3">
                <span>Link instagram</span>
              </div>
              <input
                type="text"
                placeholder="Enter your content"
                className="basis-2/3 text-base font-thin w-full rounded-[20px] px-[12px] py-[8px] bg-[#f1f2f6] dark:bg-[#121212] dark:text-[#fafafa] focus:outline-none break-words resize-none border-none break-all hover:bg-gray-200 dark:hover:bg-[#161616] border border-[#5557]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
