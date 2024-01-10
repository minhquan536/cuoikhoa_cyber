import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IIFE } from "../../utils";
import { maKhoaHoc } from "../../services/product.service";
import ListCard from "../../component/sanPhamKhoaHoc/listSanPham/ListCard";
import TenMuc from "src/component/tenMuc/tenMuc";

export default function DanhMucKhoaHoc() {
  const params = useParams();

  const [detail, setDetail] = useState();

  // console.log(params)

  useEffect(() => {
    IIFE(async () => {
      if (params.idKH) {
        const resp = await maKhoaHoc(params.idKH);
        setDetail(resp);
      }
    });
  }, [params.idKH]);
  const tendanhmuc = "Danh Sách Khóc Học";
  // console.log(detail)

  return (
    <div className="w-4/5 py-10" style={{ margin: "auto" }}>
      <div className="w-2/6 mb-8 max-sm:w-full rounded px-7 py-4 bg-[#5F6F52]">
        <TenMuc tendanhmuc={tendanhmuc} />
      </div>

      {detail?.length && <ListCard datas={detail} />}
    </div>
  );
}
