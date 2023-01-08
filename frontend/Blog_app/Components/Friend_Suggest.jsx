import React from "react";
import { AvaBtn } from "./Buttons/Ava_Btn";
import { ava } from "./Nav_menu";
function FriendSuggest({ listUser, accountId }) {

    const addBtn = () => {
        console.log('add btn')
    }
    const deleteBtn = () => {
        console.log('delete btn')
    };
    const avaCss = 'w-[50px] h-[50px] rounded-full';

    // console.log(accountId)
    const listFrend = listUser.filter(user => user.wallet !== accountId)
    return (
        <div className="flex-1 bg-white dark:bg-black shadow-lg m-4 p-2 rounded-lg w-[350px]">
            {
                listFrend.map(user => {
                    return (
                        <div key={user.id} className='flex items-stretch p-[10px]'>
                            <AvaBtn className={avaCss} srcImg={ava} />
                            <div className='p-[5px] ml-[10px]'>
                                <p className='text-xl'>{user.first_name + ' ' + user.last_name}</p>
                                <button className='text-sm rounded-lg text-white p-1 bg-green-300 mr-[15px] hover:bg-green-400' onClick={addBtn}>Add Friend</button>
                                <button className='text-sm rounded-lg text-white p-1 bg-red-300 mr-[15px] hover:bg-red-400' onClick={deleteBtn}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>



    )
}
export default React.memo(FriendSuggest)