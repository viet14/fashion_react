import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper";
import ProductItem from "../common/ProductItem";
import Title from "../common/Title";
import { Link } from "react-router-dom";

const NewProduct = (props) => {
  const products = [
    {
      name: "Đầm xòe đi tiệc",
      price: "660.000",
      index: "460",
      image: `${process.env.PUBLIC_URL}product.png`,
    },
    {
      name: "Đầm xòe đi tiệc",
      price: "660.000",
      index: "460",
      image: `${process.env.PUBLIC_URL}product.png`,
    },
    {
      name: "Đầm xòe đi tiệc",
      price: "660.000",
      index: "460",
      image: `${process.env.PUBLIC_URL}product.png`,
    },
    {
      name: "Đầm xòe đi tiệc",
      price: "660.000",
      index: "460",
      image: `${process.env.PUBLIC_URL}product.png`,
    },
    {
      name: "Đầm xòe đi tiệc",
      price: "660.000",
      index: "460",
      image: `${process.env.PUBLIC_URL}product.png`,
    },
    {
      name: "Đầm xòe đi tiệc",
      price: "660.000",
      index: "460",
      image: `${process.env.PUBLIC_URL}product.png`,
    },
  ];
  return (
    <div>
      <Title title="Sản phẩm mới" />
      <div className="py-2">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, FreeMode]}
        >
          {products.map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductItem
                  name={product.name}
                  price={product.price}
                  index={product.index}
                  image={product.image}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex mt-12">
          <div className="w-[50%] px-4">
            <Link to="/sale">
                <img src={process.env.PUBLIC_URL+'/banner_home_1.png'} alt=""/>
            </Link>
          </div>
          <div className="w-[50%] px-4">
              <Link to="/size-shacks">
                <img src={process.env.PUBLIC_URL+'/banner_home_2.png'} alt=""/>
              </Link>
          </div>
      </div>
    </div>
  );
};

export default NewProduct;
