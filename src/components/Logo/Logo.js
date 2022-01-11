import { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../../GlobalState";

import "./Logo.scss";

function Logo() {
  const { isHideNav, setIsHideNav } = useContext(GlobalContext);

  const displayNavigation = () => {
    setIsHideNav(!isHideNav);
  };

  return (
    <div className="logo-bar">
      <div>
        <span onClick={displayNavigation} className="menu-bars">
          <i className="fas fa-bars" />
        </span>
        <p>Create your own style</p>
        <div className="clear"></div>
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="tsore logo" />
          <h1>Tstore</h1>
        </Link>
        <div className="clear"></div>
        <div className="clear"></div>
      </div>
    </div>
  );
}

export default Logo;
