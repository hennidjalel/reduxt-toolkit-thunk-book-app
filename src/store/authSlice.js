import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLogin: false, name: "jalel henni" },
  reducers: {
    logInOut: (state) => {
      state.isLogin = !state.isLogin;
    },
  },
});

export const { logInOut } = authSlice.actions;
export default authSlice.reducer;
