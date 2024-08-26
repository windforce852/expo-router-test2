import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface EmailAuthState {
  emailAuthState: boolean;
}

const initialState: EmailAuthState = {
  emailAuthState: false,
}

const emailAuthState = createSlice({
  name: 'emailAuthState',
  initialState,
  reducers: {
    setEmailAuthStat: (state, action) => {
      state.emailAuthState = action.payload;
    },
  }
})

export const { setEmailAuthStat } = emailAuthState.actions;

export default emailAuthState.reducer;