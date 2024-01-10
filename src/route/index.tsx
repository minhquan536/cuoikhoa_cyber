import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";
import HomeTemplate from "../templates/home/home.template";
import AuthTemplate from "../templates/auth/auth.template";

const TrangChu = lazy(() => import("../pages/trangchu/TrangChu"));
const TimKiem = lazy(() => import("../pages/timkiem/TimKiem"));
const ThongTinTaiKhoan = lazy(
  () => import("../pages/thongtintaikhoan/ThongTinTaiKhoan")
);
const QuanLyNguoiDung = lazy(
  () => import("../pages/quanlynguoidung/QuanLyNguoiDung")
);
const QuanLyKhoaHoc = lazy(
  () => import("../pages/quanglykhoahoc/QuanLyKhoaHoc")
);
const KhoaHoc = lazy(() => import("../pages/khoahoc/KhoaHoc"));
const DanhMucSanPham = lazy(
  () => import("../pages/danhmucsanpham/DanhMucKhoaHoc")
);
const DangNhap = lazy(() => import("../pages/dangnhap/DangNhap"));
const DangKy = lazy(() => import("../pages/dangky/DangKy"));
const ChiTietSanPham = lazy(
  () => import("../pages/chitietsanpham/ChiTietSanPham")
);

export const router = createBrowserRouter([
  {
    element: <HomeTemplate />,
    children: [
      {
        path: "",
        element: <TrangChu />,
      },
      {
        path: "danhmucsanpham/:idKH",
        element: <DanhMucSanPham />,
      },
      {
        path: "timkiem",
        element: <TimKiem />,
      },
      {
        path: "chitietsanpham/:makh",
        element: <ChiTietSanPham />,
      },
      {
        path: "thongtintaikhoan",
        element: <ThongTinTaiKhoan />,
      },
      {
        path: "khoahoc",
        element: <KhoaHoc />,
      },
      {
        path: "admin",
        children: [
          {
            path: "QuanLyKhoaHoc",
            element : <QuanLyKhoaHoc />
          },
          {
            path: "QuanLyNguoiDung",
            element : <QuanLyNguoiDung />
          }
        ]
      }
    ],
  },
  {
    element: <AuthTemplate/>,
    children: [
      {
        path: "dangnhap",
        element: <DangNhap />,
      },
      {
        path: "dangky",
        element: <DangKy />,
      },
    ],
  },
]);
