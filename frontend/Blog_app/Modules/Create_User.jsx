import React, { useState, useEffect } from "react";
import { FaUserCog } from "react-icons/fa"
import { SignOutButton } from "../../login_page";
import { Link } from "react-router-dom";
import { Required } from "../Components/Required_span";
import { Loader } from "../Components/Loader";
export const CreateUser = ({ wallet, listControl }) => {
    // console.log(wallet)

    let inputFirstName = React.createRef();
    let inputLasttName = React.createRef();
    let inputEmail = React.createRef();
    let inputNumberPhone = React.createRef();
    let inputInsta = React.createRef();
    let inputFace = React.createRef();
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const [message, setMessage] = useState('');
    //validate email
    const [error, setError] = useState(null);

    const validateEmail = (e) => {
        if (!isValidEmail(e.target.value)) {
            setError('Email is invalid');
        }
        else {
            setError(null);
        }
        setMessage(e.target.value);

    }
    const [isLoading, setIsLoading] = useState(false);
    const updateUser = (e) => {
        let fName = inputFirstName.current.value;
        let lName = inputLasttName.current.value;
        let email = inputEmail.current.value;
        let phoneNumber = inputNumberPhone.current.value;
        let instagram = inputInsta.current.value;
        let facebook = inputInsta.current.value;
        let walletId = wallet.accountId;
        // console.log(wallet.accountId)
        if (fName.length === 0 || lName.length === 0 || email.length === 0) {
            alert('First name, Last name, Email is required')
        }
        else {
            // React.useEffect(() => {
            //     setIsLoading(true);
            //     // listControl.addUser(fName, lName, email,walletId , phoneNumber,instagram , facebook);
            //     setTimeout(() => {
            //         setIsLoading(false)
            //     }, 2500);
            // })

            // console.log(fName.length);
            // console.log(inputLasttName.current.value)
            // console.log(inputEmail.current.value)
            // console.log(inputNumberPhone.current.value)
            // console.log(inputInsta.current.value)
            // console.log(inputFace.current.value)
        }
    }
    // const [loading, setLoading] = useState(false)
    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 2000)
    // }, [])

    return (
        // <Loader open={loading} />
        <form className='w-[80%]'>
            <div className='bg-white shadow-lg p-14 rounded-xl'>
                <div className='font-bold text-3xl mb-8'>
                    <div className="flex items-stretch">
                        <FaUserCog />
                        <label className="ml-2">Account Setting</label>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-10 mb-8'>
                    <div className=''>
                        <div className="flex items-stretch">
                            <label className='text-xl mb-3'>First Name</label>
                            <Required />
                        </div>

                        <input type='text' ref={inputFirstName} className='w-full p-2 border-black h-12 rounded-md text-xl border-[1px]' required />
                    </div>
                    <div className=''>
                        <div className="flex items-stretch">
                            <label className='text-xl mb-3'>Last Name</label>
                            <Required />
                        </div>
                        <input type='text' ref={inputLasttName} className='w-full p-2 border-black h-12 rounded-md text-xl border-[1px]' required />
                    </div>
                    <div className=''>
                        <div className="flex items-stretch">
                            <label className='text-xl mb-3'>Email</label>
                            <Required />
                        </div>
                        <input type='text' ref={inputEmail} onChange={validateEmail} className='w-full p-2 border-black h-12 rounded-md text-xl border-[1px]' required />
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                    <div className=''>
                        <div className="flex items-stretch">
                            <label className='text-xl mb-3'>Phone Number</label>
                            <Required />
                        </div>
                        <input type='text' ref={inputNumberPhone} className='w-full p-2 border-black h-12 rounded-md text-xl border-[1px]' />
                    </div>
                    <div className=''>
                        <label className='w-full text-xl mb-3'>Instagram</label>
                        <input type='text' ref={inputInsta} className='w-full p-2 border-black h-12 rounded-md text-xl border-[1px]' />
                    </div>
                    <div className=''>
                        <label className='w-full text-xl mb-3'>Facebook</label>
                        <input type='text' ref={inputFace} className='w-full p-2 border-black h-12 rounded-md text-xl border-[1px]' />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <Link to="/setting" className='px-4 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white'>
                        <button onClick={updateUser}>
                            Save
                        </button>
                    </Link>
                    {/* <button className='px-4 py-3 bg-gray-300 hover:bg-gray-400 rounded-md text-black'>
                        Cancle
                    </button> */}
                    <SignOutButton
                        css={'px-4 py-3 bg-gray-300 hover:bg-gray-400 rounded-md text-black'}
                        accountId={wallet.accountId}
                        onClick={() => wallet.wallet.signOut()}
                        label={'Cancle'} />
                </div>
            </div>



        </form>

    )

}