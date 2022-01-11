import { useEffect, useContext } from "react";

import { GlobalContext } from "../../GlobalState";
import CartWarning from "../Cart/CartWarning";
import Footer from "../Footer/Footer";

import ProdItem from "./ProdItem";

import "./ProdItem.scss";

function ProdItemContainer({ quantity, seeMore, setSeeMore }) {
  const { products, setProducts, setIsLoader } = useContext(GlobalContext);

  useEffect(() => {
    setIsLoader(true)
    fetch("https://tstoreserver.herokuapp.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products))
      .then(() => setIsLoader(false))
  }, []);

  const handleSeeMore = () => {
    setSeeMore(true);
  };

  const { isCartWarning, isSoldOut, setIsSoldOut } = useContext(GlobalContext)

  return (
    <div className="prods-container">
      <div className="container wide">
        <div className="row">
          {products.map((product, index) => {
            if (index < (seeMore ? 24 : quantity)) {
              return (
                <ProdItem
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  condition={product.condition}
                  status={product.status}
                  price={product.price}
                  sale={product.sale}
                  img={product.image1}
                  brand={product.brand}
                  sizes={product.sizes}
                  material={product.material}
                  color={product.color}
                />
              );
            }
            return <div key={product.id} className="empty"></div>
          })}
          {!seeMore && (
            <p onClick={handleSeeMore} className="see-more">
              Xem thêm...
            </p>
          )}
        </div>
      </div>
      {isSoldOut && (
        <div className="add-fav" onClick={() => setIsSoldOut(false)}>
          <div className="add-fav-inner warn">
            <h2>Sản phẩm tạm thời hết hàng !</h2>
          </div>
        </div>
      )}
      {isCartWarning && <CartWarning />}
      <Footer />
    </div>
  );
}

export default ProdItemContainer;
