import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface OTPAuthState {
  otpAuthState: boolean;
}

const initialState: OTPAuthState = {
  otpAuthState: false,
}

const otpAuthState = createSlice({
  name: 'otpAuthState',
  initialState,
  reducers: {
    setOTPAuthStat: (state, action) => {
      state.otpAuthState = action.payload;
    },
  }
})

export const { setOTPAuthStat } = otpAuthState.actions;

export default otpAuthState.reducer;