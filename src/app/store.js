import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../reduxComponents/newsReducer";
import progressReducer from "../reduxComponents/progressReducer";

export const store = configureStore({
  reducer: {
    articles: newsReducer,
    progress: progressReducer,
  },
});
