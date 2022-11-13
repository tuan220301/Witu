import React from "react";
import './style.css';
import { Nav_menu } from "../Components/Nav_menu";
import { Link } from "react-router-dom";
export const AddBlog = ({ wallet }) => {
    const [newBlog, setNewBlog] = React.useState({})
    const handleClick = (event) => {
        // event.preventDefault()
        setNewBlog({
            "title": event.target.title.value,
            "type_blog": event.target.type_blog.value,
            "content": event.target.content.value
        })
    }
    console.log("newBlog: " + JSON.stringify(newBlog))
    const addBlog = (event) => {
        event.preventDefault()


    }
    return (
        <div className="home_container">
            <Nav_menu accountId={wallet} />
            <div className="text-[10rem] font-bold text-center">WiTu</div>
            <h1 className="text-5xl font-bold text-center mb-[1%]">ADD NEW BLOG</h1>
            <form onSubmit={handleClick} className="lg:w-[90%] lg:ml-[5%] w-[100%] h-screen">
                <input name="title" className="bg-[#262422] h-[100px] w-[100%] pl-[20px] text-xl opacity-75 rounded-xl mb-[2%] text-white" type="text" placeholder="Add title" /><br />
                <input name="type_blog" type="text" className="bg-[#262422] h-[100px] w-[100%] pl-[20px] text-xl opacity-75 rounded-xl mb-[2%] text-white" placeholder="Type Blog" /><br />
                <textarea name="content" type="text" className="bg-[#262422] w-[100%] h-[650px] pl-[20px] pt-[10px] text-xl opacity-75 rounded-xl mb-[2%] text-white" placeholder="Content" /><br />
                <div className="w-[100%] grid grid-cols-2 pb-[1rem]">
                    <div className="w-[100%] pr-[10px]">
                        <button type="submit" className="float-right bg-[#262422] w-[250px] rounded-xl h-[70px] text-xl text-white hover:font-bold hover:text-[#D89292]">
                            Save
                        </button>
                    </div>
                    <div className="w-[100%] pl-[10px] mt-[20px]">
                        <Link to="/" className="bg-white pl-[89px] pt-[24px] pr-[89px] pb-[24px] rounded-xl text-black text-xl hover:font-bold hover:text-[#D89292]">Cancle</Link>
                    </div>
                </div>
            </form>

        </div>
    )
}