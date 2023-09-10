import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggin: false,
  username: "",
  password: "",
  level: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState, 
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      state.password = action.payload.password;
      state.username = action.payload.username;
      state.level = action.payload.level;
      state.isLoggin = true;
      console.log({ payload: action.payload });
    },
  },
});

export const { SET_ACTIVE_USER } = authSlice.actions;
export const selectIsLoggin = (state) => state.auth.isLoggin;
export const selectUsername = (state) => state.auth.username;
export const selectPassword = (state) => state.auth.password;
export const selectLevel = (state) => state.auth.level;

export default authSlice.reducer;
