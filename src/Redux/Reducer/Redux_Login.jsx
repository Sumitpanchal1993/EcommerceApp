import { createSlice } from "@reduxjs/toolkit";

export const redux_login_state = createSlice({
  name: "redux_login_state",
  initialState: null,
  reducers: {
    IS_LOGIN: (state, action) => {
      return true;
    },
    IS_NOT_LOGIN: (state, action) => {
        return false
    },
  },
});

export const { IS_LOGIN, IS_NOT_LOGIN } = redux_login_state.actions;

export default redux_login_state.reducer;