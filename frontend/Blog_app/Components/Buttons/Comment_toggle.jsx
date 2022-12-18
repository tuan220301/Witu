import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { Loader } from "../Loader";
import { ava } from "../Nav_menu";
import { AvaBtn } from "./Ava_Btn";
import OptionsBtn from "./Option_Button";

export const CommentComponents = ({ blog, listControl, wallet }) => {
  const avaCss = "w-[32px] h-[32px] rounded-full";
  const [typing, setTyping] = React.useState("");
  const [listCmt, setListCmt] = React.useState();
  const [userState, setUserState] = React.useState();
  const [loading, setLoading] = React.useState(false);
  //variable for limit or full cmt 
  const [fullCmt, setFullCmt] = React.useState(false);  
  const [nameBtnCmt, setNameBtnCmt] = React.useState('Mở tất cả bình luận');
  const [check, setCheck] = useState(false);
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
  const uploadCmt = ({blog}) => {
    const date = new Date();
    let datePostCmt = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    let content = typing;
    // console.log("content: " + content)
    // console.log("blog: " + JSON.stringify(blog))
    // let user = listUser.filter(user => user.wallet === wallet);
    setLoading(true);
    console.log('listCmt b4: ' + JSON.stringify(listCmt.length))
    setListCmt([{"id":1,"content":"hihi","date":"22/02/2022","id_blog":1,"id_user":3}]);
    setTimeout(()=>{
      setLoading(false);
      console.log('listCmt af: ' + JSON.stringify(listCmt.length))
      
    },2000)
    // listControl.addComment(content, datePostCmt,blog.id, user[0].id )

    // setTimeout(() => {
    //   React.useEffect(() => {
    //     listControl.getComment().then(setListCmt).catch(alert);
    //   }, []);
    // }, 1500);
  };
  function ForceUpdate(listCmt){
    const [updateCmt, setUpdateCmt] = useState(listCmt);
    let newCmt = [];
    newCmt.push(listCmt);
    setUpdateCmt(newCmt)
    return updateCmt;
  }

  
  const textAreaRef = useRef(null);
  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };
  useEffect(resizeTextArea, [typing]);
  const onChange = (e) => {
    setTyping(e.target.value);
  };
  const cssLoading = 'flex justify-center items-center h-52';

  const showFullCmt = (check)=>{
    if(check === false){
      setFullCmt(true);
      setCheck(true);
      setNameBtnCmt('Ẩn bớt bình luận')
    }
    else {
      setFullCmt(false);
      setCheck(false);
      setNameBtnCmt('Mở tất cả bình luận')
    }
  }
  
  
  return (
    <div className="grid grid-flow-row">
      <div className="flex gap-[8px]">
        <AvaBtn className={avaCss} srcImg={ava} />
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
          onClick={() => uploadCmt({blog})}
          >Bình luận</button>
          
        </div>
      </div>
      <button className="text-sm italic hover:font-bold p-2" 
        onClick={() => showFullCmt(check)}>{nameBtnCmt}</button>  
      <div>
        {loading ? (
          <Loader open={loading} css={cssLoading}/>
        ) : (
          <div>
          {listCmt ? (
            <div>
              {(fullCmt ? listCmt : listCmt.slice(0,2)).map(cmt => {
                return(
                  <div key={cmt.id} className="py-[8px]">
                    <div className="flex gap-[8px]">
                      <AvaBtn className={avaCss} srcImg={ava} />
                      <div className="w-full">
                        <div className="bg-[#f1f2f6] px-[16px] py-[8px] rounded-[20px] w-fit">
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
                      
                  </div>
                )
              })}
             
            </div>
          ) : (
            <div></div>
          )}
           
          {/* <GetListCmt listControl={listControl} fullName={fullName}/> */}
        </div>
        )}
      </div>
      
    </div>
  );
};
