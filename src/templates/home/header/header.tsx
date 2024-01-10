import React, { useState, useEffect } from "react";
import * as S from "./headercss";
import { Link, useNavigate } from "react-router-dom";

import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { IIFE, removeLocal } from "../../../utils";
import { layDanhSachKhoaHoc } from "../../../services/product.service";
import { useAppSelector } from "src/redux/hooks";
import { TOKEN_USER } from "src/contants";
import { useDispatch } from "react-redux";
import { setLogin } from "src/redux/userSlice";

import logo from "src/assets/img/logo-cyber-nav.svg";

// function useDanhSach() {
//   const [ds, setDs] = useState([])
//   useEffect(()=>{
//     IIFE(async()=>{
//       const resp = await layDanhSachKhoaHoc();
//       setDs(resp);
//     })
//   },[])
//   console.log(ds)
//   return (
//     <div>
//     </div>
//   )
// }
function Show({ when, fallback, children}: any) {
  return when ? children : fallback;
}

export default function Header() {
  const {login} = useAppSelector((rootReducer) => rootReducer.cartsReducer)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // const handleNavigate = (a) => {
  //   navigate(`/danhmucsanpham/${a}`)
  // }

  const [ds, setDs] = useState([]);
  useEffect(() => {
    IIFE(async () => {
      const resp = await layDanhSachKhoaHoc();
      setDs(resp);
    });
  }, []);
  // console.log(ds);

  const items: MenuProps["items"] = [
    {
      label: (
        <div>
          {ds.map((a) => {
            return (
              <>
                <Link to={"/danhmucsanpham/"+a.maDanhMuc} >{a.tenDanhMuc}</Link>
                <br />
              </>
            );
          })}
        </div>
      ),
      key: "",
    },
  ];

  const menuProps = {
    items,
  };
  return (
    <S.header>
      <div className="w-52">
        <Link to=""><img className="w-cover object-cover" src={logo} alt="" /></Link>
      </div>

      <div>
        <Space wrap>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Khoa Hoc
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
      </div>
      <div className="max-sm:hidden ">
        <input className="rounded-xl px-5 py-2" type="text" placeholder="tìm kiếm khóa học"/>
      </div>
      <S.dangky>
        <button className="bg-[#A9B388] px-3 py-2 rounded-xl">
          <Show
            when={login.taiKhoan}
            fallback={
              <Link to="dangnhap" className="bg-[#A9B388] px-3 py-2 rounded-xl">dang nhap</Link>
            }
          >
            <Link to="thongtintaikhoan">{login.taiKhoan}</Link>
          </Show>
        </button>
        <button className="bg-[#A9B388] px-3 py-2 rounded-xl">
          <Show
            when={!login.taiKhoan}
            fallback={
              <button
              onClick={()=> {
                navigate("dangnhap");

                removeLocal(TOKEN_USER);

                dispatch(
                  setLogin({
                    taiKhoan : "",
                  })
                )
              }}
              >
                Logout
              </button>
            }
          >
            <Link to="dangky" className="bg-[#A9B388] px-3 py-2 rounded-xl">
                Dang Ky
            </Link>
          </Show>
        </button>
      </S.dangky>
    </S.header>
  );
}
