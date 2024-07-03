import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isButtonClicked: boolean;
  loggedIn:boolean;
}

const initialState: AppState = {
  isButtonClicked: false,
  loggedIn:false,
};

const authslice = createSlice({
  name: 'authsense',
  initialState,
  reducers: {
    toggleButton: (state) => {
      state.isButtonClicked = !state.isButtonClicked;
    },

    toggleLoggedIn: (state)=>{
        state.loggedIn = true;
    },
    
    toggleLoggedOut: (state)=>{
      state.loggedIn = false;
    }
  },
});

export const { toggleButton,toggleLoggedIn,toggleLoggedOut } = authslice.actions;

export const selectButtonState = (state: { app: AppState }) => state.app.isButtonClicked;
export const selectLoggedinState = (state: { app: AppState }) => state.app.loggedIn;

export default authslice.reducer;
