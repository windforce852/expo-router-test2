import { View, Text, Pressable } from "react-native"
import { router, Link } from "expo-router"

export default function OtpScreen() {

  return (
    <>
    <View style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text>OtpScreen</Text>
        <Pressable onPress={() => {}}><Text>otp auth</Text></Pressable>
    </View>
    </>
  )
}