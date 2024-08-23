import React from 'react'
import {storeData} from '../../assets/data/dummyData'
import ProductSectionItem from './ProductSectionItem'

const ProductSection = () => {
  return (
    <div>
      <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
        <h2 className="text-red-600 text-center text-lg font-bold tracking-normal leading-none">SUMMER T-Shirt SALE 30%</h2>
      </div>      
      <div className="grid grid-cols-3 gap-2 justify-items-center py-8 mx-auto max-w-7xl">
        {storeData.slice(0,6).map((item, index) => {
          return(
            <ProductSectionItem key={index} id={item.id} img={item.img} name={item.name} text={item.text} size={item.size} price={item.price} color={item.color} totalPrice={item.totalPrice} />
          )
        })}
      </div>
    </div>
  )
}

export default ProductSection
