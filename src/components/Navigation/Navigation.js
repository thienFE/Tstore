import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { GlobalContext } from "../../GlobalState";

import "./Navigation.scss";

function Navigation() {
  const { isHideNav, setIsHideNav, cart, isUpdatedFavorite, setIsUpdatedFavorite, favProducts } = useContext(GlobalContext);

  const hideNav = () => {
    setIsHideNav(true);
  };

  const handleFavNav = () => {
    hideNav()
    setIsUpdatedFavorite(false)
  }

  return (
    <div className={`navigation-bar ${isHideNav && "hide"}`}>
      <NavLink onClick={hideNav} className="nav-item" to="/">
        <i className="fas fa-home" />
        <p>Home</p>
      </NavLink>
      <NavLink onClick={hideNav} className="nav-item cart" to="/cart">
        {cart.length !== 0 && <p className="quantity">{cart.length < 100 ? cart.length : "99+"}</p>}
        <i className="fas fa-shopping-cart" />
        <p>Cart</p>
      </NavLink>
      <NavLink onClick={handleFavNav} className="nav-item favorite" to="/favorite">
        <i className="fas fa-heart" />
        {isUpdatedFavorite && <div className="updated-circle"></div>}
        <p>Yêu thích</p>
      </NavLink>
      <NavLink onClick={hideNav} className="nav-item" to="/converse">
        <i className="far fa-copyright" />
        <p>Converse</p>
      </NavLink>
      <NavLink onClick={hideNav} className="nav-item" to="/vans">
        <i className="fab fa-vuejs" />
        <p>Vans</p>
      </NavLink>
      <a href="/choose-size/size.html" target="_blank" onClick={hideNav} className="nav-item">
        <i className="fab fa-pushed"></i>
        <p>Hướng dẫn chọn size</p>
      </a>
    </div>
  );
}

export default Navigation;
