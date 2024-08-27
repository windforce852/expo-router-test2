import { View, Text, Pressable } from "react-native"
import { router, Link } from "expo-router"
import { useAppDispatch } from "@/store/appState"
import { setEmailAuthState } from "@/store/slice/emailAuthSlice";
import { useAppSelector } from "@/store/appState";

import { useEffect } from "react";

export default function EmailAuthScreen() {
  const dispatch = useAppDispatch();
  const emailAuthState = useAppSelector((state) => state.emailAuthSlice.emailAuthState);

  useEffect(() => {
    if (emailAuthState) {
      console.log("emailAuthState has toggle");
    }
  }, [emailAuthState]);

  return (
    <>
    <View style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text>emailAuthScreen</Text>
        <Pressable onPress={() => {
          dispatch(setEmailAuthState(true))
          // router.push('/(protected)/list/list')
          router.push('/auth/otpAuth')
        }}>
          <Text>login</Text>
        </Pressable>
    </View>
    </>
  )
}