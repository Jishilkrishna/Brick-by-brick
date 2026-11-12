import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { SplashScreenContent } from '@/components/animated-icon';
import { getSession } from '@/lib/session';

export default function EntryScreen(){
  const router=useRouter();
  useEffect(()=>{let active=true; void getSession().then(session=>{if(active&&session){router.replace('/home');}}); return()=>{active=false;};},[router]);
  const start=async()=>{const session=await getSession();router.replace(session?'/home':'/login');};
  return <SplashScreenContent onStart={start}/>;
}
