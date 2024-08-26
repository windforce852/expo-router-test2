import { Stack } from "expo-router";
import { useAppSelector } from '@/store/appState';

export default function listLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
    </Stack>
  )
}