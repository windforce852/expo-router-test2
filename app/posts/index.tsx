import { View, Text, Pressable } from "react-native"
import { router, Link } from "expo-router"

export default function PostHome() {

  return (
    <>
    <View style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text>Post Home</Text>
      <Link href={'/'}>Link to Root</Link>
    </View>
    </>
  )
}