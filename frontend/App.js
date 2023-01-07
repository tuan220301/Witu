import "regenerator-runtime/runtime";
import React from "react";

import "./assets/global.css";

import { EducationalText, SignInPrompt, SignOutButton } from "./login_page";
import { Home } from "./Blog_app/Modules/Home";
import { CreateUser } from "./Blog_app/Modules/Create_User";
import { Menu } from "./Blog_app/Components/Buttons/Toggle_menu";

export default function App({ isSignedIn, helloNEAR, wallet }) {
  const [listUser, setListUser] = React.useState([]);
  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);
  // Get blockchian state once on component load
  React.useEffect(() => {
    helloNEAR
      .get_user()
      .then(setListUser)
      .catch(alert)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }, []);
  /// If user not signed-in with wallet - show prompt
  let accountId = wallet.accountId;
  //check user is new or old
  let new_user;

  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return <SignInPrompt greeting={listUser} onClick={() => wallet.signIn()} />;
  }
  else {
    if (listUser.length !== 0) {
      new_user = listUser.filter((user) => user.wallet === accountId);
      if (new_user.length !== 0) {
        return (
          <div className="bg-[#fafafa] w-full flex flex-row h-screen overflow-hidden dark:bg-[#121212] dark:text-[#fafafa]">
            <Menu listUser={new_user} wallet={wallet} />
            <Home listUser={listUser} listControl={helloNEAR} accountId={accountId} />
          </div>
        );
      } else {
        return (
          <div className="app_container">
            <div className="flex justify-center items-center h-screen">
              <CreateUser wallet={wallet} listControl={helloNEAR} />
            </div>
          </div>
        );
      }
    }
  }
}
