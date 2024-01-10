import React, {Suspense} from 'react'
import Header from './header/header'
import Footer from './footer/footer'
import { Outlet } from 'react-router-dom'

export default function HomeTemplate() {


  return (
    <div>
      <Header/>
        <Suspense fallback={<p>"Loading...."</p>}>
          <Outlet/>
        </Suspense>
      <Footer/>
    </div>
  )
}
