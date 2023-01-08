import React from "react";
import { AvaBtn } from "../../Components/Buttons/Ava_Btn";

export const SystemSettings = ({ user, controller, wallet }) => {
  // console.log('user: ' + user[0]);
  const [state, setState] = React.useState({
    firstName: user[0].first_name,
    lastName: user[0].last_name,
    wallet: user[0].wallet,
    number_phone: user[0].number_phone,
    instagram: user[0].instagram,
    facebook: user[0].facebook,
    birthday: user[0].birthday,
    avatar: user[0].avatar
  })
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  const save = () => {
    let avatar = '';
    // console.log('state: ' + user[0].id + ' ' + state.firstName + ' ' + state.lastName + ' ' + state.wallet + ' ' + state.number_phone + ' ' + state.instagram + ' ' + state.facebook + ' ' + 'state.avatar:' + avatar + '0')
    // console.log(controller)
    controller.update_user(user[0].id, state.firstName, state.lastName, state.wallet, state.number_phone, state.instagram, state.facebook, state.birthday, avatar)
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }
  return (
    <div className="w-full h-full flex gap-[16px] flex-col overflow-y-scroll">
      <div className="mx-auto px-[16px]  lg:mt-[50px] m-x-auto h-[auto] w-[780px] bg-white dark:bg-black dark:text-[#fafafa] rounded-2xl shadow overflow-hidden border dark:border-[#5557] border-[#fafafa]">
        <div className="w-full p-3">
          {/* avatar, name, link facebook instagram */}
          <div className="flex w-full">
            <div className=" w-full p-3 flex items-stretch justify-center">
              <div className="mr-2">
                <AvaBtn
                  srcImg={`https://picsum.photos/200`}
                  className={`w-[50px] h-[50px] rounded-full border-[2px] border-x-orange-400 border-y-red-500`}
                />
              </div>
              <div >
                <h1 className=" text-[20px] cursor-pointer">{user[0].first_name + ' ' + user[0].last_name}</h1>
                <h1>Settings</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] w-full">
          </div>

          <div className="p-2">
            <div className="flex items-stretch mb-2">
              <div className="w-[30%]">
                <h1 className="text-center p-2">First Name: </h1>
              </div>
              <div className="w-[70%]">
                <input
                  type="text"
                  // placeholder="Enter your content"
                  name="firstName"
                  value={state.firstName}
                  onChange={handleChange}
                  className=" text-base font-thin w-full rounded-[20px] px-[12px] py-[8px] bg-[#f1f2f6] dark:bg-[#121212] dark:text-[#fafafa] focus:outline-none break-words resize-none border-none break-all hover:bg-gray-200 dark:hover:bg-[#161616] border border-[#5557]"
                />
              </div>
            </div>
            <div className="flex items-stretch mb-2">
              <div className="w-[30%]">
                <h1 className="text-center p-2">Last Name: </h1>
              </div>
              <div className="w-[70%]">
                <input
                  type="text"
                  // placeholder="Enter your content"
                  name="lastName"
                  value={state.lastName}
                  onChange={handleChange}
                  className=" text-base font-thin w-full rounded-[20px] px-[12px] py-[8px] bg-[#f1f2f6] dark:bg-[#121212] dark:text-[#fafafa] focus:outline-none break-words resize-none border-none break-all hover:bg-gray-200 dark:hover:bg-[#161616] border border-[#5557]"
                />
              </div>
            </div>
            <div className="flex items-stretch mb-2">
              <div className="w-[30%]">
                <h1 className="text-center p-2">Phone Number: </h1>
              </div>
              <div className="w-[70%]">
                <input
                  type="text"
                  // placeholder="Enter your content"
                  name="number_phone"
                  value={state.number_phone}
                  onChange={handleChange}
                  className=" text-base font-thin w-full rounded-[20px] px-[12px] py-[8px] bg-[#f1f2f6] dark:bg-[#121212] dark:text-[#fafafa] focus:outline-none break-words resize-none border-none break-all hover:bg-gray-200 dark:hover:bg-[#161616] border border-[#5557]"
                />
              </div>
            </div>
            <div className="flex items-stretch mb-2">
              <div className="w-[30%]">
                <h1 className="text-center p-2">Instagram: </h1>
              </div>
              <div className="w-[70%]">
                <input
                  type="text"
                  // placeholder="Enter your content"
                  name="instagram"
                  value={state.instagram}
                  onChange={handleChange}
                  className=" text-base font-thin w-full rounded-[20px] px-[12px] py-[8px] bg-[#f1f2f6] dark:bg-[#121212] dark:text-[#fafafa] focus:outline-none break-words resize-none border-none break-all hover:bg-gray-200 dark:hover:bg-[#161616] border border-[#5557]"
                />
              </div>
            </div>
            <div className="flex items-stretch mb-2">
              <div className="w-[30%]">
                <h1 className="text-center p-2">Facebook: </h1>
              </div>
              <div className="w-[70%]">
                <input
                  type="text"
                  // placeholder="Enter your content"
                  name="facebook"
                  value={state.facebook}
                  onChange={handleChange}
                  className=" text-base font-thin w-full rounded-[20px] px-[12px] py-[8px] bg-[#f1f2f6] dark:bg-[#121212] dark:text-[#fafafa] focus:outline-none break-words resize-none border-none break-all hover:bg-gray-200 dark:hover:bg-[#161616] border border-[#5557]"
                />
              </div>
            </div>
            <div className="flex items-stretch mb-2">
              <div className="w-[30%]">
                <h1 className="text-center p-2">Birthday: </h1>
              </div>
              <div className="w-[70%]">
                <input
                  type="text"
                  // placeholder="Enter your content"
                  name="birthday"
                  value={state.birthday}
                  onChange={handleChange}
                  className=" text-base font-thin w-full rounded-[20px] px-[12px] py-[8px] bg-[#f1f2f6] dark:bg-[#121212] dark:text-[#fafafa] focus:outline-none break-words resize-none border-none break-all hover:bg-gray-200 dark:hover:bg-[#161616] border border-[#5557]"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <button onClick={save} className="text-lg text-white rounded-xl py-2 px-4 bg-blue-400 hover:bg-blue-500">Lưu</button>
          </div>
        </div>

      </div>
    </div>
  );
};
