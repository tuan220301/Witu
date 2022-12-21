import React, { useEffect, useRef, useState } from "react";

import { ava } from "../Nav_menu";
import { AvaBtn } from "./Ava_Btn";

import { Loader } from "../Loader";
import { ListComment } from "../Comment/List_Comment";

export const CommentComponents = ({ blog, listControl, wallet }) => {
  const avaCss = "w-[32px] h-[32px] rounded-full";
  const [typing, setTyping] = React.useState("");
  const [listCmt, setListCmt] = React.useState();
  const [userState, setUserState] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [version, setVersion] = React.useState(0);

  const cssLoading = 'flex justify-center items-center h-52';

  // let listUser = [];
  const getData = () => {
    listControl.get_user().then(setUserState).catch(alert);
    listControl.getComment().then(setListCmt).catch(alert);
  }
  React.useEffect(getData, [])

  let fullName = "";
  let listUser = [];
  if (userState) {
    let user_clone = userState.filter((user) => user.wallet === wallet);
    fullName = user_clone[0].first_name + " " + user_clone[0].last_name;
    listUser = userState;
  }
  let cmtParam = [];
  if (listCmt) {
    cmtParam = listCmt.filter(cmt => cmt.id_blog === blog.id);
  }
  // console.log(cmtParam);
  const uploadCmt = ({ blog, listControl }) => {
    console.log('listCmt b4: ' + JSON.stringify(listCmt))
    const date = new Date();
    let datePostCmt = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    let content = typing;
    let user = listUser.filter(user => user.wallet === wallet);
    setLoading(true);
    listControl.addComment(content, datePostCmt, blog.id, user[0].id)
    setTimeout(() => {
      setLoading(false);
      window.location.reload();
      // console.log('listCmt af: ' + JSON.stringify(listCmt));
      return
    }, 2000)
  };


  const textAreaRef = useRef(null);
  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };
  useEffect(resizeTextArea, [typing]);
  const onChange = (e) => {
    setTyping(e.target.value);
  };

  return (
    <div className="grid grid-flow-row">
      <div className="flex gap-[8px]">
        <AvaBtn className={avaCss} srcImg={ava} />
        {/* <label htmlFor="">{fullName}</label> */}
        <div className="w-full flex items-stretch">
          <textarea
            ref={textAreaRef}
            value={typing}
            name="textValue"
            className="text-sm w-full rounded-3xl min-h-10 px-[12px] py-2 bg-[#f1f2f6] focus:outline-none break-words resize-none border-none break-all"
            placeholder="Viết bình luận..."
            onChange={onChange}
            rows={1}
          />
          <button className="w-24 h-10 bg-blue-400 rounded-3xl text-xs ml-1 text-white hover:font-bold hover:bg-blue-500"
            onClick={() => uploadCmt({ blog, listControl })}
          >Bình luận</button>
        </div>
      </div>
      {loading ? (
        <Loader open={loading} css={cssLoading} />
      ) : (<ListComment listControl={listControl} cmtParam={cmtParam} listUser={listUser} />)}
    </div>

  );
};
