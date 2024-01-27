import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../features/userSlice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
