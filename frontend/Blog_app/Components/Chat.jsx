import React, { useState } from "react";
import ChatList from "./ChatList";

export default function Chat() {
  const [query, setQuery] = useState("");

  // console.log(query);
  return (
    <div className="">
      <div className="pt-[12px] px-[16px] flex justify-between items-center">
        <span className="text-[24px] font-bold text-gray-700">Chat</span>
        <button className="text-gray-500 hover:text-gray-700">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* search bar */}
      <div className="my-[8px] px-[16px] ">
        <div className="relative">
          <input
            type="text"
            className="w-full border border-gray-100 rounded-full py-[8px] px-[16px] pl-[40px] text-gray-700 focus:outline-none focus:border-gray-500 text-[20px] bg-gray-100"
            placeholder="Search in chat"
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="absolute left-[10px] top-1/2 translate-y-[-34%]">
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
      </div>
      {/* chat list */}
      <div className="p-[16px]">
        <ChatList query={query}></ChatList>
      </div>

      {/* show all chat button */}
      <div className="text-gray-700 flex items-center justify-center m-[16px]">
        <button className="block p-[8px] bg-blue-400 text-white font-normal text-[20px] w-full rounded-[20px] hover:bg-blue-500">
          Show all chat
        </button>
      </div>
    </div>
  );
}
