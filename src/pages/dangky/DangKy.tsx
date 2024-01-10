import React, {useState} from "react";
import { useFormik } from "formik";

import * as Y from "yup";
import { signUp } from "../../services/user.service";
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
  soDT: Y.number().required(),
  maNhom: Y.string().required(),
  email: Y.string().email("Email không hợp lệ").required(),
});

export default function DangKy() {
  const [errorSignup, setErrorSignup] = useState({
    isError: false,
    message: "",
  });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "",
      email: "",
    },

    validationSchema,

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      signUp(values)
        .then(() => {
          navigate("/dangnhap");
        })
        .catch(() => {
          setErrorSignup({
            isError: true,
            message: "trung email",
          });
        });
    },
  });

  // console.log(formik)
  return (
    <>
      {errorSignup.isError && <p>{errorSignup.message}</p>}
      <form
        className="w-2/4 h-full translate-x-2/4 translate-y-36 rounded-3xl grid gap-8 content-center items-center border-solid border-gray-900 bg-gray-300 py-8 px-8"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <label htmlFor="taiKhoan">Tài Khoản</label>
          <input
            className="rounded-2xl w-full py-2 px-2"
            id="taiKhoan"
            {...formik.getFieldProps("taiKhoan")}
          />
          {formik.touched.taiKhoan && formik.errors.taiKhoan && (
            <p className="text-red-600 text-xl">{formik.errors.taiKhoan}</p>
          )}
        </div>
        <div>
          <label htmlFor="matKhau">Mật Khẩu</label>
          <input
            className="rounded-2xl w-full py-2 px-2"
            id="matKhau"
            {...formik.getFieldProps("matKhau")}
          />
          {formik.touched.matKhau && formik.errors.matKhau && (
            <p className="text-red-600 text-xl">{formik.errors.matKhau}</p>
          )}
        </div>
        <div>
          <label htmlFor="hoTen">Ho Ten</label>
          <input
            className="rounded-2xl w-full py-2 px-2"
            id="hoTen"
            {...formik.getFieldProps("hoTen")}
          />
          {formik.touched.hoTen && formik.errors.hoTen && (
            <p className="text-red-600 text-xl">{formik.errors.hoTen}</p>
          )}
        </div>
        <div>
          <label htmlFor="soDT">Số Điện Thoại</label>
          <input
            className="rounded-2xl w-full py-2 px-2"
            id="soDT"
            {...formik.getFieldProps("soDT")}
          />
          {formik.touched.soDT && formik.errors.soDT && (
            <p className="text-red-600 text-xl">{formik.errors.soDT}</p>
          )}
        </div>
        <div>
          <label htmlFor="maNhom">Mã Nhóm</label>
          <input
            className="rounded-2xl w-full py-2 px-2"
            id="maNhom"
            {...formik.getFieldProps("maNhom")}
          />
          <h5>vidu: maNhom: GP01</h5>
          {formik.touched.maNhom && formik.errors.maNhom && (
            <p className="text-red-600 text-xl">{formik.errors.maNhom}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="rounded-2xl w-full py-2 px-2"
            id="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-600 text-xl">{formik.errors.email}</p>
          )}
        </div>

        <button
          className="px-6 py-3 bg-gray-900 text-gray-100 rounded-2xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}
