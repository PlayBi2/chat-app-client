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
      state.name = action.payload.name;
      state.level = action.payload.level;
      state.email = action.payload.email;
      state.isLoggin = true;
      console.log({ payload: action.payload });
    },
    REMOVE_ACTIVE_USER: (state, action) => {
      state.password = null;
      state.name = null;
      state.level = null;
      state.email = null;
      state.isLoggin = false;
      console.log({ payload: action.payload });
    },
  },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;
export const selectIsLoggin = (state) => state.auth.isLoggin;
export const selectUsername = (state) => state.auth.name;
export const selectPassword = (state) => state.auth.password;
export const selectEmail = (state) => state.auth.email;
export const selectLevel = (state) => state.auth.level;

export default authSlice.reducer;
