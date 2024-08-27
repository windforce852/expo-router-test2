import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "@/store/appState";
import { Redirect } from "expo-router";

export default function RootLayout() {
  console.log('RootLayout Fire')

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="(protected)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="auth"
          options={{ headerShown: false }}
        />
      </Stack>
    </Provider>
  )
}