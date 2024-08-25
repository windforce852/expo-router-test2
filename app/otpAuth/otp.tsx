import { View, Text, Pressable } from "react-native"
import { router, Router } from "expo-router"

export default function OtpScreen() {

  return (
    <>
    <View style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text>OTP Screen</Text>
      <Pressable onPress={() => {}}><Text>OTP auth</Text></Pressable>
    </View>
    </>
  )
}