import React from "react";
import "./style.css";

import { Input_post_component } from "../Components/Post_input_component";

export const Home = ({ listUser, listControl, accountId }) => {
  // const [blogs, setBlogs] = React.useState([]);
  // React.useEffect(() => {
  //     data.getBlog()
  //         .then(setBlogs)
  //         .catch(alert)
  // }, [])

  //them field ava neu sau nay trong BE khong co
  const userIsLogin = listUser.filter((item) => item.wallet === accountId);
  // console.log('userIsLogin: ' + JSON.stringify(userIsLogin))
  return (
    <div className="w-full h-full flex gap-[16px] flex-col overflow-y-scroll scrollbar-hide">
      <div className="flex items-stretch">
        <div className="w-[680px] mx-auto px-[16px] flex flex-col gap-[12px]">
          <Input_post_component listUser={listUser} listControl={listControl} accountId={accountId} />

        </div>

      </div>
    </div>
  );
};
