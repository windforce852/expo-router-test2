import { useAppSelector } from '@/store/appState';
import { Redirect, Slot } from "expo-router";
import { Stack } from 'expo-router';

export default function protectedLayout() {
  console.log('protectedLayout fire');

  const isEmailAuthed = useAppSelector((state) => state.emailAuthSlice.emailAuthState);
  const isOtpAuthed = useAppSelector((state) => state.otpAuthSlice.otpAuthState);
  console.log(`isEmailAuthed: ${isEmailAuthed}`);
  console.log(`isOtpAuthed: ${isOtpAuthed}`);

  if (!isOtpAuthed) {
    if (!isEmailAuthed) {
      console.log("!isEmailAuthed, trigger redirect");
      return(
        <Redirect href={'/auth/emailAuth'}/>
      )
    }
    console.log("!isOtpAuthed, trigger redirect");
      return(
        <Redirect href={'/auth/otpAuth'}/>
      )
  } else {
    return (
      // <Stack>
      //   <Stack.Screen name="list" options={{headerShown: false}}/>
      // </Stack>
      // <Redirect href={'/(protected)/list/list'}/>
      <Slot/>
    )
  }
}