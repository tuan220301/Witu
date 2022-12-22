import React, { useRef } from "react";
import { ava } from "./Nav_menu";
import { useState, useEffect } from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import { ReactDimmer } from "react-dimmer";
import { AddBlog } from "./List_Blog";
import { BsPencilSquare, BsFileImage, BsCameraVideo, BsCamera } from "react-icons/bs";
import { MdOutlineAddReaction } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiTrash } from "react-icons/hi";
import ImageUploader from "./ImageUploader";
export const Input_post_component = ({ listUser, listControl, accountId }) => {
  const upBlog = () => {
    setModal((prevState) => !prevState);
  };
  const upAlbum = () => {
    console.log("img");
  };
  const upVideo = () => {
    console.log("video");
  };
  let displaytBtnClass =
    "flex items-center px-[20px] text-center h-[40px] bg-[#5596e6] rounded-xl text-white hover:bg-blue-400 dark:bg-[#121212] dark:hover:bg-[#5557] dark:text-[#fafafa] border border-[#fafafa] dark:border-[#5557]";
  // console.log('accountId: ' + accountId)

  //get value from input of post blog
  const display = (data) => {
    if (data.length !== 0) {
      return true;
    } else {
      return false;
    }
  };
  //preview img when upload
  const [selectedFile] = useState();
  const [preview, setPreview] = useState();
  const [row, setRow] = useState(false);
  const [displayBtnClearImg, setDisplayBtnImg] = useState(false);
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  //preview img when upload
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      undefined;
      return;
    }
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
    setRow(true);
    setDisplayBtnImg(true);
  };
  //delete img preview
  const removeImg = () => {
    setPreview(undefined);
    setRow(false);
    setDisplayBtnImg(false);
  };
  // console.log(data);

  //call method in contract
  // const [listUser, setListUser] = useState([]);
  // const dataClone = data.g

  // console.log('user: ' + JSON.stringify(user))

  const date = new Date();
  const publishBtn = (event) => {
    event.preventDefault();
    let datePublish = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    let idUser = 0;
    const user_clone = listUser.filter((user) => user.wallet === accountId);
    // console.log('id: ' + userId)
    user_clone.forEach((item) => {
      // console.log('user: ' + JSON.stringify(item.id));
      idUser = item.id;
    });

    // console.log('inputVal: ' + inputVal);
    // console.log('datePublish: ' + datePublish);
    // console.log('idUser: ' + idUser);

    listControl.addBlog(inputVal, datePublish, idUser);
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };
  // React.useEffect(() => {
  //     listControl.addBlog()
  //         .then(setBlogs)
  //         .catch(alert)
  // }, [])
  const [inputVal, setInputVal] = useState("");
  const textAreaRef = useRef(null);
  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };
  useEffect(resizeTextArea, [inputVal]);
  const onTyping = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-full h-[auto] bg-white dark:bg-black dark:text-[#fafafa] mt-5 rounded-2xl shadow overflow-hidden border border-[#fafafa] dark:border-[#5557]">
        <div className="flex flex-col w-full bg-white dark:bg-black dark:text-[#fafafa] p-[12px] gap-[12px]">
          <div className="flex gap-[8px]">
            <img className="w-[40px] h-[40px] rounded-full" src={ava} alt="ava" />
            <textarea
              ref={textAreaRef}
              value={inputVal}
              name="textValue"
              className="text-xl font-thin w-full rounded-[20px] px-[12px] py-[8px] bg-[#f1f2f6] dark:bg-[#121212] dark:text-[#fafafa] focus:outline-none break-words resize-none border-none break-all hover:bg-gray-200 dark:hover:bg-[#161616] border boder-[#fafafa] dark:border-[#5557]"
              placeholder="Bạn đang nghĩ gì thế?"
              onChange={onTyping}
              rows={1}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[12px] border-t-2 border-[#f4f4f4] dark:border-[#121212] p-[12px] pt-0">
          <div className="flex items-center gap-[12px]">
            <ImageUploader setInputVal={true} />
          </div>
          <div className="flex items-center gap-[12px] w-full">
            <button
              className={display(inputVal) ? displaytBtnClass : "hidden"}
              onClick={publishBtn}
            >
              <span className="w-full">Đăng</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
