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
      placement: "top-end"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-slate-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-[200px]" >
          <div className="relative inline-flex align-middle w-full">
            <button
              className="text-black w-full"
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {name_btn}
            </button>
            <div ref={popoverDropdownRef} className={
              (dropdownPopoverShow ? "block " : "hidden ") +
              (color === "white" ? "bg-white " : bgColor + " ") +
              "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mb-1"
            }>
              <div className="flex items-stretch">
                <span className="w-full text-lg pl-[12px] hidden lg:block" id="theme">Chuyển màu chủ đề</span>
                <Switcher />
              </div>

              <div className="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" />
              <SignOutButton
                css={'block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 hover:text-gray-900'}
                accountId={wallet.accountId}
                onClick={() => wallet.signOut()}
                label={'Sign Out'} />
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
