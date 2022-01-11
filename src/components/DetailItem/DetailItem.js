import { useEffect, useState, useContext } from "react";

import Slider from "react-slick";

import { GlobalContext } from "../../GlobalState";

import Footer from "../Footer/Footer";

import globalFunction from "../../globalFunction";

import ActualPhoto from "../ActualPhoto/ActualPhoto";
import CartWarning from "../Cart/CartWarning";

import "./DetailItem.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../Loader/Loader";

function DetailItem({ prodId }) {
  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const settings2 = {
    dots: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [product, setProduct] = useState({
    sizes: [],
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  });
  const [desc, setDesc] = useState({});
  const [photo, setPhoto] = useState({});
  const [overlayPhoto, setOverlayPhoto] = useState();
  const [displayActualPhoto, setDisplayActualPhoto] = useState(false);
  const {
    imgLink,
    setImgLink,
    setIsDisplayNav,
    quantity,
    setQuantity,
    cart,
    setCart,
    isCartWarning,
    setIsCartWarning,
    isAddCartSuccess,
    setIsAddCartSuccess,
    isSoldOut,
    setIsSoldOut,
    isLoader,
    setIsLoader
  } = useContext(GlobalContext);

  useEffect(() => {
    setIsLoader(true)
    fetch(`https://tstoreserver.herokuapp.com/products/${prodId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product))

    setImgLink(product.image1);
    fetch(`https://tstoreserver.herokuapp.com/description/${prodId}`)
      .then((res) => res.json())
      .then((desc) => setDesc(desc))

    fetch(`https://tstoreserver.herokuapp.com/photos/${prodId}`)
      .then((res) => res.json())
      .then((photo) => setPhoto(photo))
      .then(() => setIsLoader(false));
  }, []);
  const { handlePrice } = globalFunction();
  const handleImg1 = () => {
    setImgLink(product.image1);
  };
  const handleImg2 = () => {
    setImgLink(product.image2);
  };
  const handleImg3 = () => {
    setImgLink(product.image3);
  };
  const handleImg4 = () => {
    setImgLink(product.image4);
  };

  const handleActualPhoto1 = () => {
    setDisplayActualPhoto(true);
    setIsDisplayNav(true);
    setOverlayPhoto(photo.image1 && `${photo.image1.slice(0, -11)}410x574.jpg`);
  };

  const handleActualPhoto2 = () => {
    setDisplayActualPhoto(true);
    setIsDisplayNav(true);
    setOverlayPhoto(photo.image2 && `${photo.image2.slice(0, -11)}410x574.jpg`);
  };

  const handleActualPhoto3 = () => {
    setDisplayActualPhoto(true);
    setIsDisplayNav(true);
    setOverlayPhoto(photo.image3 && `${photo.image3.slice(0, -11)}410x574.jpg`);
  };

  const handleActualPhoto4 = () => {
    setDisplayActualPhoto(true);
    setIsDisplayNav(true);
    setOverlayPhoto(photo.image4 && `${photo.image4.slice(0, -11)}410x574.jpg`);
  };

  const handleActualPhoto5 = () => {
    setDisplayActualPhoto(true);
    setIsDisplayNav(true);
    setOverlayPhoto(photo.image5 && `${photo.image5.slice(0, -11)}410x574.jpg`);
  };

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const addToCart = () => {
    let newData = [...cart];
    let check = true;

    if (product.condition === "Hết hàng") {
      setIsSoldOut(true);
    } else {
      newData.map((item) => {
        if (item.cartId === product.id) {
          check = false;
          setIsCartWarning(true);
          return item;
        }
        return item;
      });

      if (check) {
        setIsAddCartSuccess(true);
        newData.push({
          cartId: product.id,
          cartImg: product.image1,
          cartName: product.name,
          cartQuantity: quantity,
          cartPrice: product.price,
          cartSale: product.sale,
          cartStatus: product.status,
          cartCondition: product.condition,
          cartBrand: product.brand,
          cartSizes: product.sizes,
          cartMaterial: product.material,
          cartColor: product.color,
          cartChosenSize: "",
        });
      }

      setCart(newData);
    }
  };

  return (
    <div className="detail-item-container">
      {isLoader && <Loader />}
      <div className="detail-item-wrapper">
        <div className="detail-item">
          <div className="img-wrapper">
            <img
              src={imgLink || product.image1}
              alt={`product-${product.id}`}
            />
            <Slider {...settings} className="img-slider">
              <div className="item1" onClick={handleImg1}>
                <img
                  src={`${product.image1.slice(0, -11)}500x500.jpg`}
                  alt="product1"
                />
              </div>
              <div className="item2" onClick={handleImg2}>
                <img
                  src={`${product.image2.slice(0, -11)}150x150.jpg`}
                  alt="product2"
                />
              </div>
              <div className="item3" onClick={handleImg3}>
                <img
                  src={`${product.image3.slice(0, -11)}150x150.jpg`}
                  alt="product3"
                />
              </div>
              <div className="item4" onClick={handleImg4}>
                <img
                  src={`${product.image4.slice(0, -11)}150x150.jpg`}
                  alt="product4"
                />
              </div>
            </Slider>
          </div>
          <div className="info-wrapper">
            <h1 className="name">{product.name}</h1>
            <p className="material">{`Chất liệu: ${product.material}`}</p>
            <p className="color">{`Màu sắc: ${product.color}`}</p>
            <div className="price">
              <span className="cur-price">{handlePrice(product.price)}</span>
              <span className="old-price">
                {handlePrice(product.price / (1 - product.sale))}
              </span>
            </div>
            <div className="quantity">
              <span>Số lượng</span>
              <div>
                <div onClick={decrease}>–</div>
                <div>{quantity}</div>
                <div onClick={increase}>+</div>
              </div>
            </div>
            <div onClick={addToCart} className="order-btn">
              Order
            </div>
            <div className="description">
              <p>{desc.content}</p>
            </div>
            <Slider {...settings2} className="info-slider">
              <div className="photo1" onClick={handleActualPhoto1}>
                {photo.image1 && <img src={photo.image1} alt="photo1" />}
              </div>
              <div className="photo2" onClick={handleActualPhoto2}>
                {photo.image2 && <img src={photo.image2} alt="photo2" />}
              </div>
              <div className="photo3" onClick={handleActualPhoto3}>
                {photo.image3 && <img src={photo.image3} alt="photo3" />}
              </div>
              <div className="photo4" onClick={handleActualPhoto4}>
                {photo.image4 && <img src={photo.image4} alt="photo4" />}
              </div>
              <div className="photo5" onClick={handleActualPhoto5}>
                {photo.image5 && <img src={photo.image5} alt="photo5" />}
              </div>
            </Slider>
          </div>
        </div>
        {isAddCartSuccess && (
          <div className="add-fav" onClick={() => setIsAddCartSuccess(false)}>
            <div className="add-fav-inner">
              <h2>Sản phẩm đã được thêm vào giỏ hàng !</h2>
            </div>
          </div>
        )}
        {isCartWarning && <CartWarning />}
        {displayActualPhoto && <ActualPhoto overlayPhoto={overlayPhoto} />}
        {isSoldOut && (
          <div className="add-fav" onClick={() => setIsSoldOut(false)}>
            <div className="add-fav-inner warn">
              <h2>Sản phẩm tạm thời hết hàng !</h2>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default DetailItem;
