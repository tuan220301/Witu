import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react';
import { SlOptionsVertical } from 'react-icons/sl';
import React from 'react';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function OptionsBtn({ listControl, user, id_user }) {

    const editBtn = () => {

        // console.log(id_user)
        // console.log(user)
        user.forEach(item => {
            console.log('item: ' + JSON.stringify(item.id))
            if (id_user === item.id) {
                console.log('edit')
            }
            else {
                alert('cannot access')
            }
        })
    }
    const deleteBtn = () => {
        console.log('deleteBtn')
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
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 w-full' : 'text-gray-700  w-full',
                                        'block px-4 py-2 text-sm  w-full'
                                    )}
                                    onClick={editBtn}
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
        </Menu>
    )
}