import { Link } from "react-router-dom"
import { useContext, useState } from "react"

import globalFunction from "../../globalFunction"
import { GlobalContext } from "../../GlobalState"

import "./ProdItem.scss"

function ProdItem(props) {
  const { handlePrice } = globalFunction()

  const {
    cart,
    setCart,
    setIsCartWarning,
    favProducts,
    setFavProducts,
    setIsSoldOut,
  } = useContext(GlobalContext)

  const addToCart = () => {
    let newData = [...cart]
    let check = true

    if (props.condition === "Hết hàng") {
      setIsSoldOut(true)
    } else {
      newData.map((item) => {
        if (item.cartId === props.id) {
          check = false
          setIsCartWarning(true)
          return item
        }
        return item
      })

      if (check) {
        newData.push({
          cartId: props.id,
          cartImg: props.img,
          cartName: props.name,
          cartQuantity: 1,
          cartPrice: props.price,
          cartSale: props.sale,
          cartStatus: props.status,
          cartCondition: props.condition,
          cartBrand: props.brand,
          cartSizes: props.sizes,
          cartMaterial: props.material,
          cartColor: props.color,
          cartChosenSize: "",
        })
      }

      setCart(newData)
    }
  }

  const deleteFavProd = () => {
    let newData = [...favProducts]

    const filterFavProducts = newData.filter((item) => item.id !== props.id)

    setFavProducts(filterFavProducts)
  }

  return (
    <div className="col-xs-12 col-6 col-sm-6 col-md-4 col-lg-3">
      <Link to={`/detail/${props.id}`} className="prod-item">
        {props.status === "new" && (
          <img className="new-img" src="/images/icon-new.png" />
        )}
        <img src={props.img} alt="prod-item" />
        <p>{props.name}</p>
        <div className="prod-price">
          <span className="cur-price">{handlePrice(props.price)}</span>
          {props.sale !== 0 && (
            <span className="old-price">
              {handlePrice(props.price / (1 - props.sale))}
            </span>
          )}
        </div>
        <div className="status">
          <span>{props.condition === "Hết hàng" && "Hết hàng"}</span>
        </div>
      </Link>
      <div className="cart-plus-btn" onClick={addToCart}>
        <i className="fas fa-cart-plus" />
      </div>
      {props.displayTrash && (
        <div onClick={deleteFavProd} className="delete-btn fas fa-trash"></div>
      )}
    </div>
  )
}

export default ProdItem
