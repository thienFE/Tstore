import { useContext } from "react";

import { GlobalContext } from "../../GlobalState";

import "./Overlay.scss";

function Overlay() {
  const { isHideNav, setIsHideNav } = useContext(GlobalContext);

  const hideNav = () => {
    setIsHideNav(true);
  };

  return (
    <div
      onClick={hideNav}
      className={`overlay ${isHideNav && "hide"}`}
    ></div>
  );
}

export default Overlay;
