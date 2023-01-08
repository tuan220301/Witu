import { Avatar } from "flowbite-react";
import React, { useState } from "react";
import { FiSave } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { ava } from "../../Components/Nav_menu";

export const EditBlog = ({ blog, hide, listControl }) => {
  // console.log('blog: ' + JSON.stringify(blog))
  let content = "";
  // console.log(listControl)
  blog.forEach((ele) => {
    content = ele.blog.content;
  });
  const [val, setVal] = useState(content);
  const handleChangeInput = (e) => {
    e.preventDefault();
    setVal(e.target.value);
  };
  // const saveBtn = () => {
  //     listControl.updateBllog()
  //     window.location.reload();
  // }
  return (
    <div className="w-full h-full">
      {blog.map((item, index) => {
        return (
          <div key={index}>
            <div className="text-xl p-[20px] flex flex-col gap-[8px]">
              <div className="flex items-center gap-[8px]">
                <img src={ava} alt="" className="w-[50px] h-[50px] rounded-full" />
                <div className="flex flex-col w-full">
                  <label className="font-bold">{item.user_name}</label>
                  <label className="text-base">{item.blog.date}</label>
                </div>
              </div>
              <textarea
                type="text"
                value={val}
                onChange={handleChangeInput}
                className="w-full h-auto min-h-[250px] p-[10px] text-xl font-thin rounded-[20px] px-[12px] py-[8px] bg-[#f1f2f6] dark:bg-[#121212] dark:text-[#fafafa] focus:outline-none break-words resize-none border-none break-all hover:bg-gray-200 dark:hover:bg-[#161616] border border-[#fafafa] dark:border-[#5557] "
              />
            </div>
            <div className="border-t-2 border-[#f4f4f4] dark:border-[#121212] flex p-[10px] items-center justify-around">
              <button
                className="w-[200px] flex justify-center items-center text-red-400 p-[10px] rounded-xl hover:bg-[#5557]"
                onClick={hide}
              >
                <div className="text-2xl mr-1">
                  <MdOutlineCancel />
                </div>
                <label className="text-xl cursor-pointer">Cancel</label>
              </button>
              <button
                className="w-[200px] flex justify-center items-center text-green-400 p-[10px] rounded-xl hover:bg-[#5557]"
                onClick={() => {
                  // console.log('item.blog.id: ' + item.blog.id)
                  // console.log('val: ' + val)
                  // console.log('item.blog.date: ' + item.blog.date)
                  // console.log("item.blog.id_user: " +item.blog.id_user)
                  listControl.updateBllog(item.blog.id, val, item.blog.date, item.blog.id_user, "");
                  setTimeout(() => {
                    window.location.reload();
                  }, 2000);
                }}
              >
                <div className="text-2xl mr-1">
                  <FiSave />
                </div>
                <label className="text-xl cursor-pointer">Save</label>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
