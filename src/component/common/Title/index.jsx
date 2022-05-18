import PropTypes from "prop-types"

const Title = (props)=>{
    return (
        <div className="flex justify-center bg-bgTitle bg-repeat-x bg-title pt-[45px] pb-3">
            <h1 className="text-2xl uppercase text-text font-normal bg-white px-2">{props.title}</h1>
        </div>
    )
}

Title.propTypes = {title: PropTypes.string.isRequired}
export default Title