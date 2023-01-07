import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
export const DeleteBlog = ({ blog, hide, listControl }) => {
    let id_blog = null;
    // console.log(blog.blog)
    blog.forEach(item => {
        id_blog = item.blog.id
    });
    return (
        <div className="gird grid-flow-row">
            <div className="text-xl p-3">
                <p>Bài viết sẽ không thể khôi phục lại.</p>
                <p>Bạn muốn tiếp tục muốn xóa ?</p>
            </div>
            <div className="border-t-2 border-gray-500 p-3 mt-2 grid grid-flow-col">

                <div className="flex justify-center items-center text-green-400 hover:font-bold">
                    <button className="" onClick={hide}>
                        <div className="flex items-stretch text-center w-full">
                            <div className="text-2xl mr-1">
                                <MdOutlineCancel />
                            </div>
                            <label className="text-xl cursor-pointer">Hủy</label>
                        </div>
                    </button>
                </div>
                <div className="flex justify-center items-center text-red-400 hover:font-bold">
                    <button className="" onClick={() => {
                        // console.log((id_blog))
                        listControl.deleteBlog(id_blog);
                        setTimeout(() => {
                            window.location.reload();
                        }, 2000)
                    }}>
                        <div className="flex items-stretch text-center w-full">
                            <div className="text-2xl mr-1">
                                <AiOutlineDelete />
                            </div>
                            <label className="text-xl cursor-pointer">Xóa</label>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}