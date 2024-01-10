import React, { useEffect, useState } from "react";
import { Pagination, Table } from "antd";
import { IIFE } from "src/utils";
import { NavLink } from "react-router-dom";
import { layDanhSachTong, xoaKhoaHoc } from "src/services/product.service";
import "./style.css";
import PopupThemKhoaHoc from "./popupThem/popupThem";
// import 'antd/dist/antd.css';

export default function QuanLyKhoaHoc() {
  const [currentPage, setCurrentPage] = useState(1);

  const [ma, setMa] = useState([]);

  const [dsKhoaHoc, setDsKhoaHoc] = useState([]);

  const fetdata = async () => {
    const resp = await layDanhSachTong();
    setDsKhoaHoc(resp);
  };
  useEffect(() => {
    const cleanUp = () => {
      fetdata();
    };
    return cleanUp;
  }, []);
  // useEffect(()=>{
  //   IIFE( async () => {
  //     const resp = await layDanhSachTong();
  //     setDsKhoaHoc(resp)
  //   })
  // },[])

  const handlePageChange = (page:any) => {
    setCurrentPage(page);
    // Thực hiện các thao tác cần thiết khi chuyển trang
  };
  const ds: [] = [];
  dsKhoaHoc.map((data) => {
    return ds.push(data);
  });

  const dsAnh = [
    {
      hinhAnh: "image1", // Thay thế 'image1' bằng khóa ảnh thực tế từ dsAnh
    },
  ];
  dsKhoaHoc.map((data) => {
    return dsAnh.push(data.hinhAnh);
  });

  console.log(ma);
  useEffect(() => {
    IIFE(async () => {
      const status = await xoaKhoaHoc(ma);
      if (status === 200 || status === 201) {
        fetdata();
      }
    });
  }, [ma]);

  // lấy thông tin hàng
  // const handleButtonClick = async (record) => {
  //   console.log(record)
  //   const status = await xoaKhoaHoc(ma);
  //   if (status === 200 || status === 201) {
  //           fetdata();
  //   }
  // };

  // Các cột của bảng
  const columns = [
    {
      title: "Mã Khóa Học",
      width: "10%",
      dataIndex: "maKhoaHoc",
      key: "name",
      fixed: "left",
    },
    {
      title: "Tên Khóa Học",
      width: "10%",
      dataIndex: "tenKhoaHoc",
      key: "age",
      fixed: "left",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "1",
      width: "20%",
      render: (text:any) => (
        <img src={dsAnh.find((anh) => anh === text)} width={50} />
      ),
    },
    {
      title: "Mô Tả",
      dataIndex: "moTa",
      key: "2",
      width: "50%",
    },
    {
      title: "Số lượng học viên",
      dataIndex: "soLuongHocVien",
      key: "2",
      width: "50%",
    },
    {
      title: "Ngày Tạo",
      dataIndex: "ngayTao",
      key: "2",
      width: "50%",
    },
    {
      title: "Chức năng",
      key: "operation",
      fixed: "right",
      width: "10%",
      render: (text, record) => (
        <button
          className="border-green-500 bg-red-700 py-2 px-4 font-bold text-gray-900"
          onClick={() => {
            // handleButtonClick(record.maKhoaHoc);
            setMa(record.maKhoaHoc);
          }}
        >
          XÓA
        </button>
      ),
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
      <div className="flex">
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
            <PopupThemKhoaHoc />
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
