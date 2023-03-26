import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F4%2FNetflix-Logo-HD.png&f=1&nofb=1&ipt=f0f2542930e1ffbbafbd8ebef62962d689cbd155776918f2f708074866d93114&ipo=images"
          alt="netflix-logo"
        />
        <img
          onClick={history("/profile")}
          className="nav__avatar"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F474x%2F0d%2Fdc%2Fca%2F0ddccae723d85a703b798a5e682c23c1--horse-stuff-sleepover.jpg&f=1&nofb=1&ipt=ac191d26ac46c82900c5914aaaac522d4f68aac5f6d3cb08930186afdfbcc619&ipo=images"
          alt="netflix-avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
