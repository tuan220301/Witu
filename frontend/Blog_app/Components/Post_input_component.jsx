import React from "react";
import { ava } from './Nav_menu';
import { useState, useEffect } from "react";
import { TfiMoreAlt } from 'react-icons/tfi';
import { ReactDimmer } from "react-dimmer";
import { AddBlog } from "./List_Blog";
import { BsPencilSquare, BsFileImage, BsCameraVideo, BsCamera } from 'react-icons/bs';
import { MdOutlineAddReaction } from 'react-icons/md';
import { Link } from "react-router-dom";
export const Input_post_component = ({ listUser, listControl, accountId}) => {

    const upBlog = () => {
        setModal((prevState) => !prevState);
    };
    const upAlbum = () => {
        console.log('img')
    }
    const upVideo = () => {
        console.log('video')
    }
    let displaytBtnClass = 'float-right w-[150px] h-[35px] mr-[10px] bg-[#5596e6] rounded-3xl text-white text-center hover:font-bold';
    // console.log('accountId: ' + accountId)
    
    //get value from input of post blog
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
    //preview img when upload 
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [row, setRow] = useState(false);
    const [displayBtnClearImg, setDisplayBtnImg] = useState(false);

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    //preview img when upload
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0]);
        setRow(true);
        setDisplayBtnImg(true);
    }
    //delete img preview
    const removeImg = () => {
        setPreview(undefined);
        setRow(false);
        setDisplayBtnImg(false)
    }
    // console.log(data);

    //call method in contract
    // const [listUser, setListUser] = useState([]);
    // const dataClone = data.data

    // console.log('user: ' + JSON.stringify(user))

    const date = new Date();
    const publishBtn = (event) => {
        event.preventDefault();
        let datePublish = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        let idUser = 0;
        const user_clone = listUser.filter(user => user.wallet === accountId)
        // console.log('id: ' + userId)
        user_clone.forEach(item => {
            // console.log('user: ' + JSON.stringify(item.id));
            idUser = item.id;
        });

        // console.log('inputVal: ' + inputVal);
        // console.log('datePublish: ' + datePublish);
        // console.log('idUser: ' + idUser);

        listControl.addBlog(inputVal, datePublish, idUser);
        setTimeout(() => {
            window.location.reload();
        }, 1000);

    }
    // React.useEffect(() => {
    //     listControl.addBlog()
    //         .then(setBlogs)
    //         .catch(alert)
    // }, [])

    return (

        <div className="flex justify-center items-center">
            <div className="grid grid-rows-8 w-[750px] h-[auto] bg-white mt-5 rounded-2xl">
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
                <div className="w-full row-span-6 bg-white p-[5px]">
                    <div className="grid grid-flow-row">
                        <div className="flex items-stretch">
                            <img className="w-[50px] h-[50px] rounded-[50px]" src={ava} alt="ava" />
                            <textarea className="w-full  outline-0 cursor-text text-left pl-[20px] max-h-[200px] min-h-[100px]"
                                type="text"
                                placeholder="write something about you"
                                value={inputVal}
                                onChange={onTyping} />
                        </div>
                        <div className={row ? 'w-full' : 'hidden'}>
                            {selectedFile && <img className="h-full w-full" src={preview} />}
                        </div>
                    </div>
                </div>
                {/* <div className="w-full h-[500px]">
                    {selectedFile && <img className="h-[500px]" src={preview} />}
                </div> */}
                <div className="border-t-2 border-[#f4f4f4] grid grid-cols-5 p-[5px]">
                    <div className="bg-[#f4f4f4] rounded-full w-[100px] h-[40px] p-[10px] ml-2 hover:bg-[#5596e6] hover:text-white">
                        <label htmlFor="file" className="flex items-stretch">
                            <BsCamera className="mr-[5px] text-xl" />Meida
                        </label>
                        <input id="file" type="file" className="hidden" onChange={onSelectFile} />
                    </div>
                    <div className="flex items-stretch bg-[#f4f4f4] rounded-full w-[120px] h-[40px] p-[10px] hover:bg-[#5596e6] hover:text-white">
                        <MdOutlineAddReaction className="mr-[5px] text-xl" /><label className="w-full">Activity</label>
                    </div>
                    <div className="col-span-3">
                        <button className={displayBtnClearImg ? displaytBtnClass : 'hidden'} onClick={removeImg}>Remove Image</button>
                        <Link to="/">
                            <button className={display(inputVal) ? displaytBtnClass : 'hidden'}
                                onClick={publishBtn}>Publish</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}