
import { Link } from "react-router-dom"
import ProductItem from "../common/ProductItem";
import Title from "../common/Title"

const BestSelling = (props)=>{
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
            <Title title='top sản phẩm bán chạy'/>
            <div className="mt-5 mb-[30px]  px-[15px]">
                <Link to={'/best-selling'}>
                    <img className="w-full" src={process.env.PUBLIC_URL +'/best_selling_banner1.png'} alt=''/>
                </Link>
            </div>
            <div className="flex flex-wrap px-[7px]">
                {products.map((product, index) =>{
                    return <div className="w-[25%] px-2 py-3" key={index}>
                    <ProductItem 
                    className="w-[25%]"
                    name={product.name}
                    price={product.price}
                    index={product.index}
                    isFill={false}
                    image={product.image}/>
                    </div>
                    
                })}
            </div>
            <div className="mt-10 px-[15px]">
                <Link to={'/best-selling'}>
                    <img className="w-full" src={process.env.PUBLIC_URL +'/best_selling_banner2.png'} alt=''/>
                </Link>
            </div>
        </div>
    )
}

export default BestSelling