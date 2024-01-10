import React, { useState, useEffect } from "react";
import Slide from "./slide/Slide";
import DanhSachKhoaHoc from "./danhsachkhoahoc/DanhSachKhoaHoc";
import { IIFE, saveLocal } from "../../utils";
import { layDanhSach } from "../../services/product.service";
import { ACCESS_TOKEN } from "../../contants";

export default function TrangChu() {
  const [danhSach, setDanhSach] = useState([]);
  saveLocal(
    ACCESS_TOKEN,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwOSIsIkhldEhhblN0cmluZyI6IjE0LzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMzA1MjgwMDAwMCIsIm5iZiI6MTY4MzczODAwMCwiZXhwIjoxNzEzMjAwNDAwfQ.Y0q3MDoDxNMpVtvUf90Wwp7z6n8VL07u_x3J58CmzQ0"
  );

  useEffect(()=>{
    IIFE(async()=>{
      const resp = await layDanhSach();
      // console.log(resp)
      setDanhSach(resp);
    })
  },[])

  // console.log(danhSach);
  return (
    <div>
      <Slide />
      
      <DanhSachKhoaHoc data={danhSach} />
    </div>
  );
}
