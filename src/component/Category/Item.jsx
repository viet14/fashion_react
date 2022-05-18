import { Link } from "react-router-dom"
import PropTypes from "prop-types"
const Item= (props)=>{
    return (
        // console.log(props.item);
        <div className="w-[20%] h-28 flex items-center py-2 px-2">
            <Link to={'/category/'+props.item.categoryId} className="h-full flex items-center justify-evenly w-full bg-stone ">
                <img className="h-[50%]" src={props.item.image} alt=""/>
                <p className="font-medium text-lg capitalize">{props.item.title}</p>
            </Link>
        </div>
    )

}

Item.propTypes = {
    item: PropTypes.object.isRequired
}

export default Item