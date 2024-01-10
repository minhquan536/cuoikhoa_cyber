import React from 'react'
import Card from './Card/Card'

export default function ListCard(props) {
    // console.log(props.data.hinhAnh)
  return (
    <div className='w-full grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-10'>
        {
            props.datas.map((dt) => {
                // console.log(dt)
                return (
                    <Card
                        makh={dt.maKhoaHoc}
                        hinhAnh={dt.hinhAnh}
                        luotXem={dt.luotXem}
                        tenKhoaHoc={dt.tenKhoaHoc}
                    />
                )
            })
        }
        
    </div>
  )
}
