import React from 'react';
import { AvaBtn } from './Ava_Btn';
import { ava } from './Nav_menu';
import { SlOptionsVertical } from 'react-icons/sl';
import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai';
import ToggleOpt from './Toggle_Options';
export const ListBlog = ({ user, listControl }) => {
    const [blogs, setBlogs] = React.useState([]);
    React.useEffect(() => {
        listControl.getBlog()
            .then(setBlogs)
            .catch(alert)
    }, [])
    let nameUser = '';
    //get name of user
    user.forEach(item => {
        // console.log('item: ' + JSON.stringify(item));
        nameUser = item.first_name + ' ' + item.last_name
    });
    const listOptions = ['Edit', 'Delete'];
    const likeBtn = () => {
        console.log('like btn');
    }
    const comment = () => {
        console.log('comment btn');
    }
    const share = () => {
        console.log('share btn');
    }
    const avaCss = 'w-[50px] h-[50px] rounded-full';
    return (
        <div className='flex justify-center items-center mt-[10px]'>
            <div className='grid grid-flow-row w-[750px] h-[auto]'>
                {
                    blogs.map(item => {
                        return (
                            <div key={item.id} className='w-full p-[15px] bg-white mt-[10px] rounded-2xl'>
                                <div className='flex items-stretch'>
                                    <div className='w-[10%]'><AvaBtn className={avaCss} srcImg={ava} /></div>
                                    <div className='gird gird-rows-2 w-[80%]'>
                                        <p>{nameUser}</p>
                                        <p>{item.date}</p>
                                    </div>
                                    <div className='w-[10%] text-xl'>
                                        <div className='float-right'>
                                            <ToggleOpt listOpt={listOptions} />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-[auto] w-full text-xl pt-[10px] mb-2'>
                                    {item.content}
                                </div>
                                <div className='h-50px border-t-2 border-[#f4f4f4] pt-3 grid grid-cols-3 '>
                                    <div className='flex justify-center items-center'>
                                        <div className='flex items-stretch text-xl'>
                                            <label className='mr-[5px]' htmlFor="like"><AiOutlineLike /></label>
                                            <input type="button" className='cursor-pointer' id='like' onClick={likeBtn} value={'Like'} />
                                        </div>
                                    </div>

                                    <div className='flex justify-center items-center'>
                                        <div className='flex items-stretch text-xl cursor-pointer'>
                                            <label className='mr-[5px]' htmlFor="cmt"><AiOutlineComment /></label>
                                            <input type="button" className='cursor-pointer' id='cmt' onClick={comment} value={'Comment'} />
                                        </div>
                                    </div>

                                    <div className='flex justify-center items-center'>
                                        <div className='flex items-stretch text-xl cursor-pointer'>
                                            <label className='mr-[5px]' htmlFor="share"><AiOutlineShareAlt /></label>
                                            <input type="button" className='cursor-pointer' id='share' onClick={share} value={'Share'} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    );
}