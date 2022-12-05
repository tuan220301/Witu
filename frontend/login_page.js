import React from 'react';
// import './assets/global.css'
import './Blog_app/Components/style.css';
import { BiLogInCircle } from 'react-icons/bi';
export function SignInPrompt({ greeting, onClick }) {
  return (
    <div className="login_container">
      <div className='bg-white shadow-lg rounded-lg text-center float-right border-2 w-[100%] h-[100%] lg:w-[30%] lg:h-[55%] lg:mt-[10%] lg:mr-[12%]'>
        <h1 className='text-8xl mt-[10%] font-bold text-[#3A3737]'>WiTu</h1>
        <h3 className='text-2xl mt-[10%] italic text-[#646464]'>Nơi chia sẻ những trải nghiệm</h3>
        <button onClick={onClick} className='border-none bg-[#262422] text-[#EEEDE9] w-[300px] h-[65px] mt-[10%] rounded-lg hover:bg-[#646464]'>Đăng nhập bằng NEAR Wallet</button><br />
        <label>
          <input className='mt-[10%] mr-[10px]' type="checkbox" name="checkbox" value="value" />
          Chấp nhận mọi điều khoản
        </label>
      </div>
    </div>
  );
}

export function SignOutButton({ css, accountId, onClick, label }) {
  return (
    // <button style={{ float: 'right' }} onClick={onClick}>
    //   Sign out {accountId}
    // </button>
    <button className={css} onClick={onClick}>
      {/* <div className='flex items-stretch'> */}
        {label}
      {/* </div> */}
    </button>
  );
}
// export function CancleLoginButton({ accountId, onClick, css }) {
//   return (
//     // <button style={{ float: 'right' }} onClick={onClick}>
//     //   Sign out {accountId}
//     // </button>
//     <button className={css} onClick={onClick}>
//       <label> Cancle</label>
//     </button>
//   );
// }
// export function EducationalText() {
//   return (
//     <>
//       <p>
//         Look at that! A Hello World app! This greeting is stored on the NEAR blockchain. Check it out:
//       </p>
//       <ol>
//         <li>
//           Look in <code>frontend/App.js</code> - you'll see <code>getGreeting</code> and <code>setGreeting</code> being called on <code>contract</code>. What's this?
//         </li>
//         <li>
//           Ultimately, this <code>contract</code> code is defined in <code>./contract</code> – this is the source code for your <a target="_blank" rel="noreferrer" href="https://docs.near.org/docs/develop/contracts/overview">smart contract</a>.</li>
//         <li>
//           When you run <code>npm run deploy</code>, the code in <code>./contract</code> gets deployed to the NEAR testnet. You can see how this happens by looking in <code>package.json</code>.</li>
//       </ol>
//       <hr />
//       <p>
//         To keep learning, check out <a target="_blank" rel="noreferrer" href="https://docs.near.org">the NEAR docs</a> or look through some <a target="_blank" rel="noreferrer" href="https://examples.near.org">example apps</a>.
//       </p>
//     </>
//   );
// }
