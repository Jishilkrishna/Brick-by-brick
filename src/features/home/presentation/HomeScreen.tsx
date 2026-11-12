import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C } from '@/shared/theme/brand';
import { useSession } from '@/application/SessionContext';
import type { Profile } from '@/domain/entities/Profile';

export default function HomeScreen() {
  const router = useRouter();
  const { getCurrentProfile } = useSession();
  const [profile, setProfile] = useState<Profile | null>(null);
  useEffect(() => { void getCurrentProfile().then(setProfile); }, [getCurrentProfile]);
  const todayLabel = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }).toUpperCase();

  return <SafeAreaView style={s.safe}><ScrollView contentContainerStyle={s.page}>
    <View style={s.top}><View><Text style={s.eyebrow}>{todayLabel}</Text><Text style={s.title}>Build your day.</Text><Text style={s.greeting}>{profile ? `Welcome, ${profile.username}` : 'Start with one small win.'}</Text></View><Pressable style={s.avatar} onPress={() => router.push('/profile' as never)}><Text style={s.avatarText}>{profile?.avatar ?? '·'}</Text></Pressable></View>
    <View style={s.hero}><View style={s.rowBetween}><View><Text style={s.eyebrow}>YOUR SOLO LEVEL</Text><Text style={s.level}>Level 1 <Text style={s.muted}>· Begin</Text></Text></View><Text style={s.medal}>✦</Text></View><View style={s.progressTrack}><View style={[s.progressFill, { width: '0%' }]} /></View><View style={s.rowBetween}><Text style={s.small}>0 XP</Text><Text style={s.small}>Create tasks to start earning</Text></View></View>
    <View style={s.sectionHead}><Text style={s.sectionTitle}>Today’s bricks</Text><Pressable onPress={() => router.push('/solo' as never)}><Text style={s.link}>Add tasks →</Text></Pressable></View>
    <Pressable style={s.emptyCard} onPress={() => router.push('/solo' as never)}><Text style={s.emptyTitle}>No daily tasks yet</Text><Text style={s.small}>Add a task to start building your routine.</Text></Pressable>
    <View style={s.sectionHead}><Text style={s.sectionTitle}>Your squad</Text><Pressable onPress={() => router.push('/squad' as never)}><Text style={s.link}>Open squads →</Text></Pressable></View>
    <Pressable style={s.emptyCard} onPress={() => router.push('/squad' as never)}><Text style={s.emptyTitle}>No rooms yet</Text><Text style={s.small}>Create a room or join one with an invite code.</Text></Pressable>
    <View style={s.sectionHead}><Text style={s.sectionTitle}>Medal vault</Text><Pressable onPress={() => router.push('/profile' as never)}><Text style={s.link}>View vault →</Text></Pressable></View>
    <View style={s.emptyCard}><Text style={s.emptyTitle}>No medals earned yet</Text><Text style={s.small}>Keep building. Your medals will appear here.</Text></View>
  </ScrollView></SafeAreaView>;
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:C.bg},page:{padding:22,paddingBottom:40,maxWidth:640,width:'100%',alignSelf:'center'},top:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:24},eyebrow:{color:C.muted,fontSize:11,letterSpacing:1.4,fontWeight:'700'},title:{color:C.text,fontSize:30,fontWeight:'800',marginTop:6},greeting:{color:C.muted,fontSize:13,marginTop:5},avatar:{height:42,width:42,borderRadius:21,backgroundColor:'#33343A',alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:C.line},avatarText:{color:C.lime,fontWeight:'800',fontSize:16},hero:{backgroundColor:C.card,borderColor:C.line,borderWidth:1,borderRadius:20,padding:19,marginBottom:27},rowBetween:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},level:{color:C.text,fontSize:22,fontWeight:'700',marginTop:8},muted:{color:C.muted,fontSize:15,fontWeight:'500'},medal:{color:C.lime,fontSize:32},progressTrack:{height:9,backgroundColor:'#36373B',borderRadius:9,overflow:'hidden',marginTop:19,marginBottom:9},progressFill:{height:'100%',backgroundColor:C.lime,borderRadius:9},small:{color:C.muted,fontSize:12},sectionHead:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:12,marginTop:3},sectionTitle:{color:C.text,fontSize:19,fontWeight:'700'},link:{color:C.lime,fontSize:13,fontWeight:'700'},emptyCard:{backgroundColor:C.card,borderColor:C.line,borderWidth:1,borderRadius:16,padding:16,marginBottom:24,gap:6},emptyTitle:{color:C.text,fontSize:14,fontWeight:'700'}});
