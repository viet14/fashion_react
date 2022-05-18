import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {ReactComponent as Dropdown} from '../../common/icon/drop-do.svg';

const SubItem = (props)=>{
    return (
        <ul className={classNames('absolute', 'bg-white' ,'block', 'top-full' , 'left-0' , 'hidden' ,'z-20','w-56', 'border-t-2', 'border-black' , 'shadow-2xl' , 'group-hover:block')}>
            {props.items.map((item,index)=>(
                <li key={index} className="grid">
                        <Link to={item.link} className="text-black px-2 py-2 hover:bg-bg-opacity hover:text-white">{item.title}</Link>
                </li>
            ))}
            
        </ul>
    )
}

const NavItem = (props)=>{
    if(props.submenu){

        return (
            <div
            className={classNames({'hidden': !props.name},'group ', 'relative' ,'uppercase', 'flex' , 'py-4' , 'px-5','font-normal', 'hover:bg-black' , 'hover:text-white')}>
            {props.name} {props.submenu && <Dropdown className="text-base w-6 h-5"/>}
            {!(props.subitem.length ===0) && <SubItem items={props.subitem}/> }
        </div>);
    }else{
        return (
            <Link to={props.link}
            className={classNames({'hidden': !props.name},'group ', 'relative' ,'uppercase', 'flex' , 'py-4' , 'px-5','font-normal', 'hover:bg-black' , 'hover:text-white')}>
            {props.name}
        </Link>)
    }
};

NavItem.defaultProps = {
    name: '',
    link: '/',
    submenu: false,
    subitem: []

}

NavItem.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string.isRequired,
    submenu: PropTypes.bool,
    subitem: PropTypes.arrayOf(PropTypes.object)
}

export default NavItem