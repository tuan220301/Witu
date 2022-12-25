import React, { useState, useEffect } from "react";
import { AvaBtn } from "./Buttons/Ava_Btn";
import { ava } from "./Nav_menu";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import ToggleOpt from "./Buttons/Toggle_Options";
import OptionsBtn from "./Buttons/Option_Button";
import { Loader } from "./Loader";
import { CommentComponents } from "./Buttons/Comment_toggle";
export const ListBlog = ({ listControl, accountId, blogs, users }) => {
  let decreaseListBlog = [];
  const [loading, setLoading] = useState(false);
  const cssLoading = "flex justify-center items-center h-screen";
  for (let i = blogs.length - 1; i >= 0; i--) {
    if (blogs) {
      decreaseListBlog.push(blogs[i]);
    }
  }
  // console.log('re render blog list')
  const likeBtn = () => {
    console.log("like btn");
  };
  const comment = () => {
    console.log("comment btn");
  };
  const share = () => {
    console.log("share btn");
  };
  const avaCss = "w-[40px] h-[40px] rounded-full";
  return (
    <div>
      {loading ? (
        <Loader open={loading} css={cssLoading} />
      ) : (
        <div className="flex justify-center items-center mb-5">
          <div className="flex flex-col gap-[12px] w-full h-[auto]">
            {decreaseListBlog.map((item) => {
              item.user_name = "";
              item.wallet = "";
              users.map((user) => {
                wallet = "";
                user.check = false;
                // check user is author of blog ? if true show optionBtn and show name of user on blog
                if (user.id === item.id_user) {
                  item.user_name = user.first_name + " " + user.last_name;
                  item.wallet = user.wallet;
                }
              });
              return (
                <div
                  key={item.id}
                  className="flex flex-col p-[12px] w-full h-[auto] bg-white dark:bg-black dark:text-[#fafafa] rounded-2xl shadow overflow-hidden border dark:border-[#5557] border-[#fafafa]"
                >
                  <div className="flex">
                    <div className="mr-[8px]">
                      <AvaBtn className={avaCss} srcImg={ava} />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-[15px] font-semibold">{item.user_name}</p>
                      <p className="text-[13px]">{item.date}</p>
                    </div>
                    <div className="ml-auto flex justify-center">
                      {/* use id_user to check blog of user */}
                      <div className={item.wallet === accountId ? "block" : "hidden"}>
                        <OptionsBtn
                          listControl={listControl}
                          userName={item.user_name}
                          blog={item}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-[auto] w-full text-xl mt-[10px] mb-2">{item.content}</div>
                  <div className="border-t-2 border-b-2 border-[#f4f4f4] dark:border-[#121212] grid grid-cols-3 gap-[10px] p-[5px]">
                    <div className="flex items-center cursor-pointer justify-center hover:bg-gray-100 rounded-sm dark:hover:bg-[#5557]">
                      <label className="mr-[5px] text-base" htmlFor="like">
                        <AiOutlineLike />
                      </label>
                      <input
                        type="button"
                        className="cursor-pointer text-lg"
                        id="like"
                        onClick={likeBtn}
                        value={"Like"}
                      />
                    </div>
                    <div className="flex items-center cursor-pointer justify-center hover:bg-gray-100 rounded-sm dark:hover:bg-[#5557]">
                      <label className="mr-[5px] text-base" htmlFor="cmt">
                        <AiOutlineComment />
                      </label>
                      <input
                        type="button"
                        className="cursor-pointer text-lg"
                        id="cmt"
                        onClick={comment}
                        value={"Comment"}
                      />
                    </div>
                    <div className="flex items-center cursor-pointer justify-center hover:bg-gray-100 rounded-sm dark:hover:bg-[#5557]">
                      <label className="mr-[5px] text-base" htmlFor="share">
                        <AiOutlineShareAlt />
                      </label>
                      <input
                        type="button"
                        className="cursor-pointer text-lg"
                        id="share"
                        onClick={share}
                        value={"Share"}
                      />
                    </div>
                  </div>
                  <div className="p-2">
                    <CommentComponents listControl={listControl} blog={item} wallet={accountId} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
