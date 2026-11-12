import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C } from '@/shared/theme/brand';

export default function SquadScreen(){
  const router=useRouter();const[code,setCode]=useState('');const[message,setMessage]=useState('');
  const join=()=>{if(!/^BRK-\d{3}$/i.test(code.trim())){setMessage('Enter a valid room code.');return;}setMessage('No room found. Rooms are not synced between devices yet.');};
  return <SafeAreaView style={s.safe}><ScrollView contentContainerStyle={s.page}><Text style={s.eyebrow}>TOGETHER WE CONQUER</Text><Text style={s.title}>Build together.</Text><Text style={s.sub}>Create a room or join your squad with an invite code.</Text>
    <Pressable style={s.create} onPress={()=>router.push('/room/new' as never)}><Text style={s.createText}>＋  Create a room</Text></Pressable>
    <View style={s.joinCard}><Text style={s.heading}>Join a room</Text><Text style={s.muted}>Enter the code shared by your room admin.</Text><View style={s.joinRow}><TextInput value={code} onChangeText={v=>{setCode(v.toUpperCase());setMessage('');}} autoCapitalize="characters" placeholder="Invite code" placeholderTextColor="#77787D" style={s.input}/><Pressable style={s.joinButton} onPress={join}><Text style={s.joinText}>Join</Text></Pressable></View>{message?<Text style={s.message}>{message}</Text>:null}</View>
    <View style={s.empty}><Text style={s.heading}>No squads yet</Text><Text style={s.muted}>Rooms you create or join will appear here.</Text></View>
    <Text style={s.note}>Room creation and invitations are previews until a shared backend is connected.</Text>
  </ScrollView></SafeAreaView>;
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:C.bg},page:{padding:22,maxWidth:640,width:'100%',alignSelf:'center'},eyebrow:{color:C.lime,fontSize:11,fontWeight:'800',letterSpacing:1.5},title:{color:C.text,fontSize:29,fontWeight:'800',marginTop:8},sub:{color:C.muted,fontSize:14,lineHeight:20,marginTop:8,marginBottom:22},create:{backgroundColor:C.lime,borderRadius:12,alignItems:'center',padding:15},createText:{color:C.bg,fontWeight:'800',fontSize:14},joinCard:{backgroundColor:C.card,borderWidth:1,borderColor:C.line,borderRadius:15,padding:16,marginTop:13,gap:9},heading:{color:C.text,fontSize:16,fontWeight:'700'},muted:{color:C.muted,fontSize:12,lineHeight:18},joinRow:{flexDirection:'row',gap:8,marginTop:4},input:{flex:1,borderWidth:1,borderColor:C.line,borderRadius:10,color:C.text,paddingHorizontal:12,height:44,fontWeight:'700',letterSpacing:1},joinButton:{backgroundColor:'#303319',paddingHorizontal:20,borderRadius:10,justifyContent:'center'},joinText:{color:C.lime,fontWeight:'800'},message:{color:'#FF9A83',fontSize:12},empty:{borderWidth:1,borderColor:C.line,borderRadius:15,padding:16,marginTop:24,gap:5},note:{color:C.muted,fontSize:11,lineHeight:16,marginTop:18}});
