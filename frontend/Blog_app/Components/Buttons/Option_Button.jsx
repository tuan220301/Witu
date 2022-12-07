import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react';
import { SlOptionsVertical } from 'react-icons/sl';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import useModal from '../Modal/Modal_hook';
import "../style.css"
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function OptionsBtn({ listControl, userName, blog }) {
    const { isShowing, toggle } = useModal();
    const [option, setOption] = useState();
    let data = [];
    // let user_name = '';
    
    data.push(
        {
            "user_name": userName,
            "blog": blog
        }
    )
    // console.log(data)
    //0: update - 1: delete
    function editBtn() {
        setOption(0)
        toggle(true);
    }
    const deleteBtn = () => {
        setOption(1)
        // console.log('blog' + JSON.stringify(blog.id))
        toggle(true);

    }
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className='w-[10%] pt-[10px] text-xl hover:text-red-500'>
                    <SlOptionsVertical />
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

                    <div className="w-full text-center">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 w-full' : 'text-gray-700  w-full',
                                        'block px-4 py-2 text-sm  w-full'
                                    )}
                                    onClick={() => editBtn()}
                                >
                                    Edit
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 w-full' : 'text-gray-700  w-full',
                                        'block px-4 py-2 text-sm  w-full'
                                    )}
                                    onClick={deleteBtn}
                                >
                                    Delete
                                </button>
                            )}
                        </Menu.Item>
                    </div>

                </Menu.Items>


            </Transition>
            <Modal
                title={option === 0 ? 'Edit blog' : 'Delete blog'}
                isShowing={isShowing}
                hide={toggle}
                data={data}
                listControl={listControl}
                option={option}
            />
           
        </Menu>
    )
}