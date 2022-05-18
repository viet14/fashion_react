import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Pagination, EffectFade, Autoplay } from "swiper";


const Slider = (props)=>{
    const image = [process.env.PUBLIC_URL+'banner02.png' , process.env.PUBLIC_URL+'banner01.png']
    return(
        <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,EffectFade, Pagination]}
        className="mySwiper"
      >
          {image.map((img , i) =>(
            <SwiperSlide key={i} className='w-full'>
                <img className='w-full' src={img} alt=""/>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
    )
}
export default Slider