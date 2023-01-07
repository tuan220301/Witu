import React from "react";
import { AvaBtn } from "./Buttons/Ava_Btn";
import { ava } from "./Nav_menu";
import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import OptionsBtn from "./Buttons/Option_Button";
import { CommentComponents } from "./Buttons/Comment_toggle";
function ListBlog ({ listControl, accountId, blogs, users }){
  //function sort dynamic
  function compareValues(key, order = 'asc') {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {comparison = 1;} 
      else if (varA < varB) {comparison = -1;}
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  } 
  //sort blog with id descrease
  blogs.sort(compareValues('id', 'desc')) 
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
      <div className="flex justify-center items-center mb-5">
          <div className="flex flex-col gap-[12px] w-full h-[auto]">
            {blogs.map((item) => {
              item.user_name = "";
              item.wallet = "";
              users.map((user) => {
                wallet = "";
                user.check = false;
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
    </div>
  );
};
export default React.memo(ListBlog)
