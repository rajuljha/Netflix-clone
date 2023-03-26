import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setsignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="logicScreen__background">
        <img
          className="loginScreen__logo"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F4%2FNetflix-Logo-HD.png&f=1&nofb=1&ipt=f0f2542930e1ffbbafbd8ebef62962d689cbd155776918f2f708074866d93114&ipo=images"
          alt="netflix-logo"
        />
        <button className="loginScreen__button" onClick={() => setsignIn(true)}>
          Sign In
        </button>
        <div class="loginScreen__gradient" />
      </div>
      <div class="loginScreen__body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div class="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setsignIn(true)}
                  className="loginScreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
