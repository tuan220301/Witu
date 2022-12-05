import React, { useState, useEffect } from "react";
import { FaUserCog } from "react-icons/fa"
import { SignOutButton } from "../../login_page";
import { Link } from "react-router-dom";
import { Required } from "../Components/Required_span";
import ReactModal from "react-modal";
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
    let walletId = wallet.accountId;
    const [showModal, setShowModal] = React.useState(false);
    const updateUser = (e) => {
        e.preventDefault();
        let fName = inputFirstName.current.value;
        let lName = inputLasttName.current.value;
        let email = inputEmail.current.value;
        let phoneNumber = inputNumberPhone.current.value;
        let instagram = inputInsta.current.value;
        let facebook = inputInsta.current.value;
        listControl.addUser(fName,lName, email,walletId, phoneNumber,instagram,facebook);
       
        setTimeout(() => {
            setShowModal(true);
        }, 1000);

            // console.log('fname: ' + fName);
            // console.log(inputLasttName.current.value)
            // console.log(inputEmail.current.value)
            // console.log(inputNumberPhone.current.value)
            // console.log(inputInsta.current.value)
            // console.log(walletId)
    }
    
    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        // <Loader open={loading} />
        <div className='w-[80%]' >
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
                    {/* <Link to="/setting" className='px-4 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white'> */}
                        <button type="submit" className='px-4 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white' onClick={updateUser}>
                            Save
                        </button>
                    {/* </Link> */}
                    {/* <button className='px-4 py-3 bg-gray-300 hover:bg-gray-400 rounded-md text-black'>
                        Cancle
                    </button> */}
                    <SignOutButton
                        css={'px-4 py-3 bg-gray-300 hover:bg-gray-400 rounded-md text-black '}
                        accountId={wallet.accountId}
                        onClick={() => {
                            wallet.wallet.signOut()
                            setTimeout(() => {
                                window.location.reload();
                            }, 1000);
                        }}
                        label={'Cancle'} />
                </div>
            </div>


            <ReactModal 
           isOpen={showModal}
           contentLabel="Minimal Modal Example"
           className="flex justify-center items-center h-screen">
            <div className="w-96 h-32 border-[1px] rounded-xl border-black text-center bg-white">
                <h2 className="text-2xl text-green-400 p-[20]">Create user successfully</h2>
                <Link to="setting" className="rounded-xl bg-blue-500 text-white font-bold p-[10px]">Continue</Link>
            </div>
            </ReactModal>
        </div>

    )

}