import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeRoute from '../Home/HomeRoute'
import Shop from '../Shop/Shop'
import Header from '../New Header/Header1'
import Footer from '../footer/Footer'
import Productdetails from '../Detail Product/Productdetails'
import Cartslice from '../Cart/Cartslice'
import Cart from '../Cart/Cart'


function RoutingAll() {
  return (
    <div>
      <Header />
        <Routes>

          <Route path='/' element={<HomeRoute />} />
          <Route path='/home' element={<HomeRoute />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/Productdetails/:id' element={<Productdetails />} />
          <Route path='/Cartslice/' element={<Cartslice />} />
          <Route path='/Cart/' element={<Cart />} />

        </Routes>
      <Footer />
    </div>
  )
}

export default RoutingAll