// configureStore - combine all reducers
import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./features/blog/blogApi";

export const store = configureStore({
  reducer: {
    // Add generated reducer as a specific top-level slice
    [blogApi.reducerPath]: blogApi.reducer,
  },

  // adding api middleware enables caching, invalidation, polling,
  // and other useful features of 'rtk-query'.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),
});
