import * as SplashScreen from 'expo-splash-screen';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function SplashScreenContent({ onStart }: { onStart: () => void }) {
  return <View onLayout={() => { void SplashScreen.hideAsync(); }} style={styles.overlay}>
    <Pressable onPress={onStart} style={styles.content} accessibilityRole="button" accessibilityLabel="Press to start Brick by Brick">
      <View style={styles.mark}><View style={styles.row}><View style={styles.small}/><View style={styles.small}/></View><View style={styles.wide}/><View style={styles.row}><View style={styles.small}/><View style={styles.small}/></View></View>
      <Text style={styles.title}>Brick</Text><Text style={styles.accent}>by Brick</Text><View style={styles.divider}/><Text style={styles.tagline}>Build your habits.</Text><Text style={styles.tagline}>Level up your life.</Text><Text style={styles.start}>‖  PRESS TO START  ‖</Text>
    </Pressable><Text style={styles.footer}>ONE DAY. ONE BRICK. ONE BETTER YOU.</Text>
  </View>;
}
const styles=StyleSheet.create({overlay:{...StyleSheet.absoluteFillObject,backgroundColor:'#101114',alignItems:'center',justifyContent:'center'},content:{alignItems:'center',justifyContent:'center',padding:24},mark:{width:88,height:88,justifyContent:'center',gap:5,padding:13,borderWidth:1,borderColor:'#555C1D',borderRadius:24,backgroundColor:'#1B1C20',marginBottom:29,shadowColor:'#D8F20A',shadowOpacity:0.22,shadowRadius:24,shadowOffset:{width:0,height:0}},row:{flexDirection:'row',justifyContent:'center',gap:5},small:{height:13,width:24,backgroundColor:'#D8F20A',borderRadius:4},wide:{height:13,width:53,alignSelf:'center',backgroundColor:'#D8F20A',borderRadius:4},title:{color:'#F5F4F0',fontSize:51,lineHeight:55,fontWeight:'900',letterSpacing:-2},accent:{color:'#D8F20A',fontSize:51,lineHeight:55,fontWeight:'900',letterSpacing:-2},divider:{height:1,width:52,backgroundColor:'#D8F20A',opacity:0.7,marginVertical:24},tagline:{color:'#A2A2A5',fontSize:17,lineHeight:26,letterSpacing:0.2},start:{marginTop:49,color:'#D8F20A',fontWeight:'800',fontSize:11,letterSpacing:2.5},footer:{position:'absolute',bottom:35,color:'#65666A',fontSize:9,fontWeight:'700',letterSpacing:1.8}});
