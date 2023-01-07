import React from "react";
import "./style.css";

import { Input_post_component } from "../Components/Post_input_component";
import { ListBlog } from "../Components/List_Blog";
import { FriendSuggest } from "../Components/Friend_Suggest";
import { FriendRequest } from "../Components/Friend_Request";
import { UserSummary } from "../Components/User_Summary";

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
    <div className="w-full h-full flex gap-[16px] flex-col overflow-y-scroll">
      <div className="w-[680px] mx-auto px-[16px] flex flex-col gap-[12px]">
        <Input_post_component listUser={listUser} listControl={listControl} accountId={accountId} />
      </div>

    </div>
  );
};
