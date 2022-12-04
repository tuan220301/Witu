import React, { useRef } from "react";
import { Required } from "../../Components/Required_span";
import { AiOutlineSave } from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";

export const UserSettings = ({ controller, wallet }) => {
    const [getUser, setGetUser] = React.useState();
    let fname = useRef();
    let lname = useRef();
    let email = useRef();
    let phone_number = useRef();
    let insta = useRef();
    let face = useRef();
    const [formVal, setFormVal] = React.useState({
        fname: '',
        lname: '',
        email: '',
        phone_number: '',
        insta: '',
        face: '',
    });
    const handleForm = (e) => {
        e.preventDefault();
        console.log(formVal)
        // console.log('lname: ' + lname.current.value)
    }
    React.useEffect(() => {
        controller.get_user()
            .then(setGetUser)
            .catch(alert)
    }, [])

    let user;
    let user_clone = {
        fname: '',
        lname: '',
        email: '',
        phone_number: '',
        insta: '',
        face: '',
    };
    if (getUser) {
        user = getUser.filter(item => {
            return (item.wallet == wallet.accountId)

        })
        // console.log(user);
        user.forEach(item => {
            console.log('item: ' + JSON.stringify(item.id))
            user_clone.fname = item.first_name;
            user_clone.lname = item.last_name;
            user_clone.email = item.email;
            user_clone.phone_number = item.number_phone;
            user_clone.insta = item.instagram;
            user_clone.face = item.facebook;
        })

    }
    // console.log((user.first_name))
    // setFormVal(...formVal,)
    const handleChange = (e) => {
        e.preventDefault()
        const value = e.target.value;

        setFormVal({
            ...formVal,
            [e.target.name]: value
        });
    }
    // const [emailVal, setEmailVal] = React.useState();
    // const [] = React.useState();
    // const [] = React.useState();
    // const [] = React.useState();
    // const [] = React.useState();
    // const [] = React.useState();
    return (
        <div className="w-full p-[20px]" >
            <div className="flex items-stretch">
                <label className="text-3xl mr-2"><FaUserCog /></label>
                <label className="text-3xl">User Settings</label>
            </div>
            <form onSubmit={handleForm} className="grid grid-flow-row ">
                <div className="grid grid-flow-col">
                    <div className="p-[20px]">
                        <div className="flex items-stretch">
                            <label htmlFor="email">First Name</label>
                            <Required />
                        </div>
                        <input className="border-2 border-black rounded-xl w-full px-3 py-1" type="text" name="fname" value={user_clone.fname} onChange={handleChange} />
                    </div>
                    <div className="p-[20px]">
                        <div className="flex items-stretch">
                            <label htmlFor="email">Last Name</label>
                            <Required />
                        </div>
                        <input className="border-2 border-black rounded-xl w-full px-3 py-1" type="text" name="lname" value={"last name"} onChange={handleChange} />
                    </div>
                </div>
                <div className="grid grid-flow-col">
                    <div className="p-[20px]">
                        <div className="flex items-stretch">
                            <label htmlFor="email">Email</label>
                            <Required />
                        </div>
                        <input className="border-2 border-black rounded-xl w-full px-3 py-1" type="email" name="email" ref={email} onChange={handleChange} />
                    </div>
                    <div className="p-[20px]">
                        <div className="flex items-stretch">
                            <label htmlFor="email">Phone Number</label>
                        </div>
                        <input className="border-2 border-black rounded-xl w-full px-3 py-1" type="text" name="phone_number" ref={phone_number} />
                    </div>
                </div>
                <div className="grid grid-flow-col">
                    <div className="p-[20px]">
                        <div className="flex items-stretch">
                            <label htmlFor="email">Instagram</label>
                        </div>
                        <input className="border-2 border-black rounded-xl w-full px-3 py-1" type="text" name="insta" ref={insta} />
                    </div>
                    <div className="p-[20px]">
                        <div className="flex items-stretch">
                            <label htmlFor="email">Facebook</label>
                        </div>
                        <input className="border-2 border-black rounded-xl w-full px-3 py-1" type="text" name="face" ref={face} />
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <div className="">
                        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-400">
                            <div className="text-xl mr-2 cursor-pointer flex items-stretch">
                                <div className="text-2xl"><AiOutlineSave /></div>Update</div>
                            {/* <label className="cursor-pointer"></label> */}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}