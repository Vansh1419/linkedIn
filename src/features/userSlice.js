import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {}
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { logIn,logOut } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
