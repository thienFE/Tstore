import { createContext, useState } from "react"

export const GlobalContext = createContext()

function GlobalState({ children }) {
  const [products, setProducts] = useState([])

  const [productId, setProductId] = useState()

  const [favProducts, setFavProducts] = useState(JSON.parse(localStorage.getItem("favProds")) || [])
  localStorage.setItem("favProds", JSON.stringify(favProducts))

  const [brandItems, setBrandItems] = useState([])

  const [isHideNav, setIsHideNav] = useState(true)

  const [isDisplayNav, setIsDisplayNav] = useState(false)

  const [imgLink, setImgLink] = useState("")

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  )
  localStorage.setItem("cart", JSON.stringify(cart))

  const [isCartWarning, setIsCartWarning] = useState(false)

  const [isRemoveWarning, setIsRemoveWarning] = useState(false)

  const [isAddFavSuccess, setIsAddFavSuccess] = useState(false)

  const [isAddCartSuccess, setIsAddCartSuccess] = useState(false)

  const [isAddFavWarn, setIsAddFavWarn] = useState(false)

  const [isUpdatedFavorite, setIsUpdatedFavorite] = useState(JSON.parse(localStorage.getItem("isUpdated")))
  localStorage.setItem("isUpdated", JSON.stringify(isUpdatedFavorite))

  const [quantity, setQuantity] = useState(1)

  const [cusInfo, setCusInfo] = useState({})

  const [errors, setErrors] = useState({})

  const [confirmInfo, setConfirmInfo] = useState(false)

  const [letSubmit, setLetSubmit] = useState(false)

  const [isWarningInfo, setIsWarningInfo] = useState(false)

  const [isWarningConfirmInfo, setIsWarningConfirmInfo] = useState(false)

  const [isSizeWarning, setIsSizeWarning] = useState(false)

  const [isLoader, setIsLoader] = useState(true)

  const [cartSizeWarnings, setCartSizeWarnings] = useState({})

  const [isOrderSuccess, setIsOrderSuccess] = useState(false)

  const [orderedProds, setOrderedProds] = useState([])

  const [isSoldOut, setIsSoldOut] = useState(false)

  const [isWarningCartEmpty, setIsWarningCartEmpty] = useState(false)

  return (
    <GlobalContext.Provider
      value={{
        isHideNav,
        setIsHideNav,
        isDisplayNav,
        setIsDisplayNav,
        products,
        setProducts,
        brandItems,
        setBrandItems,
        imgLink,
        setImgLink,
        cart,
        setCart,
        isCartWarning,
        setIsCartWarning,
        isRemoveWarning,
        setIsRemoveWarning,
        productId,
        setProductId,
        favProducts,
        setFavProducts,
        isAddFavSuccess,
        setIsAddFavSuccess,
        isAddCartSuccess,
        setIsAddCartSuccess,
        isAddFavWarn,
        setIsAddFavWarn,
        isUpdatedFavorite,
        setIsUpdatedFavorite,
        quantity,
        setQuantity,
        cusInfo,
        setCusInfo,
        errors, 
        setErrors,
        confirmInfo,
        setConfirmInfo,
        letSubmit,
        setLetSubmit,
        isWarningInfo,
        setIsWarningInfo,
        isSizeWarning,
        setIsSizeWarning,
        cartSizeWarnings,
        setCartSizeWarnings,
        isWarningConfirmInfo,
        setIsWarningConfirmInfo,
        isOrderSuccess,
        setIsOrderSuccess,
        orderedProds,
        setOrderedProds,
        isSoldOut,
        setIsSoldOut,
        isLoader,
        setIsLoader,
        isWarningCartEmpty,
        setIsWarningCartEmpty
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
