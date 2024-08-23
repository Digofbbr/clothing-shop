import { createSlice } from "@reduxjs/toolkit";
import {storeData} from '../../assets/data/dummyData'

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts: JSON.parse(sessionStorage.getItem('filteredData')) || storeData,
    singleProduct: JSON.parse(sessionStorage.getItem('oneProduct')) || storeData
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(product => product.type === action.payload)
        state.filteredProducts = filter

        const saveState = JSON.stringify(filter)
        sessionStorage.setItem('filteredData', saveState)

      } catch (error) {
        return error
      }
    },
    singleProduct(state, action){
      try {
        const oneProduct = state.filteredProducts.filter(product => product.id === action.payload)
        state.singleProduct = oneProduct
        
        const saveProduct = JSON.stringify(oneProduct)
        sessionStorage.setItem('oneProduct', saveProduct)
        console.log(oneProduct)
      } catch (error) {
        return error
      }
    },
    filterGender(state, action){
      const gender = action.payload
      const filter = state.filteredProducts.filter(product => product.gender === gender)
      state.filteredProducts = filter
    },
    sortByHighPrice(state, action){
      const order = state.filteredProducts.sort((a,b) => b.price - a.price)
      state.filteredProducts = order
    },
    filterByColor(state, action){
      const color = action.payload
      const filter = state.filteredProducts.filter(product => product.color.includes(color))
      state.filteredProducts = filter
    },
    filterBySize(state, action){
      const size = action.payload
      const filter = state.filteredProducts.filter(product => product.size.includes(size))
      state.filteredProducts = filter
    }

  }
})

export const {filterProducts, singleProduct, filterGender, sortByHighPrice, filterByColor, filterBySize} = productsSlice.actions

export default productsSlice.reducer