import React from "react";
import './style.css';


import { Input_post_component } from "../Components/Post_input_component";
import { ListBlog } from "../Components/List_Blog";
import { FriendSuggest } from "../Components/Friend_Suggest";
import { FriendRequest } from "../Components/Friend_Request";
import { UserSummary } from "../Components/User_Summary";

export const Home = ({ user, listControl }) => {
    // const [blogs, setBlogs] = React.useState([]);
    // React.useEffect(() => {
    //     data.getBlog()
    //         .then(setBlogs)
    //         .catch(alert)
    // }, [])



    //them field ava neu sau nay trong BE khong co
    const listFriendSuggest = [
        { id: 1, name: 'Nguyen Minh Tuan', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDrvKyt1Je7fm-ENkI9exhhqnzD4MfBrhAHw&usqp=CAU' },
        { id: 2, name: 'Nguyen Minh Huy', ava: 'https://top10binhphuoc.vn/wp-content/uploads/2022/10/avatar-gau-cute-1.jpg' },
        { id: 3, name: 'Nguyen Minh Hung', ava: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg' },
        { id: 4, name: 'Nguyen Minh Tung', ava: 'https://www.studytienganh.vn/upload/2022/05/112275.jpg' },
        { id: 5, name: 'Nguyen Minh Win', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bQrvBedpNY8BxSWs6AFNBcbXaCVAloH1Xw&usqp=CAU' }

    ];
    const listFriendRequest = [
        { id: 1, name: 'Nguyen Minh Tuan', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDrvKyt1Je7fm-ENkI9exhhqnzD4MfBrhAHw&usqp=CAU' },
        { id: 2, name: 'Nguyen Minh Huy', ava: 'https://top10binhphuoc.vn/wp-content/uploads/2022/10/avatar-gau-cute-1.jpg' },
        { id: 3, name: 'Nguyen Minh Hung', ava: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg' },
        { id: 4, name: 'Nguyen Minh Tung', ava: 'https://www.studytienganh.vn/upload/2022/05/112275.jpg' },
        { id: 5, name: 'Nguyen Minh Win', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bQrvBedpNY8BxSWs6AFNBcbXaCVAloH1Xw&usqp=CAU' }

    ]
    return (
        <div className="w-full h-full grid grid-cols-10">
            <div className='col-span-3 hidden xl:block'>
                <UserSummary user={user} />
            </div>
            <div className='col-span-10 xl:col-span-4'>
                <Input_post_component user={user} listControl={listControl} />
                <ListBlog user={user} listControl={listControl} />
            </div>
            <div className='col-span-3 hidden xl:block'>

                <div className="grid grid-flow-row ">
                    <div className="w-[80%] p-[20px] bg-white rounded-xl m-[10px]">
                        <label className="text-xl border-b-2 border-[#f4f4f4]">Friend Suggest</label>
                        {
                            listFriendSuggest.map(item => {
                                // console.log('item: ' + JSON.stringify(item))
                                return (
                                    <div key={item.id}>
                                        <FriendSuggest listFriend={item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="w-[80%] p-[20px] bg-white rounded-xl m-[10px]">
                        <label className="text-xl border-b-2 border-[#f4f4f4]">Friend Request</label>
                        {
                            listFriendRequest.map(item => {
                                // console.log('item: ' + JSON.stringify(item))
                                return (
                                    <div key={item.id}>
                                        <FriendRequest listFriendRequest={item} />
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
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