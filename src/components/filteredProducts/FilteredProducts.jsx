import React from 'react'
import Navbar from '../navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductCard } from './ProductCard'
import {Button} from '@material-tailwind/react'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {filterProducts, filterGender, sortByHighPrice, filterByColor, filterBySize } from '../../featurers/slices/productsSlice'
import Error from '../error/Error'
import NavigateButtonsAlt from '../navigatebuttons/navigateButtonsAlt'

function FilteredProducts() {

  const products = useSelector((state) => state.products.filteredProducts)
  console.log(products)
  const {type} = useParams()  
  const dispatch = useDispatch()

  const genderButtons = ["male", "female"] 
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];

  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <div className="pl-14">
          <div className='flex gap-8 items-center'>
            <h1 className="text-4xl font-bold text-gray-600 tracking-normal leading-none">{type}</h1>
            <NavigateButtonsAlt currentType={type}/>
          </div>
          <div className="flex items-center justify-between py-8">
            <div className="flex items-center">
              {genderButtons.map((gender, index) => {
                return(
                  <div key={index}>
                    <Button onClick={() => dispatch(filterGender(gender))} color="gray" size="lg" variant="outlined" ripple={true} className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4">{gender}</Button>
                  </div>
                )
              })}
              <Button onClick={() => dispatch(sortByHighPrice())} color="gray" size="lg" variant="outlined" ripple={true} className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4">High price</Button>
              <Menu>
                <MenuHandler>
                  <Button onClick="" color="gray" size="lg" variant="outlined" ripple={true} className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4">Select a color</Button>
                </MenuHandler>
                <MenuList>
                  {colorButtons.map((color,index) => {
                    return(
                      <MenuItem onClick={() => dispatch(filterByColor(color))} style={{color: color}} key={index}>{color}</MenuItem>
                    )
                  })}
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                  <Button disabled={type === 'Bags'} color="gray" size="lg" variant="outlined" ripple={true} className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4">Select a size</Button>
                </MenuHandler>
                <MenuList>
                  {sizeButtons.map((size,index) => {
                    return(
                      <MenuItem onClick={() => dispatch(filterBySize(size))} key={index}>{size}</MenuItem>
                    )
                  })}
                </MenuList>
              </Menu>
            </div>
            <div className="pr-14">
              <Button onClick={() => dispatch(filterProducts(type))} color="gray" size="lg" variant="outlined" ripple={true} className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4">Clear Filter</Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-6">
          {products.filter((product) => product.type === type).map((product, index) => {
            return(
              <div key={index} className="w-full">
                <ProductCard id={product.id} name={product.name} text={product.text} price={product.price} img={product.img} colors={product.color}/>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default FilteredProducts
