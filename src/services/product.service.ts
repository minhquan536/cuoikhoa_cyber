import { date } from "yup";
import { axiosAuth, axiosAuthUser3 } from "./axios.config";

export const layDanhSach = async () => {
    try {
        const maxResponses = 8;
        const resp = await axiosAuth.get("/LayDanhSachKhoaHoc");

         // Extract a maximum of 10 responses
         const limitedData = resp.data.slice(0, maxResponses);

         // You can still process the limitedData array if needed
 
         return limitedData;
        // console.log(resp)
        // return resp.data

    } catch (error: any) {
        throw new Error(error)
    }
}

export const layDanhSachTong = async () => {
    try {
        const resp = await axiosAuth.get("/LayDanhSachKhoaHoc");
 
         return resp.data;
        // console.log(resp)
        // return resp.data

    } catch (error: any) {
        throw new Error(error)
    }
}

export const layDanhSachKhoaHoc = async () => {
    try {
        const resp = await axiosAuth.get("/LayDanhMucKhoaHoc");
        // console.log(resp)
        return resp.data
    } catch (error: any) {
        throw new Error(error)
    }
}

export const maKhoaHoc = async (maKH) => {
    try {
        const resp = await axiosAuth.get(`LayKhoaHocTheoDanhMuc?maDanhMuc=${maKH}`)
        return resp.data
    } catch (error: any) {
        throw new Error(error)
    }
}

export const chiTietKhoaHoc = async (maKH) => {
    try {
        const reps = await axiosAuth.get(`LayThongTinKhoaHoc?maKhoaHoc=${maKH}`)
        return reps.data
    } catch (error) {
        throw new Error(error)
    }
}

axiosAuth

export const xoaKhoaHoc = async (data) => {
    try {
        const reps = await axiosAuthUser3.delete(`XoaKhoaHoc?MaKhoaHoc=${data}`
        )
        return reps.status
    } catch (error) {
        throw new Error(error)
    }
}