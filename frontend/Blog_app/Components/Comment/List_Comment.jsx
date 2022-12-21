import React, { useEffect, useRef, useState } from "react";
import OptionsBtn from "../Buttons/Option_Button";
import { ava } from "../Nav_menu";
import { AvaBtn } from "../Buttons/Ava_Btn";
export const ListComment = ({ listControl, cmtParam, listUser }) => {
  //variable for limit or full cmt 
  const [fullCmt, setFullCmt] = React.useState(false);
  const [nameBtnCmt, setNameBtnCmt] = React.useState('Mở tất cả bình luận');
  const [check, setCheck] = useState(false);
  // const [listUser, setListUser] = useState([]);

  const avaCss = "w-[32px] h-[32px] rounded-full";
  let fullName = "";
  // console.log('listUser: ' + JSON.stringify(listUser))

  const showFullCmt = (check) => {
    if (check === false) {
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
    <div>
      {
        cmtParam.length !== 0 ? (
          <div>
            <button className="text-sm italic hover:font-bold p-2"
              onClick={() => showFullCmt(check)}>{nameBtnCmt}</button>
            <div>
              {
                (fullCmt ? cmtParam : cmtParam.slice(0, 3)).map(cmt => {
                  cmt.userName = '';
                  listUser.forEach(user => {
                    if (cmt.id_user === user.id) { cmt.userName = user.first_name + ' ' + user.last_name }
                  })

                  return (
                    <div key={cmt.id} className="py-[8px]">
                      <div className="flex gap-[8px]">
                        <AvaBtn className={avaCss} srcImg={ava} />
                        <div className="w-full">
                          <div className="bg-[#f1f2f6] px-[16px] py-[8px] rounded-[20px] w-fit">
                            <div className="font-bold text-[13px]" htmlFor="">
                              <a rel="stylesheet" href="" title="" className="font-semibold text-[13px]">
                                {cmt.userName}
                              </a>
                            </div>
                            <div className="text-[15px] break-words">
                              {cmt.content}
                            </div>
                          </div>
                          <div className="ml-[16px] flex items-center gap-[10px] text-[12px] mt-[5px] w-fit">
                            <div className="">Like</div>
                            <div className="">Share</div>
                            <div className="">{cmt.date}</div>
                          </div>
                        </div>
                        <OptionsBtn className="flex-1" />
                      </div>

                    </div>
                  )
                })
              }
            </div>
          </div>

        )
          : <div></div>
      }

    </div>
  )
}