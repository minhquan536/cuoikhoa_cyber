import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TenMuc from "src/component/tenMuc/tenMuc";
// import { Root } from './type'
// import { IIFE } from '../../../utils';
// import { layDanhSachKhoaHoc } from '../../../services/product.service';

type Props = {
  data: string[];
};

export default function DanhSachKhoaHoc(props: Props) {
  // const navigate = useNavigate();
  // const handleNavigate = () => {
  //   navigate(`/danhmucsanpham/${a}`)
  // }
  const tendanhmuc = "Danh Sách Khóc Học Hot"

  return (
    <div className='w-4/5 py-10' style={{margin:"auto"}}>
      <div className="w-2/6 max-sm:w-full rounded px-7 py-4 bg-[#5F6F52]">
        <TenMuc tendanhmuc={tendanhmuc}/>
      </div>
      <div className="w-full grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 gap-12 items-center">
        {props.data.map((KH) => {
          // console.log(KH)
          return (
            <div className="shadow-lg rounded-xl overflow-hidden content-center text-center px-5 py-5">
              <div className="px-5 py-5">
                <img
                  className="w-full object-cover"
                  src={KH.hinhAnh}
                  alt="...."
                />
              </div>
              <div>
                <h2>{KH.tenKhoaHoc}</h2>
              </div>
              <button className="rounded-xl bg-[#5F6F52] px-5 py-3">
                <Link to={"/chitietsanpham/" + KH.maKhoaHoc}>Learn now</Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
