import { View, Text, Pressable } from "react-native"
import { router, Link } from "expo-router"

export default function List() {

  return (
    <>
    <View style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text>List</Text>
      <Link href={'/'}>Link to Root</Link>
    </View>
    </>
  )
}