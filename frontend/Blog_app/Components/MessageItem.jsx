import React from "react";

export default function MessageItem({ accountId, sender, message, time, isSeen, isUnsent }) {
  var isFloatLeft = sender != accountId;
  return (
    <div className="flex p-[8px] rounded-[8px] items-start cursor-pointer">
      {isFloatLeft && (
        <img
          src={"https://picsum.photos/200"}
          alt=""
          className="rounded-full avatar h-[40px] w-[40px] mr-[12px]"
        />
      )}
      <div
        className={
          isFloatLeft
            ? "flex items-center justify-center px-[12px] py-[8px] h-full w-fit rounded-[20px] bg-gray-100 max-w-[400px]"
            : "flex items-center justify-center px-[12px] py-[8px] h-full w-fit rounded-[20px] bg-blue-500 max-w-[400px]"
        }
      >
        <span className={isFloatLeft ? "text-gray-700 text-[16px]" : "text-white text-[16px]"}>
          {message}
        </span>
      </div>
    </div>
  );
}
