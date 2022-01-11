import { useContext } from "react";

import globalFunction from "../../globalFunction";

import { GlobalContext } from "../../GlobalState";

import "./CartItem.scss";

function CartItem(props) {
  const { handlePrice } = globalFunction();

  const {
    cart,
    setCart,
    setIsRemoveWarning,
    setProductId,
    favProducts,
    setFavProducts,
    setIsAddFavSuccess,
    setIsAddFavWarn,
    setIsUpdatedFavorite,
    cartSizeWarnings,
    setCartSizeWarnings
  } = useContext(GlobalContext);

  const increase = () => {
    let newData = [...cart];

    newData.map((item) => {
      if (item.cartId === props.id) {
        return {
          ...item,
          cartQuantity: item.cartQuantity++,
        };
      }
      return item;
    });

    setCart(newData);
  };

  const decrease = () => {
    let newData = [...cart];

    newData.map((item) => {
      if (item.cartId === props.id) {
        return {
          ...item,
          cartQuantity: item.cartQuantity > 1 ? item.cartQuantity-- : 0,
        };
      }
      return item;
    });
    setCart(newData);
  };

  const trash = () => {
    setIsRemoveWarning(true);
    setProductId(props.id);
  };

  const addToFavorite = () => {
    let check = true;
    let newData = [...favProducts];

    newData.map((item) => {
      if (item.id === props.id) {
        check = false;
        setIsAddFavSuccess(false);
        setIsAddFavWarn(true);
        setIsUpdatedFavorite(false);

        return item;
      }
      return item;
    });

    if (check) {
      setIsAddFavSuccess(true);
      setIsAddFavWarn(false);
      setIsUpdatedFavorite(true);
      newData.push({
        id: props.id,
        img: props.img,
        name: props.name,
        price: props.price,
        sale: props.sale,
        status: props.status,
        condition: props.condition,
        brand: props.brand,
        sizes: props.sizes,
        material: props.material,
        color: props.color,
      });
    }

    setFavProducts(newData);

    let newCart = [...cart];
    const newCartFilter = newCart.filter((item) => item.cartId !== props.id);

    setCart(newCartFilter);
  };

  const handleChooseSize = (e) => {
    let data = [...cart];

    if (e.target.value !== "Sizes") {
      const newData = {
        ...cartSizeWarnings,
        [props.name]: false
      }
      setCartSizeWarnings(newData)
    }

    const newData = data.map((item) => {
      if (item.cartId === props.id) {
        return {
          ...item,
          cartChosenSize: Number(e.target.value),
        };
      }
      return item;
    });

    setCart(newData);
  };

  return (
    <>
      <div className="cart-item">
        <div className="wrapper">
          <img src={props.img} className="cart-img" alt="cart-item" />
          <p className="name">{props.name}</p>
        </div>
        <select onChange={(e) => handleChooseSize(e)} className="sizes-select">
          <option value="Sizes">
            {props.chosenSize === "" ? "Sizes" : props.chosenSize}
          </option>
          {props.sizes.map((item) => {
            if (item !== props.chosenSize) {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            }
          })}
        </select>
        <div className="quantity">
          <div onClick={decrease}>–</div>
          <div>{props.quantity}</div>
          <div onClick={increase}>+</div>
        </div>
        <div className="price">
          <span>Đơn giá</span>
          <p>{handlePrice(props.price)}</p>
        </div>
        <div className="total">
          <span>Tổng cộng</span>
          <p>{handlePrice(props.price * props.quantity)}</p>
        </div>
        <div className="fas fa-trash trash-btn" onClick={trash}></div>
        <div className="buy-later" onClick={addToFavorite}>
          Mua sau
        </div>
      </div>
      {cartSizeWarnings[props.name] && <p className="size-warning">Vui lòng chọn size cho sản phẩm</p>}
    </>
  );
}

export default CartItem;
