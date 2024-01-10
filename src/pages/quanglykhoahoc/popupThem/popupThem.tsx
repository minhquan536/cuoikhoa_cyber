import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useFormik } from "formik";
import * as Y from "yup";
import { themKhoaHoc } from "src/services/admin.service";

const validationSchema = Y.object({
  maKhoaHoc: Y.string().required(),
  biDanh: Y.string().required(),
  tenKhoaHoc: Y.string()
    .min(2, "không được ít quá 2 ký tự")
    .max(30, "không được quá 30 ký tự")
    .required(),
  moTa: Y.string().required(),
  luotXem: Y.number().required(),
  danhGia: Y.number().required(),
  hinhAnh: Y.string(),
  maNhom: Y.string().required(),
  ngayTao: Y.string().required(),
  maDanhMucKhoaHoc: Y.string().required(),
  taiKhoanNguoiTao: Y.string().required(),
});

export default function PopupThemKhoaHoc() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const modalFooter: never[] = [];

  const formik = useFormik({
    initialValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: "",
      maNhom: "",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: "",
    },

    validationSchema,

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));

      // convert data
      const payload = {
        maKhoaHoc: values.maKhoaHoc,
        biDanh: values.biDanh,
        tenKhoaHoc: values.tenKhoaHoc,
        moTa: values.moTa,
        luotXem: values.luotXem,
        danhGia: values.danhGia,
        hinhAnh: values.hinhAnh,
        maNhom: values.maNhom,
        ngayTao: values.ngayTao,
        maDanhMucKhoaHoc: values.maDanhMucKhoaHoc,
        taiKhoanNguoiTao: values.taiKhoanNguoiTao,
      };

      themKhoaHoc(payload)
        .then(() => {
          alert("Thêm Khóa Học Thành Công");
          handleCancel();
        })
        .catch(() => {
          alert("Thêm Khóa Học Thất Bại");
        });
    },
  });
  return (
    <div>
      <Button className="" onClick={showModal}>
        Thêm Khoa Học
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
            <label htmlFor="maKhoaHoc">Mã Khóa Học</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="maKhoaHoc"
              {...formik.getFieldProps("maKhoaHoc")}
            />
            {formik.touched.maKhoaHoc && formik.errors.maKhoaHoc && (
              <p className="text-red-600 text-xl">{formik.errors.maKhoaHoc}</p>
            )}
            <label htmlFor="biDanh">Bí Danh</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="biDanh"
              {...formik.getFieldProps("biDanh")}
            />
            {formik.touched.biDanh && formik.errors.biDanh && (
              <p className="text-red-600 text-xl">{formik.errors.biDanh}</p>
            )}

            <label htmlFor="tenKhoaHoc">Tên Khóa Học</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="tenKhoaHoc"
              {...formik.getFieldProps("tenKhoaHoc")}
            />
            {formik.touched.tenKhoaHoc && formik.errors.tenKhoaHoc && (
              <p className="text-red-600 text-xl">{formik.errors.tenKhoaHoc}</p>
            )}

            <label htmlFor="moTa">Mô Tả</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="moTa"
              {...formik.getFieldProps("moTa")}
            />
            {formik.touched.moTa && formik.errors.moTa && (
              <p className="text-red-600 text-xl">{formik.errors.moTa}</p>
            )}

            <label htmlFor="luotXem">Lượt xem</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="luotXem"
              {...formik.getFieldProps("luotXem")}
            />
            {formik.touched.luotXem && formik.errors.luotXem && (
              <p className="text-red-600 text-xl">{formik.errors.luotXem}</p>
            )}

            <label htmlFor="danhGia">Đánh giá</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="danhGia"
              {...formik.getFieldProps("danhGia")}
            />
            {formik.touched.danhGia && formik.errors.danhGia && (
              <p className="text-red-600 text-xl">{formik.errors.danhGia}</p>
            )}

            <label htmlFor="hinhAnh">Hình Ảnh</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="hinhAnh"
              {...formik.getFieldProps("hinhAnh")}
            />
            {formik.touched.hinhAnh && formik.errors.hinhAnh && (
              <p className="text-red-600 text-xl">{formik.errors.hinhAnh}</p>
            )}

            <label htmlFor="maNhom">Mã Nhóm(GP01)</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="maNhom"
              {...formik.getFieldProps("maNhom")}
            />
            {formik.touched.maNhom && formik.errors.maNhom && (
              <p className="text-red-600 text-xl">{formik.errors.maNhom}</p>
            )}

            <label htmlFor="ngayTao">Ngày Tạo</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="ngayTao"
              {...formik.getFieldProps("ngayTao")}
            />
            {formik.touched.ngayTao && formik.errors.ngayTao && (
              <p className="text-red-600 text-xl">{formik.errors.ngayTao}</p>
            )}

            <label htmlFor="maDanhMucKhoaHoc">Mã Danh Mục Khóa Học</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="maDanhMucKhoaHoc"
              {...formik.getFieldProps("maDanhMucKhoaHoc")}
            />
            {formik.touched.maDanhMucKhoaHoc &&
              formik.errors.maDanhMucKhoaHoc && (
                <p className="text-red-600 text-xl">
                  {formik.errors.maDanhMucKhoaHoc}
                </p>
              )}

            <label htmlFor="taiKhoanNguoiTao">Tài Khoản Người Tạo</label>
            <input
              className="border border-gray-500 px-3 py-2"
              id="taiKhoanNguoiTao"
              {...formik.getFieldProps("taiKhoanNguoiTao")}
            />
            {formik.touched.taiKhoanNguoiTao &&
              formik.errors.taiKhoanNguoiTao && (
                <p className="text-red-600 text-xl">
                  {formik.errors.taiKhoanNguoiTao}
                </p>
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
