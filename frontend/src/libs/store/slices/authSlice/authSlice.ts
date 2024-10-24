import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  isLoggedIn: boolean;
  
}

const initialState: AppState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authSense",
  initialState,
  reducers: {
    
    toggleLoggedIn: (state) => {
      state.isLoggedIn = true;
    },

    toggleLoggedOut: (state) => {
      state.isLoggedIn = false;
    },

  },
});


export const { toggleLoggedIn,toggleLoggedOut } = authSlice.actions;


export const selectLoggedinState = (state: { auth: AppState }) => state.auth.isLoggedIn;


export default authSlice.reducer;
