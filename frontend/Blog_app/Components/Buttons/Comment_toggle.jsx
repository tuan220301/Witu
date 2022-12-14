import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { ava } from "../Nav_menu";
import { AvaBtn } from "./Ava_Btn";
import OptionsBtn from "./Option_Button";

// const GetListCmt = ({listControl, fullName}) => {
//     const avaCss = 'w-[50px] h-[50px] rounded-full';
//     const [listCmt, setListCmt] = React.useState();
//     React.useEffect(() => {
//         listControl.getComment()
//             .then(setListCmt)
//             .catch(alert)
//     }, [])
//     return(
//         <div>
//             {
//                 listCmt ? <div className="flex items-stretch">
//                 <AvaBtn className={avaCss} srcImg={ava} />
//                 <div className="grid grid-flow-row px-2 w-full ">
//                     <div className="border-[1px] border-gray-300 rounded-xl p-2">
//                         <div className="">
//                             <label className="font-bold" htmlFor="">{fullName}</label>
//                         </div>
//                         <div className="">
//                             hihi
//                         </div>
//                     </div>
//                     <div className="w-full text-sm">
//                         <label className="p-1 " htmlFor="">Date: 22/02/2022</label>
//                         <div className="float-right px-3">
//                             <button className="p-1 px-2 text-green-400 italic hover:font-bold">Edit</button>
//                             <button className="p-1 px-2 text-red-500 italic hover:font-bold">Delete</button>
//                         </div>
//                     </div>
//                 </div>

//             </div> : <div></div>
//             }
//         </div>
//     )
// }
export const CommentComponents = ({ blog, listControl, wallet }) => {
  const avaCss = "w-[32px] h-[32px] rounded-full";
  const [typing, setTyping] = React.useState("");
  const [listCmt, setListCmt] = React.useState();
  const [userState, setUserState] = React.useState();

  // let listUser = [];
  React.useEffect(() => {
    listControl.get_user().then(setUserState).catch(alert);
    listControl.getComment().then(setListCmt).catch(alert);
  }, []);

  let fullName = "";
  if (userState) {
    let user_clone = userState.filter((user) => user.wallet === wallet);
    fullName = user_clone[0].first_name + " " + user_clone[0].last_name;
    // console.log('user:' + JSON.stringify(fullName));
  }
  const uploadCmt = (blog) => {
    const date = new Date();
    let datePostCmt = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    let content = typing;
    // console.log("datePostCmt: " + datePostCmt)
    // console.log("blog: " + blog.id)
    // let user = listUser.filter(user => user.wallet === wallet);
    // listControl.addComment(content, datePostCmt,blog.id, user[0].id )

    setTimeout(() => {
      React.useEffect(() => {
        listControl.getComment().then(setListCmt).catch(alert);
      }, []);
    }, 1500);
  };

  // console.log('listCmt:' + JSON.stringify(listCmt))
  // if(listCmt){
  //     listCmt.forEach(cmt => {

  //     })
  // }
  const [val, setVal] = useState("");
  const textAreaRef = useRef(null);
  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };
  useEffect(resizeTextArea, [val]);
  const onChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div className="grid grid-flow-row">
      <div className="flex py-3 gap-[8px]">
        <AvaBtn className={avaCss} srcImg={ava} />
        <div className="w-full">
          <textarea
            ref={textAreaRef}
            value={val}
            name="textValue"
            className="text-[15px] w-full rounded-[20px] min-h-[40px] px-[12px] py-[8px] bg-[#f4f4f4] focus:outline-none break-words resize-none border-none break-all"
            placeholder="Write a comment..."
            onChange={onChange}
            rows={1}
          />
          {/* <div className="grid grid-flow-row w-[20%] h-20">
            <button
              className="bg-blue-500 h-9 text-white  rounded-xl hover:bg-blue-600 flex justify-center items-center"
              onClick={() => uploadCmt(blog)}
            >
              <div className="flex items-stretch">
                <label htmlFor="" className="cursor-pointer">
                  Send
                </label>
                <label htmlFor="" className="text-xl cursor-pointer ml-2">
                  <AiOutlineSend />
                </label>
              </div>
            </button>
            <button className="bg-green-400 h-9 text-white  rounded-xl hover:bg-green-500 flex justify-center items-center">
              <div className="flex items-stretch">
                <label htmlFor="" className="cursor-pointer">
                  Image
                </label>
                <label htmlFor="" className="text-2xl cursor-pointer ml-2">
                  <BiImageAdd />
                </label>
              </div>
            </button>
          </div> */}
        </div>
      </div>
      <div className="grid grid-flow-row py-[8px]">
        {listCmt ? (
          <div className="flex gap-[8px] mt-[8px]">
            <AvaBtn className={avaCss} srcImg={ava} />
            <div className="grid grid-flow-row w-full ">
              <div className="bg-[#f4f4f4] px-[16px] py-[8px] rounded-[20px] w-fit">
                <div className="font-bold text-[13px]" htmlFor="">
                  <a rel="stylesheet" href="" title="" className="font-semibold text-[13px]">
                    {fullName}
                  </a>
                </div>
                <div className="text-[15px] break-words">
                  alo tui là win lã á dsds dsa sad sd sads d sd sads dá d ád sddsdsas asddsd sad ads
                  ds d asd asd sad asd sa as dsa dsad sa as das dsa
                </div>
              </div>
              <div className="ml-[16px] flex items-center gap-[10px] text-[12px] mt-[5px] w-fit">
                <div className="">Like</div>
                <div className="">Share</div>
                <div className="">time-date</div>
              </div>
            </div>
            <OptionsBtn className="flex-1" />
          </div>
        ) : (
          <div></div>
        )}
        {/* <GetListCmt listControl={listControl} fullName={fullName}/> */}
      </div>
    </div>
  );
};
