import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C } from '@/shared/theme/brand';
import { useSession } from '@/application/SessionContext';
import type { Profile } from '@/domain/entities/Profile';

export default function ProfileScreen(){
  const router=useRouter();const{getCurrentProfile,signOut}=useSession();const[profile,setProfile]=useState<Profile|null>(null);
  useEffect(()=>{void getCurrentProfile().then(setProfile);},[getCurrentProfile]);
  const logOut=async()=>{await signOut();router.replace('/');};
  return <SafeAreaView style={s.safe}><ScrollView contentContainerStyle={s.page}><Text style={s.eyebrow}>PROFILE</Text><Text style={s.title}>Your medal vault.</Text>
    <View style={s.profile}><View style={s.avatar}><Text style={s.initial}>{profile?.avatar??' '}</Text></View><View><Text style={s.name}>{profile?.username??' '}</Text><Text style={s.muted}>{profile?.email??' '}</Text></View></View>
    <View style={s.stats}><View style={s.stat}><Text style={s.value}>0</Text><Text style={s.muted}>XP</Text></View><View style={s.stat}><Text style={s.value}>0</Text><Text style={s.muted}>Streak</Text></View><View style={s.stat}><Text style={s.value}>0</Text><Text style={s.muted}>Medals</Text></View></View>
    <View style={s.empty}><Text style={s.heading}>No medals yet</Text><Text style={s.muted}>Earn medals by completing your solo goals and squad challenges.</Text></View>
    <Pressable style={s.signOut} onPress={logOut}><Text style={s.signOutText}>Sign out</Text></Pressable>
  </ScrollView></SafeAreaView>;
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:C.bg},page:{padding:22,maxWidth:640,width:'100%',alignSelf:'center'},eyebrow:{color:C.lime,fontSize:11,fontWeight:'800',letterSpacing:1.5},title:{color:C.text,fontSize:27,fontWeight:'800',marginTop:8,marginBottom:24},profile:{flexDirection:'row',alignItems:'center',gap:14,backgroundColor:C.card,borderRadius:16,borderWidth:1,borderColor:C.line,padding:17},avatar:{width:52,height:52,borderRadius:28,backgroundColor:'#34363A',alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:C.lime},initial:{color:C.lime,fontSize:20,fontWeight:'800'},name:{color:C.text,fontSize:17,fontWeight:'700',marginBottom:5},muted:{color:C.muted,fontSize:12,lineHeight:18},stats:{flexDirection:'row',gap:10,marginVertical:17},stat:{flex:1,backgroundColor:C.card,borderWidth:1,borderColor:C.line,borderRadius:13,padding:14},value:{color:C.lime,fontWeight:'800',fontSize:22,marginBottom:5},empty:{backgroundColor:C.card,borderWidth:1,borderColor:C.line,borderRadius:14,padding:16,marginTop:12,gap:6},heading:{color:C.text,fontSize:15,fontWeight:'700'},signOut:{paddingVertical:15,alignItems:'center',marginTop:16},signOutText:{color:'#FF9A83',fontWeight:'700'}});
