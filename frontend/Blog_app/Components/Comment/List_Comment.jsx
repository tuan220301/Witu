import React, { useEffect, useState } from "react";
import OptionsBtn from "../Buttons/Option_Button";
import { ava } from "../Nav_menu";
import { AvaBtn } from "../Buttons/Ava_Btn";
function ListComment({ cmtParam, listUser }) {
  //variable for limit or full cmt
  const [fullCmt, setFullCmt] = React.useState(false);
  const [nameBtnCmt, setNameBtnCmt] = React.useState("Mở tất cả bình luận");
  const [check, setCheck] = useState(false);
  // const [listUser, setListUser] = useState([]);
  // console.log('re render list comment')
  const avaCss = "w-[38px] h-[38px] rounded-full";
  // console.log('listUser: ' + JSON.stringify(listUser))

  const showFullCmt = (check) => {
    if (check === false) {
      setFullCmt(true);
      setCheck(true);
      setNameBtnCmt("Ẩn bớt bình luận");
    } else {
      setFullCmt(false);
      setCheck(false);
      setNameBtnCmt("Mở tất cả bình luận");
    }
  };
  return (
    <div className="flex flex-col gap-[8px]">
      {cmtParam.length !== 0 ? (
        <div className="flex flex-col gap-[8px]">
          <span
            className="text-sm italic cursor-pointer hover:underline"
            onClick={() => showFullCmt(check)}
          >
            {nameBtnCmt}
          </span>
          <div>
            {(fullCmt ? cmtParam : cmtParam.slice(0, 3)).map((cmt) => {
              cmt.userName = "";
              listUser.forEach((user) => {
                if (cmt.id_user === user.id) {
                  cmt.userName = user.first_name + " " + user.last_name;
                }
              });

              return (
                <div key={cmt.id} className="py-[8px]">
                  <div className="flex gap-[8px]">
                    <AvaBtn className={avaCss} srcImg={ava} />
                    <div className="w-full">
                      <div className="bg-[#f1f2f6] px-[16px] py-[8px] rounded-[12px] w-fit dark:bg-[#121212]">
                        <div className="font-bold text-[13px]" htmlFor="">
                          <a
                            rel="stylesheet"
                            href=""
                            title=""
                            className="font-semibold text-[13px]"
                          >
                            {cmt.userName}
                          </a>
                        </div>
                        <div className="text-[15px] break-words">{cmt.content}</div>
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
              );
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default React.memo(ListComment)
