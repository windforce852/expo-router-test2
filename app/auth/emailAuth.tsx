import { View, Text, Pressable } from "react-native"
import { router, Link } from "expo-router"
import { useAppDispatch } from "@/store/appState"
import { setEmailAuthStat } from "@/store/slice/emailAuthSlice";

export default function EmailAuthScreen() {
  const dispatch = useAppDispatch();

  return (
    <>
    <View style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text>emailAuthScreen</Text>
        <Pressable onPress={() => {
          dispatch(setEmailAuthStat(true))
          router.push('/auth/otpAuth')}}
        >
          <Text>login</Text>
        </Pressable>
    </View>
    </>
  )
}