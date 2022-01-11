import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"

import { GlobalContext } from "../../GlobalState"

import CartItem from "./CartItem"
import Footer from "../Footer/Footer"

import "./CartItem.scss"

function CartContainer() {
  const {
    cart,
    setCart,
    isRemoveWarning,
    setIsRemoveWarning,
    productId,
    isAddFavSuccess,
    setIsAddFavSuccess,
    isAddFavWarn,
    setIsAddFavWarn,
    cusInfo,
    setCusInfo,
    errors,
    setErrors,
    confirmInfo,
    setConfirmInfo,
    setLetSubmit,
    isWarningInfo,
    setIsWarningInfo,
    isSizeWarning,
    setIsSizeWarning,
    isWarningConfirmInfo,
    setIsWarningConfirmInfo,
    isOrderSuccess,
    isWarningCartEmpty,
    setIsWarningCartEmpty
  } = useContext(GlobalContext)

  const remove = () => {
    let newData = [...cart]

    const filterData = newData.filter((item) => item.cartId !== productId)

    setCart(filterData)
    setIsRemoveWarning(false)
  }

  const undo = () => {
    setIsRemoveWarning(false)
  }

  const handleChange = (e) => {
    setLetSubmit(false)
    setCusInfo({
      ...cusInfo,
      [e.target.name]: e.target.value,
    })
    setErrors({
      ...errors,
      [e.target.name]: undefined
    })
  }

  const handleError = (e) => {
    const { name, value } = e.target

    if (!value.trim()) {
      setErrors({
        ...errors,
        [name]: `Vui lòng nhập vào ${name}`,
      })
    } else {
      if (name === "email") {
        if (!/\S+@\S+\.\S+/.test(value)) {
          setErrors({
            ...errors,
            [name]: "Giá trị nhập vào không hợp lệ",
          })
        } else {
          setErrors({
            ...errors,
            [name]: undefined,
          })
        }
      }

      if (name === "số điện thoại") {
        if (
          !/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(
            value
          )
        ) {
          setErrors({
            ...errors,
            [name]: "Số điện thoại không hợp lệ",
          })
        } else {
          setErrors({
            ...errors,
            [name]: undefined,
          })
        }
      }

      if (name !== "email" && name !== "số điện thoại") {
        setErrors({
          ...errors,
          [name]: undefined,
        })
      }
    }
  }

  const handleRadio = (e) => {
    setCusInfo({
      ...cusInfo,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    const errorsValue = Object.values(errors)

    const check = errorsValue.filter((item) => item).length

    if (Object.keys(cusInfo).length === 9 && check === 0) {
      setConfirmInfo(true)
    } else {
      setConfirmInfo(false)
    }
  }, [errors, cusInfo])

  const submitInfo = () => {
    if (confirmInfo) {
      setLetSubmit(true)
      window.scrollTo(0, 0)
    } else {
      setLetSubmit(false)
      setIsWarningInfo(true)
    }
  }

  return (
    <div className="cart-container">
      <div className="customer-information">
        <div className="address">
          <h1>
            <i className="fas fa-book" />
            <span>Địa chỉ</span>
          </h1>
          <div className="address-wrapper">
            <div className="name">
              <span>
                <span>*</span> Họ và Tên:
              </span>
              <br />
              <input
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleError(e)}
                type="text"
                name="tên"
              />
            </div>
            {errors["tên"] && <p>{errors["tên"]}</p>}
            <div className="email">
              <span>
                <span>*</span> Email:
              </span>
              <br />
              <input
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleError(e)}
                type="email"
                name="email"
              />
            </div>
            {errors["email"] && <p>{errors["email"]}</p>}
            <div className="phone">
              <span>
                <span>*</span> Điện thoại:
              </span>
              <br />
              <input
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleError(e)}
                type="number"
                name="số điện thoại"
              />
            </div>
            {errors["số điện thoại"] && <p>{errors["số điện thoại"]}</p>}
            <div className="province">
              <span>
                <span>*</span> Tỉnh, thành:
              </span>
              <br />
              <input
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleError(e)}
                type="text"
                name="tỉnh, thành phố"
              />
            </div>
            {errors["tỉnh, thành phố"] && <p>{errors["tỉnh, thành phố"]}</p>}
            <div className="district">
              <span>
                <span>*</span> Quận, huyện:
              </span>
              <br />
              <input
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleError(e)}
                type="text"
                name="quận, huyện"
              />
            </div>
            {errors["quận, huyện"] && <p>{errors["quận, huyện"]}</p>}
            <div className="wards">
              <span>
                <span>*</span> Xã, phường:
              </span>
              <br />
              <input
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleError(e)}
                type="text"
                name="xã, phường"
              />
            </div>
            {errors["xã, phường"] && <p>{errors["xã, phường"]}</p>}
            <div className="address">
              <span>
                <span>*</span> Địa chỉ:
              </span>
              <br />
              <input
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleError(e)}
                type="text"
                name="địa chỉ"
              />
            </div>
            {errors["địa chỉ"] && <p>{errors["địa chỉ"]}</p>}
          </div>
        </div>
        <div className="methods">
          <div className="delivery-method">
            <h1>
              <i className="fas fa-truck" />
              <span>Phương thức giao hàng</span>
            </h1>
            <div className="selections">
              <div className="item">
                <div>
                  <input
                    onChange={(e) => {
                      handleRadio(e)
                    }}
                    value="Giao nhanh"
                    name="phương thức giao hàng"
                    type="radio"
                  />
                  <span>Giao nhanh</span>
                </div>
                <div className="price">35.000 đ</div>
              </div>
              <div className="item">
                <div>
                  <input
                    onChange={(e) => {
                      handleRadio(e)
                    }}
                    value="Giao tiêu chuẩn"
                    name="phương thức giao hàng"
                    type="radio"
                  />
                  <span>Giao tiêu chuẩn</span>
                </div>
                <div className="price">0 đ</div>
              </div>
            </div>
            {errors["phương thức giao hàng"] && (
              <p>{errors["phương thức giao hàng"]}</p>
            )}
          </div>

          <div className="payment-method">
            <h1>
              <i className="far fa-credit-card" />
              <span>Phương thức thanh toán</span>
            </h1>
            <div className="selections">
              <div className="item">
                <div>
                  <input
                    type="radio"
                    name="phương thức thanh toán"
                    value="Thanh toán khi nhận hàng"
                    onChange={(e) => {
                      handleRadio(e)
                    }}
                  />
                  <span>Thanh toán khi nhận hàng</span>
                </div>
              </div>
              <div className="item">
                <div>
                  <input
                    type="radio"
                    name="phương thức thanh toán"
                    value="Thanh toán bằng ATM nội địa (Internet Banking)"
                    onChange={(e) => {
                      handleRadio(e)
                    }}
                  />
                  <span>Thanh toán bằng ATM nội địa (Internet Banking)</span>
                </div>
              </div>
              <div className="item">
                <div>
                  <input
                    type="radio"
                    name="phương thức thanh toán"
                    value="Thanh toán bằng Credit/Debit Card (VISA, MASTER, JCB, AMEX)"
                    onChange={(e) => {
                      handleRadio(e)
                    }}
                  />
                  <span>
                    Thanh toán bằng Credit/Debit Card (VISA, MASTER, JCB, AMEX)
                  </span>
                </div>
              </div>
              <div className="item">
                <div>
                  <input
                    type="radio"
                    name="phương thức thanh toán"
                    value="Chuyển khoản ngân hàng"
                    onChange={(e) => {
                      handleRadio(e)
                    }}
                  />
                  <span>Chuyển khoản ngân hàng</span>
                </div>
              </div>
            </div>
            {errors["phương thức thanh toán"] && (
              <p>{errors["phương thức thanh toán"]}</p>
            )}
          </div>
          <div onClick={submitInfo} className="confirm-info-btn">
            Xác nhận thông tin
          </div>
        </div>
      </div>
      <div className="cart-wrapper">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Giỏ hàng của bạn đang trống !</h2>
          </div>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.cartId}
              id={item.cartId}
              img={item.cartImg}
              name={item.cartName}
              quantity={item.cartQuantity}
              price={item.cartPrice}
              sale={item.cartSale}
              status={item.cartStatus}
              condition={item.cartCondition}
              sizes={item.cartSizes}
              chosenSize={item.cartChosenSize}
            />
          ))
        )}
      </div>
      {isRemoveWarning && (
        <div className="remove-warning">
          <div className="remove-warning-inner">
            <span className="close-btn fas fa-times" onClick={undo}></span>
            <h2>Bạn có chắc chắn muốn xóa sản phẩm ?</h2>
            <div className="response">
              <div className="choice yes" onClick={remove}>
                Có
              </div>
              <div className="choice no" onClick={undo}>
                Không
              </div>
            </div>
          </div>
        </div>
      )}
      {isAddFavSuccess && (
        <div className="add-fav" onClick={() => setIsAddFavSuccess(false)}>
          <div className="add-fav-inner">
            <h2>Sản phẩm đã được thêm vào mục Yêu thích !</h2>
          </div>
        </div>
      )}
      {isOrderSuccess && (
        <div className="add-fav">
          <div className="add-fav-inner">
            <img src="/images/success.png" alt="" />
            <h2>Quý khách đã đặt hàng thành công!</h2>
            <h4>Chúng tôi sẽ liên hệ và giao hàng trong thời gian sớm nhất!</h4>
            <Link to="/" className="back-home-btn">Tiếp tục mua sắm</Link>
          </div>
        </div>
      )}
      {isAddFavWarn && (
        <div className="add-fav" onClick={() => setIsAddFavWarn(false)}>
          <div className="add-fav-inner warn">
            <h2>Sản phẩm đã có trong mục Yêu thích !</h2>
          </div>
        </div>
      )}
      {isWarningInfo && (
        <div className="add-fav" onClick={() => setIsWarningInfo(false)}>
          <div className="add-fav-inner warn">
            <h2>Thông tin của quý khách chưa đầy đủ hoặc chưa đúng.<br /> Vui lòng kiểm tra lại !</h2>
          </div>
        </div>
      )}
      {isSizeWarning && (
        <div className="add-fav" onClick={() => setIsSizeWarning(false)}>
          <div className="add-fav-inner warn">
            <h2>Vui lòng chọn size cho sản phẩm !</h2>
          </div>
        </div>
      )}
      {isWarningCartEmpty && (
        <div className="add-fav" onClick={() => setIsWarningCartEmpty(false)}>
          <div className="add-fav-inner warn">
            <h2>Giỏ hàng hiện không có sản phẩm nào !</h2>
          </div>
        </div>
      )}
      {isWarningConfirmInfo && (
        <div className="add-fav" onClick={() => setIsWarningConfirmInfo(false)}>
          <div className="add-fav-inner warn">
            <h2>Vui lòng xác nhận thông tin của quý khách !</h2>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  )
}

export default CartContainer
