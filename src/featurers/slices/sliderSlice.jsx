import { createSlice } from '@reduxjs/toolkit'
import {sliderData} from '../../assets/data/dummyData'

export const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    value: 0,
    length: sliderData.length
  },
  reducers: {
    nextSlide: (state) => {
      if(state.value === state.length - 1){
        state.value = 0
      }else{
        state.value += 1
      }
    },
    prevSlide: (state) => {
      if(state.value === 0){
        state.value = state.length - 1
      }else{
        state.value -= 1
      }
    },
    dotSlide: (state, action) =>{
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { nextSlide, prevSlide, dotSlide} = sliderSlice.actions

export default sliderSlice.reducer