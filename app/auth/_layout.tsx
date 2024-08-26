import { Stack } from "expo-router";

export default function authLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="emailAuth"
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="otpAuth"
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="list"
        options={{headerShown: false}}
      />
    </Stack>
  )
}