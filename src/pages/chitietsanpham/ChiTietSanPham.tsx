import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IIFE } from "../../utils";
import { chiTietKhoaHoc, layDanhSach } from "../../services/product.service";
import { useAppSelector } from "src/redux/hooks";
import { dangKyKhoaHoc } from "src/services/user.service";
import { ThongTinKhoaHoc } from "./type";
import DanhSachKhoaHoc from "../trangchu/danhsachkhoahoc/DanhSachKhoaHoc";
import { useScrollToTop } from "src/hooks/useScrollToTop";

interface props {
  when: string;
  fallback: JSX.Element;
  children: JSX.Element;
}
function Show({ when, fallback, children }: props) {
  return when ? children : fallback;
}

export default function ChiTietSanPham() {
  const { login } = useAppSelector((rootReducer) => rootReducer.cartsReducer);
  // console.log(login)
  const [noidung, setNoiDung] = useState<ThongTinKhoaHoc | null>(null);

  const [dangKy, setDangKy] = useState({
    maKhoaHoc: "",
    taiKhoan: "",
  });
  const [danhSach, setDanhSach] = useState([]);

  const nav = useNavigate();

  const params = useParams();
  const params_khoahoc = useParams();
  // console.log(params)
  
  // dùng để croll top khi thay đổi hook
  useScrollToTop()
  
  useEffect(()=>{
    IIFE(async()=>{
      const resp = await layDanhSach();
      // console.log(resp)
      setDanhSach(resp);
    })
  },[params_khoahoc.makh])

  
  const hanldeNavi = () => {
    nav(`/dangnhap`);
  };
  

  useEffect(() => {
    IIFE(async () => {
      const resp = await chiTietKhoaHoc(params.makh);
      // console.log(resp)
      setNoiDung(resp);
      setDangKy({
        maKhoaHoc: resp.maKhoaHoc,
        taiKhoan: login.taiKhoan,
      });
    });
  }, [params.makh]);
  // console.log(dangKy)
  // console.log(params)
  // console.log(noidung);
  return (
    <>
      <div className="grid max-sm:grid-cols-1 grid-cols-2 p-8 gap-8 justify-items-center">
        <div>
          <img
            className="object-cover h-96 items-end"
            src={noidung?.hinhAnh}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-gray-900">
            {noidung?.tenKhoaHoc}
          </h1>
          <p className="text-gray-700">{noidung?.moTa}</p>
          <h3 className="text-3xl font-bold text-gray-900">
            {noidung?.ngayTao}
          </h3>
          <h4 className="text-red-600">
            so luong dang ky: {noidung?.soLuongHocVien}
          </h4>

          <Show
            when={login.taiKhoan}
            fallback={
              <button
                onClick={hanldeNavi}
                className="bg-gray-900 text-white py-3 px-6"
              >
                Dang Nhap De Dang Ky
              </button>
            }
          >
            <button
              type="submit"
              onClick={() => {
                dangKyKhoaHoc(dangKy)
                  .then(() => {
                    alert(" dang ky thanh cong");
                  })
                  .catch(() => {
                    alert(" dang ky khong thanh cong");
                  });
              }}
              className="bg-gray-900 text-white py-3 px-6"
            >
              tài khaorn đã có, nhấn là đăng ký
            </button>
          </Show>
        </div>
      </div>
      <div>
        <DanhSachKhoaHoc data={danhSach}/>
      </div>
    </>
  );
}
