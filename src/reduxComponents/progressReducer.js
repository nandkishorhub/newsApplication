import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;
export const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});


// Action creators are generated for each case reducer function
export const { setProgress } = progressSlice.actions;

export default progressSlice.reducer;
