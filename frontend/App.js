import 'regenerator-runtime/runtime';
import React, { useState } from 'react';

import './assets/global.css';

import { EducationalText, SignInPrompt, SignOutButton } from './login_page';
import { Nav_menu } from './Blog_app/Components/Nav_menu';
import { Home } from './Blog_app/Modules/Home';


export default function App({ isSignedIn, helloNEAR, wallet }) {
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  // Get blockchian state once on component load
  React.useEffect(() => {
    helloNEAR.get_user()
      .then(setValueFromBlockchain)
      .catch(alert)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }, []);

  /// If user not signed-in with wallet - show prompt
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return <SignInPrompt greeting={valueFromBlockchain} onClick={() => wallet.signIn()} />;
  }

  let accountId = wallet.accountId;
  //check user is new or old

  // console.log((accountId));
  // const user = JSON.parse(valueFromBlockchain)
  let existed = 0;
  let new_user = [];
  // console.log('valueFromBlockchain: ' + JSON.stringify(valueFromBlockchain))
  if (valueFromBlockchain !== undefined) {
    valueFromBlockchain.forEach(user => {
      // console.log('user: ' + JSON.stringify(user.wallet))
      if (user.wallet === accountId) {
        existed = 1;
        new_user.push(user);
      }
    });

  }
  console.log('new_user: ' + JSON.stringify(new_user))
  // valueFromBlockchain.forEach(user => { console.log(user) })

  return (
    <div className='app_container'>
      {/* <div className={existed === 1 ? 'block' : 'hidden'}> */}

      <Nav_menu accountId={wallet} />
      <Home user={new_user} listControl={helloNEAR} />
      {/* </div> */}
      {/* <div className={existed === 1 ? 'hidden' : 'block'}>
        <Nav_menu accountId={wallet} />
        setup user
      </div> */}
      {/* <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()} /> */}
      {/* <main className={uiPleaseWait ? 'please-wait' : ''}>
        <p>{wallet.accountId}</p>
        <h1>
          The contract says: <span className="greeting">{valueFromBlockchain}</span>
        </h1>
        <form className="change">
          <label>Change greeting123:</label>
          <div>
            <input
              autoComplete="off"
              defaultValue={valueFromBlockchain}
              id="greetingInput"
            />
            <button>
              <span>Save</span>
              <div className="loader"></div>
            </button>
          </div>
        </form>
      </main> */}
    </div>
  );
}
