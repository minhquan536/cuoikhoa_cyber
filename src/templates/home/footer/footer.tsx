import React from "react";
// import * as S from "./footecss"

export default function Footer() {
  return (
    <div className="bg-[black] text-[#5F6F52] py-10">
      <div
        className="grid gap-10 items-center grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 w-4/5"
        style={{ margin: "auto" }}
      >
        <div className="font-bold w-full ">
          <p className="text-[#a3e46e]">Đăng ký nhận Ưu đãi & Bài viết mới</p>
          <p className="font-semibold mb-11">
            CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình
            CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn
            đến các bạn.
          </p>
          <input
            className="w-full mb-11 px-3 py-2 rounded"
            placeholder="email liên hệ"
          ></input>
          <input
            className="w-full mb-11 px-3 py-2 rounded"
            placeholder="số điện thoại liên hệ"
          ></input>
          <button
            className="w-full block py-2 bg-[#5F6F52] rounded text-[#000000]"
            type="submit"
          >
            Gởi
          </button>
        </div>
        <div className="w-full">
          <button className="w-full px-5 py-3 bg-[#5F6F52] text-[#000000] rounded">
            Tư vấn đăng ký
          </button>
        </div>
        <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.4550387941513!2d108.21265478314129!3d16.041859806746437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142193783c2b383%3A0xfc0da842097725c7!2zVHJ1bmcgVMOibSDEkMOgbyBU4bqhbyBM4bqtcCBUcsOsbmggQ3liZXJTb2Z0IC0gQ8ahIFPhu58gxJDDoCBO4bq1bmc!5e0!3m2!1svi!2s!4v1703850296317!5m2!1svi!2s" width="100%" height="450"  loading="lazy"></iframe></div>
      </div>

      <div className="py-10 w-4/5" style={{ margin: "auto" }}>
        <h1 className="font-bold text-3xl py-10">TP.Hồ Chí Minh</h1>
        <div className="grid gap-10 items-center grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2">
          <div>
            <div className="">
              <p className="font-bold text-2xl text-[#a3e46e]">
                Trụ sở: 2Bis Nguyễn Thị Minh Khai, Quận 1
              </p>
              <p>Hotline: 096.105.1014</p>
              <p>Địa chỉ: 2Bis Nguyễn Thị Minh Khai, Quận 1, TPHCM</p>
            </div>
          </div>
          <div>
            <div className="">
              <p className="font-bold text-2xl text-[#a3e46e]">
                Trụ sở: 2Bis Nguyễn Thị Minh Khai, Quận 1
              </p>
              <p>Hotline: 096.105.1014</p>
              <p>Địa chỉ: 2Bis Nguyễn Thị Minh Khai, Quận 1, TPHCM</p>
            </div>
          </div>
          <div>
            <div className="">
              <p className="font-bold text-2xl text-[#a3e46e]">
                Trụ sở: 2Bis Nguyễn Thị Minh Khai, Quận 1
              </p>
              <p>Hotline: 096.105.1014</p>
              <p>Địa chỉ: 2Bis Nguyễn Thị Minh Khai, Quận 1, TPHCM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
