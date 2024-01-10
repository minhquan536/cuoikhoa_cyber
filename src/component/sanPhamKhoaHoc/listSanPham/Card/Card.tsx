import React from 'react'
import { useNavigate} from 'react-router-dom'

export default function Card(props) {
    // console.log(props.maKhoaHoc)
    const nav = useNavigate()
    const hanldeNavi = () => {
      nav(`/chitietsanpham/${props.makh}`)
    }
  return (
    <div className='shadow-md flex flex-col justify-between overflow-hidden p-6'>
      <img className='h-96 object-cover' src={props.hinhAnh} alt="" />
      <h1>{props.tenKhoaHoc}</h1>
      <button onClick={hanldeNavi} className='w-full rounded-xl px-7 py-6 bg-[#5F6F52] -mt-0'>Chi Tiết Khóa Học</button>
    </div>
  )
}
