import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import emailAuthSlice from "./slice/emailAuthSlice";
import otpAuthSlice from "./slice/otpAuthSlice";

const store = configureStore({
  reducer: {
    emailAuthSlice,
    otpAuthSlice,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;