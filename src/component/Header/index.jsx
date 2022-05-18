import { Link } from "react-router-dom";
import {ReactComponent as Heart} from "../common/icon/heart.svg"
import {ReactComponent as User} from "../common/icon/user.svg";
import {ReactComponent as Cart} from "../common/icon/cart.svg"
import NavItem from "./NavItem";
import { useState } from "react";
import classNames from "classnames";
const Header = (props) => {
  const order= 0;
  const items = [{title: "Đầm công sở" , link: "/dam-cong-so"}, {title: "Áo dài" , link: "/ao-dai"}]
  const [scrollY , setScrollY] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submit")
  }
  window.onscroll = () => {
    setScrollY(window.scrollY)
  }


  return (
    <div>
      <div className={classNames("flex bg-black justify-center py-[10px] z-20" , {'hidden': scrollY>0})}>
        <span className="text-white text-sm">Miễn phí vận chuyển mọi đơn hàng trên 500.000 VNĐ</span>
      </div>
      <header className={classNames(' z-20 flex justify-center w-full opacity-70 bg-black py-5', {'fixed top-0': scrollY!==0})}>
        <div className="max-w-[80%] w-full flex justify-between items-center">
          <div className="">
            <Link to="/">
              <img className="w-40" src={process.env.PUBLIC_URL+'/logo.png'} alt=""/>
            </Link>
          </div>
          <div className="w-full max-w-xl z-20">
            <div className="bg-white py-2 rounded-3xl">
              <form onSubmit={handleSubmit}>
                <div className="flex">
                  <button className="px-3" type="submit">
                    <img className="w-4 h-4" src={process.env.PUBLIC_URL+'/searching.png'} alt=""/>
                  </button>
                  <div className="flex-grow">
                    <input className="w-full px-6 bg-transparent outline-none" type="text" placeholder="Nhập từ khóa tìm kiếm ..."/>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex">
            <div className="px-4">
              <Link to="/albums">
                <div className="flex justify-center">
                  <Heart className="w-7"/>
                </div>
                <span className="text-white font-normal">Sưu tập</span>
              </Link>
              
            </div>
            <div className="px-4">
              <Link to="/accounts">
                <div className="flex justify-center">
                  <User className="w-7"/>
                </div>
                <span className="text-white font-normal">Tài khoản</span>
              </Link>
              
            </div>
            <div className="px-4">
              <Link to="/cart">
                <div className="flex justify-center relative">
                  <Cart className="w-7"/>
                  <div className="absolute w-6 h-6 rounded-full text-white bg-red 
                              flex justify-center right-2 top-[-6px]">
                    {order}
                  </div>
                </div>
                <span className="text-white font-normal">Giỏ hàng</span>
              </Link>
              
            </div>
            
          </div>
        </div>
      </header>
      <div className={classNames("shadow-header flex justify-center", {'hidden': scrollY>0})}>
        <div className="max-w-[80%] w-full flex justify-start items-center">
          <NavItem name="Thời trang" submenu={true} subitem={items}/>
          <NavItem name="Khuyến mãi" link='/promotion'/>
          <NavItem name="Tin tức" submenu={true} subitem={items}/>
          <NavItem name="Hệ thống đại lý" link='/agency' />
          <NavItem name="Hệ thống SHowroom" link='/showroom'/>
        </div>
      </div>
    </div>
  );
};
export default Header;
