import React from "react";

const ChatItem = (props) => {
  return (
    <div>
      <div
        className={
          props.isFullSreen
            ? "flex items-center p-[8px] hover:bg-white rounded-[8px] overflow-hidden cursor-pointer"
            : "flex items-center p-[8px] hover:bg-gray-100 rounded-[8px] overflow-hidden cursor-pointer"
        }
      >
        <img
          src={props.ava || "https://picsum.photos/200"}
          alt=""
          className="rounded-full avatar h-[56px] w-[56px] mr-[12px]"
        />
        <div className="flex flex-1 flex-col w-full">
          <span className="text-gray-700 font-bold text-[16px] w-fit">{props.name}</span>
          <div className="text-gray-500 flex text-[14px] w-[80%]">
            <span className="truncate ... flex-1 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asdsd
            </span>
            {/* time */}
            <span className="text-[13px]">- {props.time || "now"}</span>
          </div>
          {/* count unseen, seen, unseen, unsent */}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
