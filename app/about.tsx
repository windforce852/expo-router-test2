import { View, Text, Pressable } from "react-native"
import { router, Link } from "expo-router"

export default function About() {

  return (
    <>
    <View style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text>About</Text>
      <Link href={'/'}>Link to Root</Link>
    </View>
    </>
  )
}