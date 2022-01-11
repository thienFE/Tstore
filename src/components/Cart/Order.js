import { useContext } from "react";

import globalFunction from "../../globalFunction";

import { GlobalContext } from "../../GlobalState";

import "./CartItem.scss";

function Order() {
  const {
    cart,
    letSubmit,
    cusInfo,
    setIsWarningConfirmInfo,
    setIsSizeWarning,
    cartSizeWarnings,
    setCartSizeWarnings,
    setIsOrderSuccess,
    setCart,
    orderedProds,
    setOrderedProds,
    setIsWarningCartEmpty
  } = useContext(GlobalContext);

  const { handlePrice } = globalFunction();

  let deliveryFee = 0;
  const calculateOrderTotal = () => {
    if (cusInfo["phương thức giao hàng"] === "Giao nhanh") {
      deliveryFee = 35000;
    }

    const result = cart.reduce((initValue, curValue) => {
      return initValue + curValue.cartPrice * curValue.cartQuantity;
    }, 0);

    return result + deliveryFee;
  };

  const confirmOrder = () => {
    let check = false;
    let newData = { ...cartSizeWarnings };

    cart.forEach((item) => {
      if (item.cartChosenSize === "") {
        check = true;
        newData = {
          ...newData,
          [item.cartName]: true,
        };
      } else {
        newData = {
          ...newData,
          [item.cartName]: false,
        };
      }
    });

    setCartSizeWarnings(newData);

    if (check) {
      setIsSizeWarning(true);
    } else {
      if (cart.length !== 0) {
        if (letSubmit) {
          setIsOrderSuccess(true);

          setOrderedProds(cart);

          setCart([]);
        }
      } else {
        setIsWarningCartEmpty(true)
      }
      setIsSizeWarning(false);
    }

    if (!letSubmit) {
      setIsWarningConfirmInfo(true);
      setIsOrderSuccess(false);
    }
  };

  console.log(orderedProds);

  return (
    <div className="order-container">
      <div className="address">
        <h1>Giao tới</h1>
        <span className="name">
          {letSubmit ? (
            <p>{cusInfo["tên"]}</p>
          ) : (
            <div className="so-on-wrapper">
              <div>Đang xác nhận</div>
              <div className="loading"></div>
            </div>
          )}
        </span>
        <span className="phone">
          {letSubmit ? (
            <p>{cusInfo["số điện thoại"]}</p>
          ) : (
            <div className="so-on-wrapper">
              <div>Đang xác nhận</div>
              <div className="loading"></div>
            </div>
          )}
        </span>
        <span className="email">
          {letSubmit ? (
            <p>{cusInfo.email}</p>
          ) : (
            <div className="so-on-wrapper">
              <div>Đang xác nhận</div>
              <div className="loading"></div>
            </div>
          )}
        </span>
        <span className="address-item">
          {letSubmit ? (
            cusInfo["địa chỉ"] ? (
              <p>
                {cusInfo["địa chỉ"]}, {cusInfo["xã, phường"]},{" "}
                {cusInfo["quận, huyện"]}, {cusInfo["tỉnh, thành phố"]}
              </p>
            ) : (
              "Vui lòng xác nhận"
            )
          ) : (
            <div className="so-on-wrapper">
              <div>Đang xác nhận</div>
              <div className="loading"></div>
            </div>
          )}
        </span>
      </div>
      <div className="methods">
        <h1>Phương thức</h1>
        <span>
          {letSubmit ? (
            cusInfo["phương thức giao hàng"] ? (
              <p>{cusInfo["phương thức giao hàng"]}</p>
            ) : (
              "Vui lòng xác nhận"
            )
          ) : (
            <div className="so-on-wrapper">
              <div>Đang xác nhận</div>
              <div className="loading"></div>
            </div>
          )}
        </span>
        <span>
          {letSubmit ? (
            <p>{cusInfo["phương thức thanh toán"]}</p>
          ) : (
            <div className="so-on-wrapper">
              <div>Đang xác nhận</div>
              <div className="loading"></div>
            </div>
          )}
        </span>
      </div>
      <div className="order-cost">
        <div className="product">
          <p>Sản phẩm</p>
          <span>{`${handlePrice(calculateOrderTotal() - deliveryFee)} đ`}</span>
        </div>
        <div className="delivery">
          <p>Vận chuyển</p>
          <span>{`${handlePrice(deliveryFee)} đ`}</span>
        </div>
        <div className="sale">
          <p>Giảm giá</p>
          <span>0 đ</span>
        </div>
        <div className="total">
          <p className="total-text">Tổng cộng</p>
          <span>{`${handlePrice(calculateOrderTotal())} đ`}</span>
        </div>
      </div>
      <div onClick={confirmOrder} className="confirm-order">
        Xác nhận đặt hàng
      </div>
    </div>
  );
}

export default Order;
