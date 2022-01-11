import { useContext } from "react";

import { GlobalContext } from "../../GlobalState";

import "./Overlay.scss";

function OverlayActualPhoto({ overlayPhoto }) {
  const hideNav = () => {
    setIsDisplayNav(false);
  };

  const { isDisplayNav, setIsDisplayNav } = useContext(GlobalContext);

  return (
    <div
      onClick={hideNav}
      className={`overlayActualPhoto ${isDisplayNav && "display"}`}
    >
      <div className="actual-photo-container">
        <img src={overlayPhoto} alt="actual-photo" />
      </div>
    </div>
  );
}

export default OverlayActualPhoto;
