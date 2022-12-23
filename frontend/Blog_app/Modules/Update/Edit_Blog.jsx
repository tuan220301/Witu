import React, { useState } from "react";
import { FiSave } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

export const EditBlog = ({ blog, hide, listControl }) => {
    // console.log('blog: ' + JSON.stringify(blog))
    let content = '';
    // console.log(listControl)
    blog.forEach(ele => {
        content = ele.blog.content;
    });
    const [val, setVal] = useState(content);
    const handleChangeInput = (e) => {
        e.preventDefault();
        setVal(e.target.value);
    }
    // const saveBtn = () => {
    //     listControl.updateBllog()
    //     window.location.reload();
    // }
    return (
        <div className="w-full h-full grid grid-flow-row">
            {
                blog.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="text-xl p-3">
                                <div className="">
                                    <div className="w-full text-center">
                                        <div className="flex items-stretch w-full">
                                            <label className="w-full font-bold">{item.user_name}</label>
                                        </div>
                                    </div>
                                    <div className="flex items-stretch">
                                        <label className="font-bold mr-[10px]">Date:</label>
                                        <label>{item.blog.date}</label>
                                        {/* <label>{blog.date}</label> */}
                                    </div>
                                </div>
                                <div className="pt-[5px]">
                                    <textarea type="text"
                                        value={val}
                                        onChange={handleChangeInput}
                                        className="w-full h-auto min-h-[250px] p-1"
                                    />
                                </div>
                            </div>
                            <div className="border-t-2 border-gray-500 p-3 mt-2 grid grid-flow-col">
                                <div className="flex justify-center items-center text-red-400 hover:font-bold">
                                    <button className="" onClick={hide}>
                                        <div className="flex items-stretch text-center w-full">
                                            <div className="text-2xl mr-1">
                                                <MdOutlineCancel />
                                            </div>
                                            <label className="text-xl cursor-pointer">Cancel</label>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex justify-center items-center text-green-400 hover:font-bold">
                                    <button className="" onClick={() => {
                                        // console.log('item.blog.id: ' + item.blog.id)
                                        // console.log('val: ' + val)
                                        // console.log('item.blog.date: ' + item.blog.date)
                                        // console.log("item.blog.id_user: " +item.blog.id_user)
                                        listControl.updateBllog(item.blog.id, val, item.blog.date, item.blog.id_user)
                                        setTimeout(() => {
                                            window.location.reload();
                                        }, 1000)
                                    }}>
                                        <div className="flex items-stretch text-center w-full">
                                            <div className="text-2xl mr-1">
                                                <FiSave />
                                            </div>
                                            <label className="text-xl cursor-pointer">Save</label>
                                        </div>
                                    </button>
                                </div>

                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
}