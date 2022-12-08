import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiUserCircle, BiLogInCircle } from "react-icons/bi";
import { MdSupportAgent } from "react-icons/md";
import { SignOutButton } from "../../../login_page";
import { AvaBtn } from "./Ava_Btn";
import { ava } from "../Nav_menu";
import { AiOutlineMessage } from "react-icons/ai";
import Chat from "../Chat";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ToggleChat() {
  const avaCss = "w-[50px] h-[50px] rounded-full";
  return (
    <Menu as="div" className="relative flex items-center">
      <Menu.Button className="">
        {/* <AvaBtn className={avaCss} srcImg={ava} /> */}
        <AiOutlineMessage />
        {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-1 w-[350px] origin-top-right rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none top-[100%] right-[-200px] bg-white">
          <div className="py-1">
            <Menu.Item>{({ active }) => <Chat />}</Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
