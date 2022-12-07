import React from "react";
import './style.css';


import { Input_post_component } from "../Components/Post_input_component";
import { ListBlog } from "../Components/List_Blog";
import { FriendSuggest } from "../Components/Friend_Suggest";
import { FriendRequest } from "../Components/Friend_Request";
import { UserSummary } from "../Components/User_Summary";

export const Home = ({ listUser, listControl ,accountId}) => {
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

    ];
    // listUser.forEach(user => {
        //     console.log('user: ' + JSON.stringify(user))
        // });
        
    const userIsLogin = listUser.filter(item => item.wallet === accountId)
    // console.log('userIsLogin: ' + JSON.stringify(userIsLogin))
    return (
        <div className="w-full h-full grid grid-cols-10">
            <div className='col-span-3 hidden xl:block'>
                <UserSummary user={userIsLogin} />
            </div>
            <div className='col-span-10 xl:col-span-4'>
                <Input_post_component listUser={listUser} listControl={listControl} accountId={accountId} />
                <ListBlog listUser={listUser} listControl={listControl} accountId={accountId} />
            </div>
            <div className='col-span-3 hidden xl:block'>

                <div className="grid grid-flow-row ">
                    <div className="w-[80%] p-[20px] bg-white rounded-xl m-5">
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
                    <div className="w-[80%] p-[20px] bg-white rounded-xl m-5">
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

            
        </div>

    )
}