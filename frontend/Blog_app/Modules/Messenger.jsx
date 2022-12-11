import React, { useState } from "react";
import Chat from "../Components/Chat";
import { Nav_menu } from "../Components/Nav_menu";
import { Home } from "./Home";
import { MessageItem } from "../Components/MessageItem";
import { io } from "socket.io-client";
const socket = io();
export const Messenger = ({ wallet }) => {
  return (
    <div className="app_container">
      <Nav_menu accountId={wallet} />

      <div className="flex flex-row">
        <div className="w-1/4">
          <Chat isFullScreen={true} />
        </div>
        <div className="w-3/4 bg-white p-[16px]">
          <div>
            <div className="flex items-center p-[8px] rounded-[8px] overflow-hidden cursor-pointer">
              <img
                src={"https://picsum.photos/200"}
                alt=""
                className="rounded-full avatar h-[56px] w-[56px] mr-[12px]"
              />
              <div className="flex flex-1 flex-col w-full">
                <span className="text-gray-700 font-bold text-[16px] w-fit">vinh</span>
                <div className="text-gray-500 flex text-[14px] w-[80%]">Active now</div>
                {/* count unseen, seen, unseen, unsent */}
              </div>
            </div>
            {/* {chatList.map((item) => (
              <MessageItem {...item}></MessageItem>
            ))} */}

            <div className="flex p-[8px] rounded-[8px] items-start cursor-pointer">
              <img
                src={"https://picsum.photos/200"}
                alt=""
                className="rounded-full avatar h-[40px] w-[40px] mr-[12px]"
              />
              <div className="flex items-center justify-center px-[12px] py-[8px] h-full w-fit rounded-[20px] bg-gray-100 max-w-[400px]">
                <span className="text-gray-700 text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Cumque autem, dolorum rerum iure
                  accusantium asperiores quas hic provident at laborum laudantium animi vel omnis a
                  esse aperiam debitis similique expedita!
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex items-center justify-center px-[12px] py-[8px] h-full w-fit rounded-[20px] bg-blue-500 max-w-[400px]">
                <span className="text-white text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Cumque autem, dolorum rerum iure
                  accusantium asperiores quas hic provident at laborum laudantium animi vel omnis a
                  esse aperiam debitis similique expedita!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Home listUser={listUser} listControl={helloNEAR} accountId={accountId} /> */}
    </div>
  );
};
