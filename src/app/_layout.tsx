import '@/global.css';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { DarkTheme, ThemeProvider } from 'expo-router';

void SplashScreen.preventAutoHideAsync();

export default function RootLayout(){
  useEffect(()=>{ void SplashScreen.hideAsync(); },[]);
  return <ThemeProvider value={DarkTheme}><Stack screenOptions={{headerShown:false,contentStyle:{backgroundColor:'#101114'}}}><Stack.Screen name="index"/><Stack.Screen name="(auth)"/><Stack.Screen name="(tabs)"/><Stack.Screen name="room/[id]" options={{presentation:'card'}}/></Stack></ThemeProvider>;
}
