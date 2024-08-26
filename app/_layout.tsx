import { Stack } from "expo-router";
import store from "@/store/appState";
import { Provider } from "react-redux";

export default function RootLayout() {
  console.log('RootLayout Fire')

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="list"
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="auth"
          options={{headerShown: false}}
        />
      </Stack>
    </Provider>
  )
}