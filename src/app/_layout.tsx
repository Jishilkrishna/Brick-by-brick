import '@/global.css';
import * as SplashScreen from 'expo-splash-screen';
import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { DarkTheme, ThemeProvider } from 'expo-router';

void SplashScreen.preventAutoHideAsync();

export default function RootLayout(){
  const router=useRouter();const segments=useSegments();
  useEffect(()=>{ void SplashScreen.hideAsync(); },[]);
  useEffect(()=>{let active=true;void import('@/lib/session').then(({getSession})=>getSession()).then(session=>{if(!active)return;const group=segments[0];if(!session&&group==='(tabs)')router.replace('/login');else if(session&&group==='(auth)')router.replace('/home');});return()=>{active=false;};},[router,segments]);
  return <ThemeProvider value={DarkTheme}><Stack screenOptions={{headerShown:false,contentStyle:{backgroundColor:'#101114'}}}><Stack.Screen name="index"/><Stack.Screen name="(auth)"/><Stack.Screen name="(tabs)"/><Stack.Screen name="room/[id]" options={{presentation:'card'}}/></Stack></ThemeProvider>;
}
