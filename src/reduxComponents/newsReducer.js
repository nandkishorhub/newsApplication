import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    collectArticle: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});


// Action creators are generated for each case reducer function
export const { collectArticle } = newsSlice.actions;

export default newsSlice.reducer;
