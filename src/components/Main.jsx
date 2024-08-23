import React from 'react'
import Navbar from './navbar/Navbar'
import Slider from './slider/Slider'

import NavigateButtons from './navigatebuttons/navigateButtons'
import ProductSection from './productSection/ProductSection'
import Footer from './footer/Footer'


function Main() {
  return (
    <div>
      <Navbar />
      <Slider />
      <NavigateButtons />
      <ProductSection/>
      <Footer />
    </div>
  )
}

export default Main
