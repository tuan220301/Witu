import React from "react";
import { AvaBtn } from "./Ava_Btn";
import { ava } from "./Nav_menu";
export const FriendSuggest = (listFriend) => {
    // console.log('listFriend: ' + JSON.stringify(listFriend))
    const list = listFriend.listFriend;
    const addBtn = () => {
        console.log('add btn')
    }
    const deleteBtn = () => {
        console.log('delete btn')
    };
    const avaCss = 'w-[50px] h-[50px] rounded-full';
    return (

        <div key={list.id} className='flex items-stretch p-[10px]'>
            <AvaBtn className={avaCss} srcImg={list.ava} />
            <div className='p-[5px] ml-[10px]'>
                <p className='text-xl'>{list.name}</p>
                <button className='text-xl text-green-400 mr-[15px] hover:font-bold' onClick={addBtn}>Add Friend</button>
                <button className='text-xl text-red-500 hover:font-bold' onClick={deleteBtn}>Delete</button>
            </div>
        </div>


    )
}