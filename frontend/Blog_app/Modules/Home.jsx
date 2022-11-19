import React from "react";
import './style.css';


import { Input_post_component } from "../Components/Modal/New_post";

export const Home = ({ data }) => {
    const [blogs, setBlogs] = React.useState([]);
    React.useEffect(() => {
        data.getBlog()
            .then(setBlogs)
            .catch(alert)
    }, [])


    // console.log("blog length: " + blogs.length)
    return (
        <div className="w-full h-full grid grid-cols-5">
            <div>
                feed
            </div>
            <div className="col-span-3">
                <Input_post_component data={data} />

            </div>
            <div>
                stories
            </div>

            {/* <div className="text-[10rem] font-bold text-center">WiTu</div>
            {
                blogs.map(blog => {
                    // console.log("blog: " + JSON.stringify(blog))
                    return (
                        <div key={blog.id} className="lg:w-[90%] lg:ml-[5%] h-[40%] w-[100%] bg-[#262422] rounded-lg text-white mb-3">
                            <div className="w-[100%] pl-[20px] pt-[20px] grid grid-cols-2">
                                <label className="font-bold text-2xl">
                                    {blog.title}
                                </label>
                                <div className="float-right pr-5">
                                    <div className="group relative dropdown float-right">
                                        <TfiMoreAlt className="float-right text-3xl cursor-pointer hover:text-[#D89292] " />
                                        <div className="group-hover:block dropdown-menu absolute hidden h-auto ">

                                            <ul className="bg-white w-[100px] ml-[-55px] rounded-xl text-center">
                                                <li className="py-1"><a className="block text-black font-bold text-base uppercase">Options</a></li>
                                                <li className="py-1"><button className="block w-[100%] text-black text-center uppercase hover:font-bold ">View</button></li>
                                                <li className="py-1"><button className="block w-[100%] text-black text-center uppercase hover:font-bold ">Edit</button></li>
                                                <li className="py-1"><button className="block w-[100%] text-black text-center uppercase hover:font-bold ">Delete</button></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <h3 className="pl-[20px] pt-[10px] font-bold text-2xl">{blog.date}</h3>
                            <p className="pl-[20px] pt-[15px] pb-[15px] text-xl">{blog.content}</p>
                        </div>
                    )
                })
            } */}

        </div>

    )
}