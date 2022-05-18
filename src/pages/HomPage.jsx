import BestSelling from "../component/BestSelling"
import Category from "../component/Category"
import NewProduct from "../component/NewProduct"
import Slider from "../component/Slider"
import NewsSlider from "../component/NewsSlider"

const HomePage = ()=>{
    return (
        <div>
            <Slider/>
            <div className="w-full max-w-[80%] mx-auto">
                <Category/>
                <NewProduct/>
                <BestSelling/>
                <NewsSlider/>
            </div>
        </div>
    )
}
export default HomePage