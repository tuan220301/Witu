import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
export const HeaderModal = ({ title, hide }) => {
  return (
    <div className="relative flex items-center justify-center border-b-2 p-[20px] border-[#f4f4f4] dark:border-[#121212] dark:text-[#fafafa]">
      <div className="text-xl font-bold">{title}</div>
      <div className="absolute right-[20px] flex items-center justify-center hover:bg-gray-200 dark:bg-[#121212] dark:border-[#5557] rounded-full bg-[#f1f2f6] dark:hover:bg-[#161616] text-black dark:text-white">
        <button
          type="button"
          className="text-3xl cursor-pointer border-none"
          data-dismiss="modal"
          aria-label="Close"
          onClick={hide}
        >
          <GrFormClose />
        </button>
      </div>
    </div>
  );
};
