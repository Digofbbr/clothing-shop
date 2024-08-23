import { configureStore } from '@reduxjs/toolkit'
import sliderReduccer from '../featurers/slices/sliderSlice'
import productsReducer from '../featurers/slices/productsSlice'
import cartReducer from '../featurers/slices/cartSlice'
import authReducer from '../featurers/slices/authSlice'

export const store = configureStore({
  reducer: {
    slider: sliderReduccer,
    products: productsReducer,
    cart: cartReducer,
    user: authReducer
  }
})