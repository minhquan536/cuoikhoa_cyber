export interface Root {
    maKhoaHoc: string
    biDanh: string
    tenKhoaHoc: string
    moTa: string
    luotXem: number
    hinhAnh: string
    maNhom: string
    ngayTao: string
    soLuongHocVien: number
    nguoiTao: NguoiTao
    danhMucKhoaHoc: DanhMucKhoaHoc
  }
  
  export interface NguoiTao {
    taiKhoan: string
    hoTen: string
    maLoaiNguoiDung: string
    tenLoaiNguoiDung: string
  }
  
  export interface DanhMucKhoaHoc {
    maDanhMucKhoahoc: string
    tenDanhMucKhoaHoc: string
  }