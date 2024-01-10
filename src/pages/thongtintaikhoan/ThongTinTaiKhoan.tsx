import React, { useEffect, useState } from "react";
import { IconUser } from "src/assets/icons";
import { IIFE, getLocal } from "../../utils";
import { ThayDoiTT, huyKhoaHoc, thongTinTK } from "src/services/user.service";
// import { maKhoaHoc } from "src/services/product.service";
import * as Y from "yup";
import { useFormik } from "formik";
import { ACCESS_TOKEN } from "src/contants";

export interface TTKH {
  maKhoaHoc: string;
  tenKhoaHoc: string;
  biDanh: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  ngayTao: string;
  danhGia: number;
}

export interface TTTK {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  email: string;
}
interface props {
  when: boolean;
  fallback: JSX.Element;
  children: JSX.Element;
}
function Show({ when, fallback, children }: props) {
  return when ? children : fallback;
}

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

export default function ThongTinTaiKhoan() {
  const [suaThongTin, setSuaThongTin] = useState(false);
  // const [token, setToken] = useState("");
  const [thongTin, setThongTin] = useState<TTTK | null>(null);
  const [thongTinKhoaHoc, setThongTinKhoaHoc] = useState<TTKH[]>([]);
  const [huyKhoa, setHuyKhoaHoc] = useState({
    maKhoaHoc: "",
    taiKhoan: "",
  });
  const fetdata = async () => {
    const resp = await thongTinTK();
    // console.log(resp)
    // const maKhoaHocArray = resp.chiTietKhoaHocGhiDanh.map(
    //   (item) => item.maKhoaHoc
    // );
    if (resp) {
      // setToken(getLocal(ACCESS_TOKEN))
      setThongTin(resp);
      setThongTinKhoaHoc(resp.chiTietKhoaHocGhiDanh);
      setHuyKhoaHoc({
        maKhoaHoc: "",
        taiKhoan: resp.taiKhoan,
      });
    } else {
      console.log("date fail");
    }
  };
  useEffect(() => {
    const cleanUp = () => {
      fetdata();
    };
    return cleanUp;
  }, []);

  // console.log(huyKhoa);

  useEffect(() => {
    IIFE(async () => {
      const status = await huyKhoaHoc(huyKhoa);
      // console.log(status);
      if (status === 200 || status === 201) {
        //nap laij duw lieeu
        fetdata();
      }
      //Fetch lai dataa
    });
  }, [huyKhoa]);

  // const handleRemoveCourse = (maKhoaHocToRemove) => {
  //   setHuyKhoaHoc((prevHuyKhoaHoc) => ({
  //     ...prevHuyKhoaHoc,
  //     maKhoaHoc: maKhoaHocToRemove,
  //   }));
  // }

  const handleThongTin = () => {
    setSuaThongTin(!suaThongTin);
  };

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
      ThayDoiTT(values)
        .then(() => {
          alert("thanh cong");
          fetdata();
        })
        .catch(() => {
          alert("không thành công");
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="grid gap-5">
      <div className="w-4/5 py-10" style={{ margin: "auto" }}>
        <div className="w-2/6 max-sm:w-full rounded px-7 py-4 bg-[#5F6F52]">Thong tin tai khoản</div>
        <div className="grid grid-cols-3 items-center">
          <div className="w-4/5">
            <IconUser />
          </div>
          <div className="col-span-2 box-border grid w-full leading-10 gap-5">
            <p className="grid grid-cols-2">
              Tài Khoản:
              <Show
                when={suaThongTin}
                fallback={
                  <span className="font-bold">{thongTin?.taiKhoan}</span>
                }
              >
                <input
                  id="taiKhoan"
                  className="border border-red-500 px-3 py-2"
                  {...formik.getFieldProps("taiKhoan")}
                />
                {formik.touched.taiKhoan && formik.errors.taiKhoan && (
                  <p className="text-red-600 text-xl">
                    {formik.errors.taiKhoan}
                  </p>
                )}
              </Show>
            </p>
            <p className="grid grid-cols-2">
              Mật Khẩu:
              <Show
                when={suaThongTin}
                fallback={
                  <span className="font-bold">{thongTin?.matKhau}</span>
                }
              >
                <input
                  id="matKhau"
                  className="border border-red-500 px-3 py-2"
                  {...formik.getFieldProps("matKhau")}
                />
                {formik.touched.matKhau && formik.errors.matKhau && (
                  <p className="text-red-600 text-xl">
                    {formik.errors.matKhau}
                  </p>
                )}
              </Show>
            </p>
            <p className="grid grid-cols-2">
              Họ Tên:
              <Show
                when={suaThongTin}
                fallback={<span className="font-bold">{thongTin?.hoTen}</span>}
              >
                <input
                  id="hoTen"
                  className="border border-red-500 px-3 py-2"
                  {...formik.getFieldProps("hoTen")}
                />
                {formik.touched.hoTen && formik.errors.hoTen && (
                  <p className="text-red-600 text-xl">{formik.errors.hoTen}</p>
                )}
              </Show>
            </p>
            <p className="grid grid-cols-2">
              số điện thoại:
              <Show
                when={suaThongTin}
                fallback={<span className="font-bold">{thongTin?.soDT}</span>}
              >
                <input
                  id="soDT"
                  className="border border-red-500 px-3 py-2"
                  {...formik.getFieldProps("soDT")}
                />
                {formik.touched.soDT && formik.errors.soDT && (
                  <p className="text-red-600 text-xl">{formik.errors.soDT}</p>
                )}
              </Show>
            </p>
            <p className="grid grid-cols-2">
              mã người dùng:
              <Show
                when={suaThongTin}
                fallback={
                  <span className="font-bold">{thongTin?.maLoaiNguoiDung}</span>
                }
              >
                <input
                  id="maLoaiNguoiDung"
                  className="border border-red-500 px-3 py-2"
                  {...formik.getFieldProps("maLoaiNguoiDung")}
                />
                {formik.touched.maLoaiNguoiDung &&
                  formik.errors.maLoaiNguoiDung && (
                    <p className="text-red-600 text-xl">
                      {formik.errors.maLoaiNguoiDung}
                    </p>
                  )}
              </Show>
            </p>
            <p className="grid grid-cols-2">
              Mã nhóm:
              <Show
                when={suaThongTin}
                fallback={<span className="font-bold">{thongTin?.maNhom}</span>}
              >
                <input
                  id="maNhom"
                  className="border border-red-500 px-3 py-2"
                  {...formik.getFieldProps("maNhom")}
                />
                {formik.touched.maNhom && formik.errors.maNhom && (
                  <p className="text-red-600 text-xl">{formik.errors.maNhom}</p>
                )}
              </Show>
            </p>
            <p className="grid grid-cols-2">
              Email:
              <Show
                when={suaThongTin}
                fallback={<span className="font-bold">{thongTin?.email}</span>}
              >
                <input
                  id="email"
                  className="border border-red-500 px-3 py-2"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-600 text-xl">{formik.errors.email}</p>
                )}
              </Show>
            </p>
            <span className="grid grid-cols-2 gap-2 ">
              <div className="grid-cols-1">danh sách khóa học :</div>
              {thongTinKhoaHoc?.map((nd) => {
                return (
                  <>
                    <div className="flex rounded-xl bg-[#5F6F52] justify-between px-3 py-2" key={nd.maKhoaHoc}>
                      <span className=" px-4">{nd.tenKhoaHoc}</span>
                      <button
                        type="button"
                        onClick={() => {
                          // handleRemoveCourse(nd.maKhoaHoc)
                          setHuyKhoaHoc({
                            maKhoaHoc: nd.maKhoaHoc,
                            taiKhoan: thongTin?.taiKhoan ?? "",
                          });
                        }}
                        className="bg-[#A9B388] rounded-full px-4 pb-1.5"
                      >
                        x
                      </button>
                    </div>
                    <div></div>
                  </>
                );
              })}
            </span>
          </div>
        </div>
        <div className="w-full flex gap-5 justify-around">
          <Show
            when={suaThongTin}
            fallback={
              <button
                type="submit"
                onClick={handleThongTin}
                className="bg-[#A9B388] rounded-xl px-5 py-2.5"
              >
                thay đổi thông tin
              </button>
            }
          >
            <button
              className="bg-[#A9B388] rounded-xl py-2.5 px-5"
              onClick={handleThongTin}
              type="button"
            >
              lưu
            </button>
          </Show>
          <button type="button" className="bg-[#A9B388] rounded-xl py-2.5 px-5">
            Đánh Gía
          </button>
          <button type="button" onClick={()=>{
            alert(`Mã Token của bạn là: ${getLocal(ACCESS_TOKEN)}`)
          }} className="bg-[#A9B388] rounded-xl py-2.5 px-5">
            Token
          </button>
          <button type="button" className="bg-[#A9B388] rounded-xl py-2.5 px-5">
            Chứng Nhận
          </button>
        </div>
      </div>
    </form>
  );
}
