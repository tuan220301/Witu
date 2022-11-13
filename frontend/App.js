import 'regenerator-runtime/runtime';
import React from 'react';

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
  // console.log("valueFromBlockchain: " + JSON.stringify(valueFromBlockchain))
  // React.useEffect(() => {
  //   helloNEAR.get_blog()
  //     .then(setValueFromBlockchain)
  //     .catch(alert)
  //     .finally(() => {
  //       setUiPleaseWait(false);
  //     });
  // }, []);
  /// If user not signed-in with wallet - show prompt
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return <SignInPrompt greeting={valueFromBlockchain} onClick={() => wallet.signIn()} />;
  }

  // function changeGreeting(e) {
  //   e.preventDefault();
  //   setUiPleaseWait(true);
  //   const { greetingInput } = e.target.elements;
  //   helloNEAR.add_blog(greetingInput.value)
  //     .then(async () => { return helloNEAR.get_user(); })
  //     .then(setValueFromBlockchain)
  //     .finally(() => {
  //       setUiPleaseWait(false);
  //     });
  // }
  return (
    <>

      <Nav_menu accountId={wallet} />
      <Home data={helloNEAR} />
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
    </>
  );
}
