import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Item = (props)=>{
    return (<div className="flex flex-col text-xs uppercase font-bold w-[49.999%]">
        <h1 className="text-white my-4">{props.title}</h1>
        <div className="flex flex-col  ">
            {props.items.map((item, i)=>{
                return <Link key={i} className="text-white capitalize text-xs leading-4 py-2" to={item.link}>{item.title}</Link>
            })}
        </div>
    </div>)
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object),
}

Item.defaultProps ={
    items : []
}




export default Item