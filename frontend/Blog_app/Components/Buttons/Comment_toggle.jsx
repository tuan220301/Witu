import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { ava } from "../Nav_menu";
import { AvaBtn } from "./Ava_Btn";
// const GetListCmt = ({listControl, fullName}) => {
//     const avaCss = 'w-[50px] h-[50px] rounded-full';
//     const [listCmt, setListCmt] = React.useState();
//     React.useEffect(() => {
//         listControl.getComment()
//             .then(setListCmt)
//             .catch(alert)
//     }, [])
//     return(
//         <div>
//             {
//                 listCmt ? <div className="flex items-stretch">
//                 <AvaBtn className={avaCss} srcImg={ava} />
//                 <div className="grid grid-flow-row px-2 w-full ">
//                     <div className="border-[1px] border-gray-300 rounded-xl p-2">
//                         <div className="">
//                             <label className="font-bold" htmlFor="">{fullName}</label>
//                         </div>
//                         <div className="">
//                             hihi
//                         </div>
//                     </div>
//                     <div className="w-full text-sm">
//                         <label className="p-1 " htmlFor="">Date: 22/02/2022</label>
//                         <div className="float-right px-3">
//                             <button className="p-1 px-2 text-green-400 italic hover:font-bold">Edit</button>
//                             <button className="p-1 px-2 text-red-500 italic hover:font-bold">Delete</button>
//                         </div>
//                     </div>
//                 </div>
                
//             </div> : <div></div>
//             } 
//         </div>
//     )
// }
export const CommentComponents = ({ blog, listControl, wallet}) => {
    const avaCss = 'w-[50px] h-[50px] rounded-full';
    //state
    const [typing, setTyping] = React.useState('');
    const [listCmt, setListCmt] = React.useState();
    const [userState, setUserState] = React.useState();
    // const []

    const OnTyping = (e) => {
        e.preventDefault();
        setTyping(e.target.value)
    }
   
    //call data from contract
    // let user = [];
    // user.push(userState);
    // console.log(wallet)
   
    // let listUser = [];
    React.useEffect(() => { 
        listControl.get_user()
        .then(setUserState)
        .catch(alert)
        listControl.getComment()
        .then(setListCmt)
        .catch(alert)

        // setTimeout(() => {
            // React.useEffect(() => {
            
            
        // }, 2000)
    }, [])
    
    let fullName = '';
    if(userState){
        let user_clone = userState.filter(user => user.wallet === wallet)
        fullName = user_clone[0].first_name + ' ' + user_clone[0].last_name;
        // console.log('user:' + JSON.stringify(fullName));
    }
    const uploadCmt = (blog) => {
        const date = new Date();
        let datePostCmt = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        let content = typing;
        // console.log("datePostCmt: " + datePostCmt)
        // console.log("blog: " + blog.id)
        // let user = listUser.filter(user => user.wallet === wallet);
        // listControl.addComment(content, datePostCmt,blog.id, user[0].id )
        
        setTimeout(() => {
            React.useEffect(() => {
                listControl.getComment()
                .then(setListCmt)
                .catch(alert)
            }, [])
        }, 1500)
    };
    
            // console.log('listCmt:' + JSON.stringify(listCmt))
    // if(listCmt){
    //     listCmt.forEach(cmt => {

    //     })
    // }
  return (
    <div className="grid grid-flow-row">
        
        <div className="flex items-stretch border-b-2 border-gray-100 py-3">
            <AvaBtn className={avaCss} srcImg={ava} />
            <div className="w-full px-2">
                <label className="font-bold" htmlFor="">{fullName}</label>
                <div className="flex items-stretch ">

                    <textarea className="w-[80%] border-2 border-gray-500 rounded-xl max-h-[300px] min-h-[80px]  mr-2 p-3" onChange={OnTyping}></textarea>
                    <div className="grid grid-flow-row w-[20%] h-20">
                        <button
                            className="bg-blue-500 h-9 text-white  rounded-xl hover:bg-blue-600 flex justify-center items-center"
                            onClick={() => uploadCmt(blog)}
                        >
                            <div className="flex items-stretch">
                            <label htmlFor="" className="cursor-pointer">
                                Send
                            </label>
                            <label htmlFor="" className="text-xl cursor-pointer ml-2">
                                <AiOutlineSend />
                            </label>
                            </div>
                        </button>
                        <button className="bg-green-400 h-9 text-white  rounded-xl hover:bg-green-500 flex justify-center items-center">
                            <div className="flex items-stretch">
                            <label htmlFor="" className="cursor-pointer">
                                Image
                            </label>
                            <label htmlFor="" className="text-2xl cursor-pointer ml-2">
                                <BiImageAdd />
                            </label>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-flow-row py-3">
            {
                listCmt ? <div className="flex items-stretch">
                <AvaBtn className={avaCss} srcImg={ava} />
                <div className="grid grid-flow-row px-2 w-full ">
                    <div className="border-[1px] border-gray-300 rounded-xl p-2">
                        <div className="">
                            <label className="font-bold" htmlFor="">{fullName}</label>
                        </div>
                        <div className="">
                            hihi
                        </div>
                    </div>
                    <div className="w-full text-sm">
                        <label className="p-1 " htmlFor="">Date: 22/02/2022</label>
                        <div className="float-right px-3">
                            <button className="p-1 px-2 text-green-400 italic hover:font-bold">Edit</button>
                            <button className="p-1 px-2 text-red-500 italic hover:font-bold">Delete</button>
                        </div>
                    </div>
                </div>
                
            </div> : <div></div>
            }
            {/* <GetListCmt listControl={listControl} fullName={fullName}/> */}
        </div>
    </div>
  );
};
