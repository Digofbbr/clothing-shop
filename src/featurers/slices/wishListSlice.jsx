import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
  name: 'wish',
  initialState: {
    wish: []
  },
  reducers:{
    addToWishList: (state, action) => {
      const productId = action.payload
      console.log(action.payload)
      try {
        const exist = state.wish.find((product) => product.id === productId.id)
        if(exist){
          
        }else{
          state.wish.push({
            id: productId.id,
            name: productId.name,
            img: productId.img,
            text: productId.text,
            category: productId.category
          })
        }
      } catch (error) {
        return error
      }
    },
    removeFromWishList: (state, action) => {
      const productId = action.payload
      try {
        const exist = state.wish.find((product) => product.id === productId.id)
        console.log(exist)
        if(exist){
          state.wish = state.wish.filter((product) => (
            product.id !== productId.id 
          ))
        }
      }catch(error){
        return(error)
      }
    }
  }
})

export const {addToWishList, removeFromWishList} = wishListSlice.actions
export default wishListSlice.reducer 