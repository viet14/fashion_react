import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../common/icon/facebook.svg";
import { ReactComponent as Sms } from "../common/icon/sms.svg";
import { ReactComponent as Twitter } from "../common/icon/twitter.svg";
import { ReactComponent as YouTube } from "../common/icon/youtube.svg";
import { ReactComponent as Pinterest } from "../common/icon/pinterest.svg";

import Item from "./Item";
import { useState } from "react";

const Footer = (props) => {
  const [email, setEmail] = useState("");

  const list1 = [
    { link: "/brand-story", title: "Câu Chuyện Thương Hiệu" },
    { link: "/security", title: "CHính sách bảo mật" },
    { link: "/brand-story", title: "Sứ mệnh - Tầm nhìn" },
  ];

  const list2 = [
    { link: "/", title: "Giao hàng - Thanh toán" },
    { link: "/", title: "Hướng Dẫn Chọn Size" },
    { link: "/", title: "Hướng Dẫn Đổi Sản Phẩm" },
    { link: "/", title: "Hướng Dẫn mua hàng" },
  ];

  return (
    <div>
      <div className="w-full border-t-[3px] border-black flex justify-center">
        <div className="max-w-[80%] w-full flex justify-between p-[13px]">
          <div className="flex items-center px-3">
            <div className="bg-bgFooter w-[58px] h-14"></div>
            <div className="pl-2">
              <p className="text-[15px] font-medium uppercase mb-1">
                Thiết kế độc quyền
              </p>
              <span className="text-[13px] capitalize">Sản phẩm thật - Không ảnh mạng</span>
            </div>
          </div>
          <div className="w-[0.8px] bg-black"></div>
          <div className="flex items-center px-3">
            <div className="bg-bgFooter w-[58px] h-14 bg-car"></div>
            <div className="pl-2">
              <p className="text-[15px] font-medium uppercase mb-1">
                giao hàng toàn quốc
              </p>
              <span className="text-[13px] capitalize">Được kiểm tra trước</span>
            </div>
          </div>
          <div className="w-[0.8px] bg-black"></div>
          <div className="flex items-center px-3">
            <div className="bg-bgFooter w-[58px] h-14 bg-money"></div>
            <div className="pl-2">
              <p className="text-[15px] font-medium uppercase mb-1">
                Thanh toán khi nhận
              </p>
              <span className="text-[13px] capitalize">Giao nhanh - Uy tín - An toàn</span>
            </div>
          </div>
          <div className="w-[0.8px] bg-black"></div>
          <div className="flex items-center px-3">
            <div className="bg-bgFooter w-[58px] h-14 bg-connect"></div>
            <div className="pl-2">
              <p className="text-[15px] font-medium uppercase mb-1">
                Hỗ trợ đổi hàng
              </p>
              <span className="text-[13px] capitalize">CSKH Sẽ Tư Vấn Hình Thức Đổi</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-footer w-full py-4">
        <div className="max-w-[80%] w-full flex justify-center m-auto">
          <div className="w-[25%] flex flex-col ">
            <h1 className="text-white  text-xs font-bold mt-4  mb-3 uppercase">
              CÔNG TY TNHH - TMDV VIETNam
            </h1>
            <p className="text-white text-[14px]">
              Showroom: 505 Lũy Bán Bích, <br />
              P.Phú Thạnh, Q.Tân Phú, HCM
              <br />
              Hotline:0987 567 614 <br />
              Mail: hotro@guco.vn
            </p>
          </div>
          <div className="w-[33.333%] flex">
            <Item title="GIỚI THIỆU GUCO.VN" items={list1} />
            <Item title="Hỗ trợ khách hàng" items={list2} />
          </div>
          <div className="w-[41.666%] flex flex-col">
            <h1 className="text-white  text-xs font-bold mt-4  mb-3 uppercase">
              Kết nối với chúng tôi
            </h1>
            <div className="flex mb-[2px]">
              <div className="w-14">
                <Link to="">
                  <Facebook className="m-auto" />
                </Link>
              </div>
              <div className="w-14">
                <Link to="">
                  <Sms className="m-auto" />
                </Link>
              </div>
              <div className="w-14">
                <Link to="">
                  <YouTube className="m-auto" />
                </Link>
              </div>
              <div className="w-14">
                <Link to="">
                  <Twitter className="m-auto" />
                </Link>
              </div>
              <div className="w-14">
                <Link to="">
                  <Pinterest className="m-auto" />
                </Link>
              </div>
            </div>
            <h1 className="text-white  text-xs font-bold mt-4  mb-3 uppercase">
              ĐĂNG KÝ EMAIL NHẬN KHUYẾN MÃI
            </h1>
            <div className="flex bg-white p-[2px]">
              <input
                type="text"
                className="flex-grow outline-none px-4"
              ></input>
              <button
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="bg-black uppercase px-7 py-2 text-white text-[13px]"
              >
                Đăng ký
              </button>
            </div>
            <h1 className="text-white  text-xs font-bold mt-4  mb-3 uppercase">
              CHẤP NHẬN THANH TOÁN
            </h1>
            <div className="flex">
              <img
                className="h-6 mr-5"
                src={process.env.PUBLIC_URL + "/cod.png"}
                alt=""
              />
              <img
                className="h-6 mr-5"
                src={process.env.PUBLIC_URL + "/visa.png"}
                alt=""
              />
              <img
                className="h-6 mr-5"
                src={process.env.PUBLIC_URL + "/mastercad.png"}
                alt=""
              />
              <img
                className="h-6 mr-5"
                src={process.env.PUBLIC_URL + "/maestro.png"}
                alt=""
              />
              <img
                className="h-6 mr-5"
                src={process.env.PUBLIC_URL + "/american.png"}
                alt=""
              />
              <img
                className="h-6 mr-5"
                src={process.env.PUBLIC_URL + "/jcb.png"}
                alt=""
              />
              <img
                className="h-6 mr-5"
                src={process.env.PUBLIC_URL + "/paypal.png"}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="max-w-[80%] w-full flex justify-between m-auto pt-2">
          <p className="text-white text-xs">
            ©2015-2022 GUCO bảo lưu tất cả các quyền
          </p>
          <div className="">
            <img
              className="w-20"
              src={process.env.PUBLIC_URL + "/bocongthuong-dathongbao.png"}
              alt=""
            ></img>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
