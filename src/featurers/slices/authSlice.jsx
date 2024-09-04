import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) ||  {
      name: '',
      password: '',
      image: '',
      authUser: false,
      errorMessage: ""
    }
  },
  reducers: {
    login(state, action){
      const userId = action.payload;
      const userValidation = /^[A-Za-z]+$/i.test(userId.name);
      const passwordValidation = userId.password.trim().length >= 5;
      state.user = userId;

      if (!userValidation) {
        state.user.authUser = false;
        state.user.errorMessage = "Only letter acceptable"
      }else if(!passwordValidation){
        state.user.authUser = false
        state.user.errorMessage = "Password length minimun: 5"
      }else {
        state.user.authUser = true;
        state.user.errorMessage = ""
        const saveState = JSON.stringify(userId);
        sessionStorage.setItem("authUser", saveState);
      }
    },
    logout(state,action){
      state.user = {
        name: '',
        password: '',
        image: '',
        authUser: false,
        errorMessage: ""
      }
      sessionStorage.clear()
    }
  }
})


export const {login ,logout} = authSlice.actions
export default authSlice.reducer