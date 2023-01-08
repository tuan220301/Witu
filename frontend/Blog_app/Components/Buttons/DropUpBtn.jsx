import React from "react";
import { createPopper } from "@popperjs/core";
import Switcher from "../Switcher";
import { SignOutButton } from "../../../login_page";

const Dropdown = ({ color, name_btn, wallet }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "top-end",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white" ? (bgColor = "bg-slate-700") : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex w-full">
        <div className="w-full">
          <div className="relative inline-flex align-middle w-full text-[20px] text-[#121212] ">
            <button
              className="text-black w-full dark:text-[#fafafa] "
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
              }}
            >
              {name_btn}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "text-base z-50 p-[10px] list-none rounded shadow-lg w-full transform transition-all duration-300 inset-0 translate-y-[50px] dark:bg-[#222] dark:text-[#fff] min-w-max-content border dark:border-[#5557] border-[#fafafa]"
              }
            >
              <div className="flex items-center w-[100%] p-[8px] text-[20px] font-medium hover:bg-[#f5f5f5] dark:hover:bg-[#5557] rounded-full cursor-pointer">
                <Switcher />
                <span className="ml-[12px]">Chuyển chủ đề</span>
              </div>
              <SignOutButton
                css={
                  "flex gap-[12px] items-center w-[100%] p-[8px] text-[20px] font-medium hover:bg-[#f5f5f5] dark:hover:bg-[#5557] rounded-full"
                }
                accountId={wallet.accountId}
                onClick={() => wallet.signOut()}
                label={"Sign Out"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropUpRender({ color_btn, name_btn, wallet }) {
  return (
    <>
      <Dropdown color={color_btn} name_btn={name_btn} wallet={wallet} />
    </>
  );
}
