// React
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// NEAR
import { HelloNEAR } from "./near-interface";
import { Wallet } from "./near-wallet";

//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AddBlog } from './Blog_app/Components/List_Blog';
import { Settings } from "./Blog_app/Modules/Settings";
import { AboutUs } from "./Blog_app/Modules/About_us";
import { UserSettings } from "./Blog_app/Modules/Setting_Components/User_settings_component";
import { Messenger } from "./Blog_app/Modules/Messenger";

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME });

// Abstract the logic of interacting with the contract to simplify your flow
export const controller = new HelloNEAR({ contractId: process.env.CONTRACT_NAME, walletToUse: wallet });

// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp();

  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          index
          element={<App isSignedIn={isSignedIn} helloNEAR={controller} wallet={wallet} />}
        />
        <Route path="settings" element={<Settings wallet={wallet} controller={controller} />} />
        <Route path="about_us" element={<AboutUs wallet={wallet} />} />
        <Route path="user" element={<UserSettings controller={controller} wallet={wallet} />} />
        <Route path="chat" element={<Messenger wallet={wallet} />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );
};
