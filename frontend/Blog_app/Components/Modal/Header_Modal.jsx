import React from "react";
import { FaRegEdit } from "react-icons/fa"
export const HeaderModal = ({ title, hide }) => {
    return (
        <div className='grid grid-flow-col border-b-2 p-5 border-gray-500'>
            <div className='flex items-stretch mt-[5px]'>

                <label className='text-xl font-bold'>{title}</label>
            </div>
            <div className='w-full'>
                <div className='float-right'>
                    <button type="button" className="text-3xl cursor-pointer text-black opacity-30 border-none" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
            </div>
        </div>
    )
}