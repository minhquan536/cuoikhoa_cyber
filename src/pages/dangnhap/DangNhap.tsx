import React from "react";
import { useFormik } from "formik";
import * as Y from "yup";
import { signIn } from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import { saveLocal } from "src/utils";
import { TOKEN_USER } from "src/contants";
import { useDispatch } from "react-redux";
import { loginSuccess } from "src/redux/userSlice";

const validationSchema = Y.object({
  taiKhoan: Y.string().required(),
  matKhau: Y.string().required(),
})
// {
//   "taiKhoan": "minhquan1",
//   "matKhau": "123123"
// }
export default function DangNhap() {

  const dispatch = useDispatch()
  const navi = useNavigate()

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },

    validationSchema,

    onSubmit: (values) => {
      // console.log(values)
      // alert(JSON.stringify(values, null, 2));
      signIn(values).then((resp) => {
        console.log(resp)
        if(resp.maLoaiNguoiDung === "GV"){
          navi("/admin/QuanLyNguoiDung")
        }else{
          navi("/")
        }
        
        saveLocal(TOKEN_USER,resp.accessToken);
        dispatch(
          loginSuccess({
            taiKhoan: resp.taiKhoan,
          })
        )
      }).catch(()=>{
        alert("khong hop le")
      })
    },
  });
  return (
    <form className="w-2/4 h-full translate-x-2/4 translate-y-2/4 rounded-3xl grid gap-8 content-center items-center border-solid border-gray-900 bg-[#5F6F52] py-8 px-8" onSubmit={formik.handleSubmit}>
      <div>
      <label htmlFor="taiKhoan">Tài Khoản</label>
      <input className="rounded-2xl w-full py-2 px-2" id="taiKhoan" {...formik.getFieldProps("taiKhoan")} />
      </div>
      <div>

      <label htmlFor="matKhau">Mật Khẩu</label>
      <input className="rounded-2xl w-full py-2 px-2" id="matKhau" {...formik.getFieldProps("matKhau")} />
      </div>

      <button className="px-6 py-3 bg-[#A9B388] text-black rounded-2xl" type="submit">
        Dang Nhap
      </button>
      <button onClick={()=> {
        navi("/")
      }} className="px-6 py-3 bg-[#000000] text-white rounded-2xl">
        Trang Chu
      </button>
    </form>
  );
}
