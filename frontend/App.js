import 'regenerator-runtime/runtime';
import React, { useState } from 'react';

import './assets/global.css';

import { EducationalText, SignInPrompt, SignOutButton } from './login_page';
import { Nav_menu } from './Blog_app/Components/Nav_menu';
import { Home } from './Blog_app/Modules/Home';
import { CreateUser } from './Blog_app/Modules/Create_User';


export default function App({ isSignedIn, helloNEAR, wallet }) {
  const [listUser, setListUser] = React.useState();

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  // Get blockchian state once on component load
  React.useEffect(() => {
    helloNEAR.get_user()
      .then(setListUser)
      .catch(alert)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }, []);

  /// If user not signed-in with wallet - show prompt

  let accountId = wallet.accountId;
  //check user is new or old
  let existed = 0;
  let new_user = [];
  // console.log('accountId: ' + JSON.stringify(accountId))
  // console.log('listUser: ' + JSON.stringify(listUser))
  if (listUser !== undefined) {
    listUser.forEach(user => {
      // console.log('user: ' + JSON.stringify(user))
      if (user.wallet === accountId) {
        existed = 1;
        // new_user.push(user);
      }
    });

  }
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return <SignInPrompt greeting={listUser} onClick={() => wallet.signIn()} />;
  }
  else {
    // console.log(existed)
    if (existed === 1) {
      return (
        <div className='app_container'>
          <Nav_menu accountId={wallet} />
          <Home listUser={listUser} listControl={helloNEAR} accountId={accountId}/>
        </div>
      );
    }

    return (
      <div className='app_container'>
        <div className='flex justify-center items-center h-screen'>
          <CreateUser wallet={wallet} listControl={helloNEAR} />
        </div>
      </div>
    );
  }

}
