import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { SplashScreenContent } from '@/features/start/presentation/SplashScreenContent';
import { useSession } from '@/application/SessionContext';

export default function EntryScreen(){
  const router=useRouter();const{getCurrentProfile}=useSession();
  useEffect(()=>{let active=true; void getCurrentProfile().then(session=>{if(active&&session){router.replace('/home');}}); return()=>{active=false;};},[getCurrentProfile,router]);
  const start=async()=>{const session=await getCurrentProfile();router.replace(session?'/home':'/login');};
  return <SplashScreenContent onStart={start}/>;
}
