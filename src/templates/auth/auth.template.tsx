import React, {Suspense} from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthTemplate() {
  return (
    <div>
      <Suspense fallback={<p>"Loading...."</p>}>
          <Outlet/>
        </Suspense>
    </div>
  )
}
