import { useContext, useEffect } from "react";

import { GlobalContext } from "../GlobalState";

import CartContainer from "../components/Cart/CartContainer";
import Order from "../components/Cart/Order";

function Cart() {
  const { setErrors, setCusInfo, setIsOrderSuccess, setLetSubmit } = useContext(GlobalContext)

  useEffect(() => {
    setErrors({})
    setCusInfo({})
    setIsOrderSuccess(false)
    setLetSubmit(false)
    window.scroll(0, 0)
  }, [])
  return (
    <>
      <Order />
      <CartContainer />
    </>
  );
}

export default Cart;
