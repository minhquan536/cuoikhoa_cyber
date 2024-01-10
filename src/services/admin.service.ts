import { date } from "yup";
import { axiosAuthUser, axiosAuthUser2, axiosAuthUser3 } from "./axios.config";

export const danhSachNguoiDung =  async () => {
    try {
        const resp = await axiosAuthUser("/LayDanhSachNguoiDung",{
            method: "GET",
        });

        return resp.data;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const xoaNguoiDung = async (data) => {
    try {
        const resp = await axiosAuthUser2.delete(`XoaNguoiDung?TaiKhoan=${data}`)
        return resp;

    } catch (error: any) {
        throw new Error(error)
    }
}

export const themKhoaHoc = async (data) => {
    try {
        const resp = await axiosAuthUser3("/ThemKhoaHoc",{
            method: "POST",
            data,
        })
        return resp.data;
    } catch (error: any) {
        throw new Error(error)
    }
}
