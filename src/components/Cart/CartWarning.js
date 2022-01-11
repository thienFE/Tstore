import { useContext } from "react";
import { GlobalContext } from "../../GlobalState";

function CartWarning() {
  const { setIsCartWarning } = useContext(GlobalContext);

  const offWarning = () => {
    setIsCartWarning(false);
  };

  return (
    <div className="cart-warning"  onClick={offWarning}>
      <div className="cart-warning-inner">
        <span className="close-btn fas fa-times"></span>
        <h2>Sản phẩm đã có trong giỏ hàng !</h2>
      </div>
    </div>
  );
}

export default CartWarning;
