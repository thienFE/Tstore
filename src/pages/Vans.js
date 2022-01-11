import { useEffect } from "react";
import { useContext } from "react";

import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import ProdItem from "../components/ProdItem/ProdItem";
import { GlobalContext } from "../GlobalState";

function Vans() {
  const { brandItems, setBrandItems, isLoader, setIsLoader } =
    useContext(GlobalContext);

  useEffect(() => {
    setIsLoader(true)
    fetch("https://tstoreserver.herokuapp.com/products")
      .then((res) => res.json())
      .then((brandItems) => setBrandItems(brandItems))
      .then(() => setIsLoader(false));
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="prods-container brand-container">
        <div className="brand-banner">
          <img src="/images/vans_banner.jpg" alt="vans banner" />
        </div>
        <div className="container wide">
          <div className="row">
            {brandItems.map((brandItem) => {
              if (brandItem.brand === "vans") {
                return (
                  <ProdItem
                    key={brandItem.id}
                    id={brandItem.id}
                    name={brandItem.name}
                    condition={brandItem.condition}
                    status={brandItem.status}
                    price={brandItem.price}
                    sale={brandItem.sale}
                    img={brandItem.image1}
                    brand={brandItem.brand}
                    sizes={brandItem.sizes}
                    material={brandItem.material}
                    color={brandItem.color}
                  />
                );
              }
            })}
          </div>
        </div>
        <Footer />
      </div>
      {isLoader && <Loader />}
    </>
  );
}

export default Vans;
