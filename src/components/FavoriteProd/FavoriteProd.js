import { useContext } from "react";

import { GlobalContext } from "../../GlobalState";

import CartWarning from "../Cart/CartWarning";
import Footer from "../Footer/Footer";
import ProdItem from "../ProdItem/ProdItem";

import "./FavoriteProd.scss";

function FavoriteProd() {
  const { favProducts, isCartWarning } = useContext(GlobalContext);
  return (
    <div className="favorite-container">
      <div className="row">
        {favProducts.length === 0 ? (
          <div className="empty">
              <h1>Bạn không có sản phẩm yêu thích nào !</h1>
          </div>
        ) : (
          favProducts.map((item) => (
            <ProdItem
              key={item.id}
              id={item.id}
              name={item.name}
              condition={item.condition}
              status={item.status}
              price={item.price}
              sale={item.sale}
              img={item.img}
              brand={item.brand}
              sizes={item.sizes}
              material={item.material}
              color={item.color}
              displayTrash
            />
          ))
        )}
      </div>
      <Footer />
      {isCartWarning && <CartWarning />}
    </div>
  );
}

export default FavoriteProd;
