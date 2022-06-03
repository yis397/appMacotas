import React from 'react';
import { ScrollView, Text, View, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButIcon from '../components/ButIcon';
import { colores } from '../theme/themeApp';


function TabCartilla({navigation}:any) {

    return (
        <LinearGradient start={{x: .5, y: 1}} end={{x: 0, y: .2}} colors={[colores.cuarto, colores.primario]} style={{flex:1}}>
              <View style={{right:colores.width*.45,top:70}}>

              <ButIcon icon={"arrow-back-outline"} funcion={()=>navigation.pop()} color={colores.secund}/>
             </View>        
            <View style={{alignItems:"center",justifyContent:"center", marginTop:20}}>
            <ButIcon icon={"camera-outline"} funcion={()=>console.log("hola mundo")} color={colores.secund} size={50} />
             <Text style={{color:"#4A350C",fontSize:20}}>A g r e g a  f o t o s   d e  t u  c a r t i l l a</Text>
             <View style={{backgroundColor:colores.terciar,width:colores.width*.9,height:1,top:10}}></View>
            </View>
            <View style={{padding:20,top:40}}>
                <ScrollView>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <View style={{backgroundColor:"white",width:colores.width*.4,height:colores.height*.2}}></View>
                        <View style={{backgroundColor:"white",width:colores.width*.4,height:colores.height*.2}}></View>
                    </View>
                    
                </ScrollView>

            </View>
        </LinearGradient>
    );
}

export default TabCartilla;