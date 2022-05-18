import classNames from "classnames";
import { useState } from "react";
import {Link} from 'react-router-dom'
import ReactImageMagnify from "react-image-magnify";

const Product = (props) => {
  const images = [
    {
      url: `${process.env.PUBLIC_URL}/product.png`,
      url1200: `${process.env.PUBLIC_URL}/product2.png`,
    },
    {
      url: `${process.env.PUBLIC_URL}/product.png`,
      url1200: `${process.env.PUBLIC_URL}/product2.png`,
    },
    {
      url: `${process.env.PUBLIC_URL}/product.png`,
      url1200: `${process.env.PUBLIC_URL}/product2.png`,
    },
    {
      url: `${process.env.PUBLIC_URL}/product.png`,
      url1200: `${process.env.PUBLIC_URL}/product2.png`,
    },
  ];
  const product = {
    name: "Áo kiểu tay dài thắt nơ A262 hoa vàng",
    price: "330.000",
    size: ["S", "M", "L", "XL", "XXL"],
    description:
      "Mẫu áo thanh lịch với chiếc nơ cách điệu gọn gàng được phô diễn trên nền chất liệu voan tơ, sẽ là một item cực kỳ thanh lịch cho các nàng công sở. Áo xinh nàng có thể kết hợp cùng tất cả các loại chân váy hoặc quần tây.",
  };
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState('');
  const handleQuantityOnChange = (e)=>{
      const number = parseInt(e.target.value)
      console.log(number);
      if (!isNaN(number)){
        setQuantity(e.target.value)
      }else {
        setQuantity('')
      }
  }

  const handleIncrement = ()=>{
      const q = quantity
      console.log(typeof (q+1))
      setQuantity(q+1)
  }
  const handleReduction = ()=>{
      const q = quantity
      if(q>1){
        setQuantity(q-1) 
      }
  }
  return (
    <div className="flex max-w-[80%] with-full m-auto py-7">
      <div className="w-[55%] flex pr-2">
        <div className="w-[15%] px-[15px]">
          {images.map((item, i) => {
            return <img className="mb-2" key={i} src={item.url} alt="" />;
          })}
        </div>
        <div className="w-[85%]">
          {/* <img className="max-h-[1350px] max-w-[900px]" src={images[0].url} alt=""/> */}
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: images[0].url,
              },
              largeImage: {
                src: images[0].url1200,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </div>
      </div>
      <div className="w-[45%] mx-5">
        <div className="border-b border-[#ccc] border-dashed">
          <h1 className="text-[28px] pt-2">{product.name}</h1>
          <p className="text-[25px] font-semibold pb-3">{product.price + "₫"}</p>
        </div>
        <div className="py-3">
          <h1 className="text-[15px] font-semibold uppercase leading-8">Kích thước</h1>
          <div className="flex py-1">
            {product.size.map((item, i) => {
              return (
                <div
                  key={i}
                  className={classNames(
                    "cursor-pointer px-5 mr-3 rounded-2xl border-[#e6e6e6] border-[1px] hover:shadow-size",
                    { "shadow-size": size === i }
                  )}
                  onClick={() => {
                    setSize(i);
                  }}
                >
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
          <Link className="text-[15px] py-5 block" to="">Hướng dẫn chọn size</Link>
        </div>
        <div>
          <div className=" inline-flex border border-[#212121] rounded-3xl max-w-[166px] relative  items-center">
            <div  className="absolute cursor-pointer leading-10 h-10 px-3 top-0 left-0"
                  onClick={handleReduction()}> - </div>
              
              <input  className="outline-0 leading-[39px] border-0 bg-transparent text-center text-zinc-500" 
                      type="text"
                      value={quantity}
                      onChange={(e)=>{handleQuantityOnChange(e)}}></input>
            <div  className="absolute cursor-pointer leading-10 h-10 px-3 top-0 right-0"
                  onClick={()=>{handleIncrement()}}> + </div>
          </div>
          <div>
            <button>Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
