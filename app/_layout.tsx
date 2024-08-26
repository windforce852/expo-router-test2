import { Stack } from "expo-router";
import store from "@/store/appState";
import { Provider } from "react-redux";
import { View, Text, Pressable } from "react-native"
import { router, Link, Slot } from "expo-router"
import { createContext, useState } from 'react';
import { useAppSelector } from '@/store/appState';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="list"
          options={{headerShown: false}}
        />
      </Stack>
    </Provider>
  )
}