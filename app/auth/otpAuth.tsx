import { View, Text, Pressable } from "react-native"
import { router, Link } from "expo-router"
import { useAppDispatch } from "@/store/appState"
import { setOTPAuthStat } from "@/store/slice/otpAuthSlice"

export default function OtpAuthScreen() {
  const dispatch = useAppDispatch();
  
  return (
    <>
    <View style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text>OtpAuthScreen</Text>
        <Pressable onPress={() => {
            dispatch(setOTPAuthStat(true))
            router.push('/(protected)/list/listScreen')
          }}>
            <Text>login</Text>
          </Pressable>
    </View>
    </>
  )
}