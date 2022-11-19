import React from "react";
import { ava } from '../../Components/Nav_menu';
import { useState } from "react";
import { TfiMoreAlt } from 'react-icons/tfi';
import { ReactDimmer } from "react-dimmer";
import { AddBlog } from "../Add_blog";
import { BsPencilSquare, BsFileImage, BsCameraVideo, BsCamera } from 'react-icons/bs';
import { MdOutlineAddReaction } from 'react-icons/md';
export const Input_post_component = (data, check) => {

    const [isModalOpen, setModal] = useState(false);
    const upBlog = () => {
        setModal((prevState) => !prevState);
    };
    const upAlbum = () => {
        console.log('img')
    }
    const upVideo = () => {
        console.log('video')
    }
    let displaytBtnClass = 'float-right w-[200px] h-[35px] bg-[#5596e6] rounded-3xl text-white text-center hover:font-bold';

    const [inputVal, setInputVal] = useState('');
    onTyping = (event) => {
        setInputVal(event.target.value);
    }
    const display = (data) => {
        if (data.length !== 0) {
            return true;
        }
        else {
            return false
        }
    }
    return (

        <div className="flex justify-center items-center">
            <div className="grid grid-rows-4 w-[700px] h-[auto] bg-white mt-[10px] rounded-2xl">
                <div className="w-full grid grid-cols-3 h-[50px]">
                    <div className="flex items-stretch text-xl p-[10px] hover:bg-[#f4f4f4] border-r-2 border-[#f4f4f4]">
                        <BsPencilSquare className='mr-[10px]' /><label className="text-base">Publish</label>
                    </div>
                    <div className="flex items-stretch text-xl p-[10px] hover:bg-[#f4f4f4] border-b-2 border-[#f4f4f4]" onClick={upAlbum}>
                        <BsFileImage className='mr-[10px]' /><label className="text-base">Albums</label>
                    </div>
                    <div className="flex items-stretch text-xl p-[10px] hover:bg-[#f4f4f4] border-b-2 border-[#f4f4f4]" onClick={upVideo}>
                        <BsCameraVideo className='mr-[10px]' /><label className="text-base">Video</label>
                    </div>
                </div>
                <div className="flex items-stretch w-full row-span-2 bg-white p-[5px]">
                    <img className="w-[50px] h-[50px] rounded-[50px]" src={ava} alt="ava" />
                    <textarea className="w-full  outline-0 cursor-text text-left pl-[20px]"
                        type="text"
                        placeholder="write something about you"
                        value={inputVal}
                        onChange={onTyping} />
                </div>
                <div className="border-t-2 border-[#f4f4f4] grid grid-cols-5 p-[5px]">
                    <div className="flex items-stretch bg-[#f4f4f4] rounded-full w-[100px] h-[40px] p-[10px] ml-2 hover:bg-[#5596e6] hover:text-white">
                        <BsCamera className="mr-[5px] text-xl" /><label className="w-full">Media</label>
                    </div>
                    <div className="flex items-stretch bg-[#f4f4f4] rounded-full w-[120px] h-[40px] p-[10px] hover:bg-[#5596e6] hover:text-white">
                        <MdOutlineAddReaction className="mr-[5px] text-xl" /><label className="w-full">Activity</label>
                    </div>
                    <div className="col-span-3">
                        <button className={display(inputVal) ? displaytBtnClass : 'hidden'}>Publish</button>
                    </div>
                </div>
            </div>

            {isModalOpen && <AddBlog closeModal={setModal} wallet={data} />}
            <ReactDimmer
                isOpen={isModalOpen}
                exitDimmer={setModal}
                zIndex={100}
                blur={1.5}
            />
        </div>

    );
}