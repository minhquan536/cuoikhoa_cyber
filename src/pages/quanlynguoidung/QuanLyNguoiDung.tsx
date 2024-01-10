import React, { useEffect, useState } from "react";
import { Pagination, Table } from "antd";
import { IIFE } from "src/utils";
import { danhSachNguoiDung, xoaNguoiDung } from "src/services/admin.service";
import { NavLink } from "react-router-dom";
import PopupThemNguoiDung from "./popupThem/popupThem";
// import 'antd/dist/antd.css';

export default function QuanLyNguoiDung() {
  const [currentPage, setCurrentPage] = useState(1);

  const [dsNguoiDung, setDsNguoiDung] = useState([]);

  const [xoaND, setXoaNguoiDung] = useState();

  useEffect(() => {
    IIFE(async () => {
      const resp = await danhSachNguoiDung();
      setDsNguoiDung(resp);
    });
  }, []);

  // console.log(dsNguoiDung);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Thực hiện các thao tác cần thiết khi chuyển trang
  };
  const ds = [];
  dsNguoiDung.map((data) => {
    return ds.push(data);
  });
  //! xử lý lỗi
  // const handleThayDoi = () => {
  //   const vitri = ds.find((index)=>{
  //     return index
  //   })
  //   console.log(vitri)
  // }

  console.log(xoaND);
  useEffect(() => {
    IIFE(async () => {
      xoaNguoiDung(xoaND)
        .then(() => {
          alert("Xóa Thành Công");
        })
        .catch(() => {
          console.log("xóa không thành công");
        });
    });
  }, [xoaND]);

  // Các cột của bảng
  const columns = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDt",
      key: "soDt",
    },
    {
      title: "Mã Người Dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
    },
    {
      title: "Chức Năng",
      render: (record) => (
        <div className="flex gap-5">
          {/* <button onClick={() => handleButtonClick(record)}>thêm</button> */}
          <button
            onClick={() => {
              setXoaNguoiDung(record.taiKhoan);
            }}
          >
            Xóa
          </button>
        </div>
      ),
      key: "chucNang",
    },
  ];

  // Số mục trên mỗi trang
  const pageSize = 10;

  // Tính toán vị trí bắt đầu của dữ liệu trên trang hiện tại
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Lấy dữ liệu cho trang hiện tại
  const currentData = ds.slice(startIndex, endIndex);

  return (
    <div>
      {/* Bảng hiển thị dữ liệu */}
      <div className="flex ">
        <div className="w-1/6 max-sm:w-56 bg-gray-300">
          <div className="px-3 py-2 bg-[#A9B388]">
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#750505" : "",
                };
              }}
              to="/admin/QuanLyNguoiDung"
            >
              Quản lý người dùng
            </NavLink>
          </div>
          <div className="px-3 py-2 bg-[#A9B388]">
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#750505" : "",
                };
              }}
              to="/admin/QuanLyKhoaHoc"
            >
              Quản lý khóa học
            </NavLink>
          </div>
        </div>
        <div className="w-5/6">
          <div className="py-5">
            <PopupThemNguoiDung />
          </div>
          <Table
            className="overflow-x-auto"
            dataSource={currentData}
            columns={columns}
            pagination={false}
          />
          {/* Pagination */}
          <Pagination className="py-10"
            current={currentPage}
            onChange={handlePageChange}
            total={ds.length}
            pageSize={pageSize}
          />
        </div>
      </div>
    </div>
  );
}
