import React, { useRef } from "react";
import { Menu } from "../../Components/Buttons/Toggle_menu";
import UserView from "../User_info";

export const UserSettings = ({ controller, wallet }) => {
    const [getUser, setGetUser] = React.useState([]);
    const [getBlogs, setGetBlogs] = React.useState([]);
    React.useEffect(() => {
        controller.get_user().then(setGetUser).catch(alert)
        controller.getBlog().then(setGetBlogs).catch(alert)

    }, [])

    if (getUser.length !== 0 && getBlogs.length !== 0) {
        let user = getUser.filter((u) => u.wallet === wallet.accountId);
        let blogs = getBlogs.filter((blog) => blog.id_user === user[0].id);

        return (
            <div className="bg-[#fafafa] w-full flex flex-row h-screen overflow-hidden dark:bg-[#121212] dark:text-[#fafafa]">
                <Menu listUser={user} wallet={wallet} />
                <UserView user={user} blogs={blogs} listControl={controller} wallet={wallet} />
            </div>
        );
    }
    // let user_blog = getBlogs.filter((blog) => {blog})

}