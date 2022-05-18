import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const ProductItem = (props)=>{
    return (
        <div className="w-full">
            <div className="group overflow-hidden relative">
                <Link className='border-none' to={'/products/' + props.index}>
                    <img className="group-hover:scale-125 transition-all" src={props.image} alt=""/>
                </Link>
                {props.isFill &&<div className="transition-all ease-in-out flex justify-between px-3 w-full bg-white absolute bottom-[-40px] right-0 left-0 py-2 opacity-90 group-hover:bottom-0">
                    <span>Mã</span>
                    <span>{props.index}</span>
                </div>}
            </div>
            
            <div className="pt-3">
                <Link to={'/products/' + props.index} className="hover:underline block w-full text-center text-[17px] font-normal">{props.name}</Link>
                <p className="w-full text-center text-[15px] font-medium">{props.price}</p>
            </div>
        </div>
    )
}

ProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isFill: PropTypes.bool
}

ProductItem.defaultProps= {
    isFill: true,
}

export default ProductItem