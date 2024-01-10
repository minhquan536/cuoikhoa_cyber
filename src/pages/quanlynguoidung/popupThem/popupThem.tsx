import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useFormik } from "formik";
import * as Y from "yup";
import { themNguoiDung } from "src/services/user.service";
import { useNavigate } from "react-router-dom";

const validationSchema = Y.object({
  taiKhoan: Y.string()
    .min(5, "không được nhỏ hơn 5")
    .max(20, "không được lớn hơn 20")
    .required(),
  matKhau: Y.string().min(6).max(30, "không được quá 30 ký tự").required(),
  hoTen: Y.string()
    .min(5, "không được nhỏ hơn 5")
    .max(20, "không được lớn hơn 20")
    .required(),
  maLoaiNguoiDung: Y.string(),
  soDT: Y.number().required(),
  maNhom: Y.string().required(),
  email: Y.string().email("Email không hợp lệ").required(),
});

export default function PopupThemNguoiDung() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const naviga = useNavigate()

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const modalFooter: never[] = [];

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
      maNhom: "",
      email: "",
    },

    validationSchema,

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      themNguoiDung(values)
        .then(() => {
          alert("ok");
          naviga("/admin/QuanLyNguoiDung");
          handleCancel();
        })
        .catch(() => {
          alert("not ok");
        });
    },
  });
  return (
    <div>
      <Button className="" onClick={showModal}>
        Thêm Nguoi Dung
      </Button>
      <Modal
        className="top-20"
        title="Thông Tin Người Dùng Mới"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={modalFooter}
      >
        <form className="grid gap-10" onSubmit={formik.handleSubmit}>
          <div className="grid gap-2">
            <label htmlFor="taiKhoan">Tài Khoản</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="taiKhoan"
              {...formik.getFieldProps("taiKhoan")}
            />
            {formik.touched.taiKhoan && formik.errors.taiKhoan && (
              <p className="text-red-600 text-xl">{formik.errors.taiKhoan}</p>
            )}

            <label htmlFor="matKhau">Mật Khẩu</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="matKhau"
              {...formik.getFieldProps("matKhau")}
            />
            {formik.touched.matKhau && formik.errors.matKhau && (
              <p className="text-red-600 text-xl">{formik.errors.matKhau}</p>
            )}

            <label htmlFor="hoTen">Họ Tên</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="hoTen"
              {...formik.getFieldProps("hoTen")}
            />
            {formik.touched.hoTen && formik.errors.hoTen && (
              <p className="text-red-600 text-xl">{formik.errors.hoTen}</p>
            )}

            <label htmlFor="soDT">Số Điện Thoại</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="soDT"
              {...formik.getFieldProps("soDT")}
            />
            {formik.touched.soDT && formik.errors.soDT && (
              <p className="text-red-600 text-xl">{formik.errors.soDT}</p>
            )}

            <label htmlFor="maLoaiNguoiDung">Mã người dùng (HS,GV)</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="maLoaiNguoiDung"
              {...formik.getFieldProps("maLoaiNguoiDung")}
            />
            {formik.touched.maLoaiNguoiDung &&
              formik.errors.maLoaiNguoiDung && (
                <p className="text-red-600 text-xl">
                  {formik.errors.maLoaiNguoiDung}
                </p>
              )}

            <label htmlFor="maNhom">Mã Nhóm (GP01)</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="maNhom"
              {...formik.getFieldProps("maNhom")}
            />
            {formik.touched.maNhom && formik.errors.maNhom && (
              <p className="text-red-600 text-xl">{formik.errors.maNhom}</p>
            )}

            <label htmlFor="email">Email</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-600 text-xl">{formik.errors.email}</p>
            )}
          </div>
          <button
            className="border border-green-500 bg-green-700 py-4 font-bold text-gray-900"
            type="submit"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}
