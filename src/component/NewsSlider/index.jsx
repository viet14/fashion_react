import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper";
import Title from "../common/Title";
import { Link } from "react-router-dom";

const NewsSlider = (props) => {
  const news = [
    {
      id: "n123",
      title: "Đầm voan mùa hè quyến rũ và thoải mái",
      description:
        "Hôm nay chúng ta hãy cùng nhau tìm hiểu và tham khảo thêm các thiết kế đầm voan mùa hè quyến rũ và thoải mái của nhà GUCO nhé.",
      time: "05-05-2022",
      thumbnail: `${process.env.PUBLIC_URL}news.png`,
    },
    {
      id: "n123",
      title: "Đầm voan mùa hè quyến rũ và thoải mái",
      description:
        "Hôm nay chúng ta hãy cùng nhau tìm hiểu và tham khảo thêm các thiết kế đầm voan mùa hè ",
      time: "05-05-2022",
      thumbnail: `${process.env.PUBLIC_URL}news.png`,
    },
    {
      id: "n123",
      title: "Đầm voan mùa hè quyến rũ và thoải mái",
      description:
        "Hôm nay chúng ta hãy cùng nhau tìm hiểu và tham khảo thêm các thiết kế đầm voan mùa hè ",
      time: "05-05-2022",
      thumbnail: `${process.env.PUBLIC_URL}news.png`,
    },
    {
      id: "n123",
      title: "Đầm voan mùa hè quyến rũ và thoải mái",
      description:
        "Hôm nay chúng ta hãy cùng nhau tìm hiểu và tham khảo thêm các thiết kế đầm voan mùa hè ",
      time: "05-05-2022",
      thumbnail: `${process.env.PUBLIC_URL}news.png`,
    },
    {
      id: "n123",
      title: "Đầm voan mùa hè quyến rũ và thoải mái",
      description:
        "Hôm nay chúng ta hãy cùng nhau tìm hiểu và tham khảo thêm các thiết kế đầm voan mùa hè ",
      time: "05-05-2022",
      thumbnail: `${process.env.PUBLIC_URL}news.png`,
    },
    {
      id: "n123",
      title: "Đầm voan mùa hè quyến rũ và thoải mái",
      description:
        "Hôm nay chúng ta hãy cùng nhau tìm hiểu và tham khảo thêm các thiết kế đầm voan mùa hè quyến rũ và thoải mái của nhà GUCO nhé.",
      time: "05-05-2022",
      thumbnail: `${process.env.PUBLIC_URL}news.png`,
    },
  ];

  return (
    <div>
      <Title title="Tin tức" />
      <div className="py-2 mb-10">
        <Swiper
          slidesPerView={3}
          //   autoHeight={true}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, FreeMode]}
        >
          {news.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="border border-solid border-black/[.06] ">
                  <div>
                    <Link to={"/news/" + item.id}>
                      <img src={item.thumbnail} alt="" />
                    </Link>
                  </div>
                  <div className="flex mx-1.5 my-[16px]">
                    <div>
                      <div className="w-9">
                        <span className="flex bg-white rounded-t justify-center">
                          {item.time.split("-")[0]}
                        </span>
                        <span className="flex bg-black text-white rounded-b justify-center">
                          {item.time.split("-")[1]}
                        </span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h1 className="text-base uppercase font-medium mb-2">
                        {item.title}
                      </h1>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default NewsSlider;
