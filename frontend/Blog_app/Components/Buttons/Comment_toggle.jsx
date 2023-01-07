import React, { useEffect, useRef, useState } from "react";

import { ava } from "../Nav_menu";
import { AvaBtn } from "./Ava_Btn";

import { Loader } from "../Loader";
import ListComment from "../Comment/List_Comment";

function CommentComponents({ blog, listControl, users, wallet }) {
  const avaCss = "w-[40px] h-[40px] rounded-full";
  const [typing, setTyping] = React.useState("");
  const [listCmt, setListCmt] = React.useState();

  const [loading, setLoading] = React.useState(false);
  const [updateCmt, setUpdateCmt] = React.useState([]);

  const cssLoading = "flex justify-center items-center h-52";
  React.useEffect(() => {
    listControl.getComment().then(setListCmt).catch(alert);
  }, [updateCmt]);

  // console.log('re render comment toggle')
  let listUser = [];
  if (users) {
    let user_clone = users.filter((user) => user.wallet === wallet);
    fullName = user_clone[0].first_name + " " + user_clone[0].last_name;
    listUser = users;
  }
  let cmtParam = [];
  if (listCmt) {
    cmtParam = listCmt.filter((cmt) => cmt.id_blog === blog.id);
  }
  // console.log(cmtParam);
  const date = new Date();
  const datePostCmt = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  const content = typing;
  const user = listUser.filter((user) => user.wallet === wallet);
  // console.log('re render list comment')
  const uploadCmt = (blog) => {
    //console.log('date: ' + datePostCmt + 'content: ' + content + 'user: ' + user + 'blogId: ' + blog.id) 
    listControl.addComment(content, datePostCmt, blog.id, user[0].id);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUpdateCmt(listCmt);
      setTyping("");
      return;
    }, 3000);
  };

  const textAreaRef = useRef(null);
  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };
  useEffect(resizeTextArea, [typing]);
  const onChange = (e) => {
    e.preventDefault();
    setTyping(e.target.value);
  };
  //console.log ('re render')
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex gap-[8px]">
        <AvaBtn className={avaCss} srcImg={ava} />
        {/* <label htmlFor="">{fullName}</label> */}
        <div className="w-full flex justify-between items-stretch gap-[8px]">
          <textarea
            ref={textAreaRef}
            value={typing}
            name="textValue"
            className="text-base font-thin w-full rounded-[20px] px-[12px] py-[8px] bg-[#f1f2f6] dark:bg-[#121212] dark:text-[#fafafa] focus:outline-none break-words resize-none border-none break-all hover:bg-gray-200 dark:hover:bg-[#161616] border border-[#5557]"
            placeholder="Viết bình luận..."
            onChange={onChange}
            rows={1}
          />
          <button
            className="flex items-center px-[20px] text-center h-[40px] bg-[#5596e6] rounded-full text-white hover:bg-blue-400 dark:bg-[#121212] dark:hover:bg-[#5557] dark:text-[#fafafa] dark:border dark:border-[#5557]"
            onClick={() => uploadCmt(blog)}
          >
            <span className="w-full">Gửi</span>
          </button>
        </div>
      </div>
      {loading ? (
        <Loader open={loading} css={cssLoading} />
      ) : (
        <ListComment listControl={listControl} cmtParam={cmtParam} listUser={listUser} />
      )}
    </div>
  );
};
export default React.memo(CommentComponents);