import { axiosAuthUser, axiosAuthUser2, axiosAuthUser3 } from "./axios.config";

type SignUp = {
    taiKhoan: string,
  matKhau: string,
  hoTen: string,
  soDT: string,
  maNhom: string,
  email: string
}

export const signUp = async (data: SignUp) => {
    try {
        const resp = await axiosAuthUser("/DangKy",{
            method: "POST",
            data,
        })

        return resp.data
    } catch (error:any ) {
        console.error(error)
    }
}

type SignIn = {
    taiKhoan: string,
    matKhau: string,
}
export const signIn = async (data:SignIn) => {
    try {
        const resp = await axiosAuthUser("/DangNhap",{
            method:"POST",
            data
        })
        return resp.data;
    } catch (error: any) {
        throw new Error(error);
    }
}

export const thongTinTK = async () => {
    try {
        const resp = await axiosAuthUser2("/ThongTinTaiKhoan",{
            method: "POST",
        })

        // console.log(resp)

        return resp.data
    } catch (error: any) {
        throw new Error(error);
    }
}

type DangKyKhoaHoc = {
    maKhoaHoc: string,
    taiKhoan: string,
}
export const dangKyKhoaHoc = async (data: DangKyKhoaHoc) => {
    try {
        const resp = await axiosAuthUser3("/DangKyKhoaHoc",{
            method: "POST",
            data
        })
        return resp.data
        
    } catch (error: any) {
        throw new Error(error)
    }
}


type HuyGhiDanh = {
    maKhoaHoc: string,
    taiKhoan: string,
}
export const huyKhoaHoc = async (data: HuyGhiDanh) => {
    try {
        const resp = await axiosAuthUser3("/HuyGhiDanh",{
            method: "POST",
            data
        })
        return resp.status
        
    } catch (error: any) {
        throw new Error(error)
    }
}

type TDTT = {
    taiKhoan: string,
      matKhau: string,
      hoTen: string,
      soDT: string,
      maLoaiNguoiDung: string,
      maNhom: string,
      email: string,
}
export const ThayDoiTT = async (data: TDTT) => {
    try {
        const resp = await axiosAuthUser2("/CapNhatThongTinNguoiDung",{
            method: "PUT",
            data
        })
        return resp.data
        
    } catch (error: any) {
        throw new Error(error)
    }
}

export const themNguoiDung = async (data:TDTT) => {
    try {
        const resp = await axiosAuthUser2("/ThemNguoiDung",{
            method: "POST",
            data,
        })
        return resp.data
    } catch (error: any) {
        throw new Error(error)
    }
}