import React from "react";
import { AvaBtn } from "./Ava_Btn";
import { ava } from "./Nav_menu";
export const FriendRequest = (listFriendRequest) => {
    // console.log('listFriend: ' + JSON.stringify(listFriend))
    const list = listFriendRequest.listFriendRequest;
    const avaCss = 'w-[50px] h-[50px] rounded-full';
    const accept = () => {
        console.log('accept btn')
    }
    const cancle = () => {
        console.log('cancle btn')
    }
    return (

        <div key={list.id} className='flex items-stretch p-[10px]'>
            <AvaBtn className={avaCss} srcImg={list.ava} />
            <div className='p-[5px] ml-[10px]'>
                <p className='text-xl'>{list.name}</p>
                <button className='text-xl text-green-400 mr-[15px] hover:font-bold' onClick={accept}>Accept</button>
                <button className='text-xl text-red-500 hover:font-bold' onClick={cancle}>Cancle</button>
            </div>
        </div>


    )
}