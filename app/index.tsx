import { View, Text, Pressable } from "react-native"
import { router, Link } from "expo-router"

export default function Root() {

  return (
    <>
    <View style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text>Login</Text>
      <Pressable onPress={() => {router.push("/otpAuth/otp")}}><Text>email auth</Text></Pressable>
      <Link href={'/about'}>Link to About</Link>
      <Link href={'/posts/list'}>Link to List</Link>
      <Link href={'/posts'}>Link to Posts Home</Link>
    </View>
    </>
  )
}