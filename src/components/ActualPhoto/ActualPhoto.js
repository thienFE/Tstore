import OverlayActualPhoto from "../Overlay/OverlayActualPhoto";

import "./ActualPhoto.scss";

function ActualPhoto({ overlayPhoto }) {
  return (
    <div className="actual-photo-wrapper">
      <OverlayActualPhoto overlayPhoto={overlayPhoto} />
    </div>
  );
}

export default ActualPhoto;
