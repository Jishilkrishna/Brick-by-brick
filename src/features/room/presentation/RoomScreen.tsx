import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C } from '@/shared/theme/brand';
import { useSession } from '@/application/SessionContext';
import type { Profile } from '@/domain/entities/Profile';

export default function RoomScreen(){
  const {id}=useLocalSearchParams<{id:string}>();const router=useRouter();const{getCurrentProfile}=useSession();const[profile,setProfile]=useState<Profile|null>(null);const[name,setName]=useState('');const[createdName,setCreatedName]=useState('');
  useEffect(()=>{void getCurrentProfile().then(setProfile);},[getCurrentProfile]);
  const isCreate=id==='new';
  return <SafeAreaView style={s.safe}><ScrollView contentContainerStyle={s.page}><Pressable onPress={()=>router.back()}><Text style={s.back}>←  Squads</Text></Pressable>
    {!isCreate?<View style={s.card}><Text style={s.heading}>Room unavailable</Text><Text style={s.copy}>There is no saved room for this code.</Text></View>:createdName?<><Text style={s.eyebrow}>ROOM LOBBY</Text><Text style={s.title}>{createdName}</Text><View style={s.card}><Text style={s.heading}>Lobby</Text><Text style={s.copy}>Room admin: {profile?.username??''}</Text><Text style={s.copy}>Members: 1</Text><Text style={s.copy}>Task drafting unlocks when at least 2 members have joined.</Text></View><Text style={s.note}>Rooms are not synced or saved to a shared server yet. Invite codes and multiplayer actions are unavailable.</Text></>:<><Text style={s.eyebrow}>CREATE A ROOM</Text><Text style={s.title}>Start a squad.</Text><Text style={s.copy}>Give your room a name. Room creation is local until a shared backend is connected.</Text><TextInput value={name} onChangeText={setName} placeholder="Room name" placeholderTextColor="#77787D" style={s.input}/><Pressable disabled={!name.trim()} style={[s.button,!name.trim()&&s.disabled]} onPress={()=>setCreatedName(name.trim())}><Text style={s.buttonText}>Create room</Text></Pressable></>}
  </ScrollView></SafeAreaView>;
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:C.bg},page:{padding:22,maxWidth:640,width:'100%',alignSelf:'center'},back:{color:C.muted,fontSize:14,marginBottom:20},eyebrow:{color:C.lime,fontSize:11,fontWeight:'800',letterSpacing:1.5},title:{color:C.text,fontSize:28,fontWeight:'800',marginTop:8,marginBottom:18},copy:{color:C.muted,fontSize:13,lineHeight:20,marginBottom:8},card:{backgroundColor:C.card,borderWidth:1,borderColor:C.line,borderRadius:15,padding:16,gap:7},heading:{color:C.text,fontSize:17,fontWeight:'700'},input:{height:52,color:C.text,borderWidth:1,borderColor:C.line,borderRadius:12,paddingHorizontal:14,marginTop:20},button:{backgroundColor:C.lime,borderRadius:12,alignItems:'center',padding:15,marginTop:12},buttonText:{color:C.bg,fontSize:14,fontWeight:'800'},disabled:{opacity:.4},note:{color:C.muted,fontSize:12,lineHeight:18,marginTop:16}});
