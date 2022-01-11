import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Banner.scss";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoPlaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <div className="item1">
            <img src="/images/banner1.jpg" alt="banner1" />
        </div>
        <div className="item2">
            <img src="/images/banner2.jpg" alt="banner2" />
        </div>
        <div className="item3">
            <img src="/images/banner3.jpg" alt="banner3" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
