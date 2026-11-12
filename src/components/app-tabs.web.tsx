import { Tabs, TabList, TabTrigger, TabSlot, TabTriggerSlotProps, TabListProps } from 'expo-router/ui';
import { Pressable, View, StyleSheet } from 'react-native';
import { C } from '@/constants/brand';
import { Text } from 'react-native';

export default function AppTabs() {
  return <Tabs><TabSlot style={{ height: '100%' }} /><TabList asChild><View style={styles.bar}>
    <TabTrigger name="home" href="/home" asChild><TabButton>⌂　Home</TabButton></TabTrigger>
    <TabTrigger name="solo" href="/solo" asChild><TabButton>▤　Solo</TabButton></TabTrigger>
    <TabTrigger name="squad" href="/squad" asChild><TabButton>◎　Squad</TabButton></TabTrigger>
    <TabTrigger name="profile" href="/profile" asChild><TabButton>◉　Profile</TabButton></TabTrigger>
  </View></TabList></Tabs>;
}
function TabButton({children,isFocused,...props}:TabTriggerSlotProps){return <Pressable {...props} style={[styles.item,isFocused&&styles.selected]}><Text style={[styles.label,isFocused&&styles.active]}>{children}</Text></Pressable>}
const styles=StyleSheet.create({bar:{position:'absolute',bottom:0,width:'100%',padding:10,paddingBottom:14,backgroundColor:'#17181B',borderTopWidth:1,borderColor:'#303136',flexDirection:'row',justifyContent:'center',gap:8},item:{paddingVertical:11,paddingHorizontal:15,borderRadius:12},selected:{backgroundColor:'#303319'},label:{color:'#A2A2A5',fontSize:13,fontWeight:'600'},active:{color:C.lime}});
