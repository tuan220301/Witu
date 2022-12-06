import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react';
import { BiUserCircle, BiLogInCircle } from 'react-icons/bi';
import { MdSupportAgent } from 'react-icons/md';
import { SignOutButton } from '../../../login_page';
import { AvaBtn } from './Ava_Btn';
import { ava } from '../Nav_menu';
import { AiOutlineMessage } from 'react-icons/ai';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ToggleChat() {
    const avaCss = 'w-[50px] h-[50px] rounded-full';
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-[50px] rounded-full  ">
                    {/* <AvaBtn className={avaCss} srcImg={ava} /> */}
                    <AiOutlineMessage/>
                    {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <div className='flex items-stretch'>
                                        chat box
                                    </div>
                                </a>
                            )}
                        </Menu.Item>
                        

                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
