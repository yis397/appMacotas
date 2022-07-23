import React from 'react';
import {  StyleSheet, View,Text, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colores, styGlobal } from '../../theme/themeApp';
import CardRecord from './cardRecord';
import { Recordatorio, Mascota } from '../../interface/index';
import ButIcon from '../ButIcon';
interface Prop{
    recordatorio:Recordatorio[],
    funcion:(id:string,idP:string)=>void,
    mascota:Mascota,
    navigation:()=>void
}
function FondoD({recordatorio,mascota,navigation,funcion}:Prop) {


    return (
        <LinearGradient start={{x: .5, y: 1}} end={{x: 0, y: .2}} colors={[colores.cuarto, colores.primario]} style={styleD.container}>
         <View style={styleD.heade}>
             <View style={{right:colores.width*.45}}>

               <ButIcon icon={"arrow-back-outline"} funcion={navigation} color={"white"}/>
             </View>
         <View style={styleD.perfil}>
         <Image
                    source={{uri:(mascota.img!=""?mascota.img:"http://via.placeholder.com/200x400")}}
                    style={{height:200,width:"100%",backgroundColor:"white"}}/>
         </View>
         <Text style={{color:colores.texto2,
        fontWeight:"bold",textTransform:"uppercase"}}>{mascota.nombre}</Text>
         </View>
             <ScrollView style={styleD.content}>
             <View style={[styleD.detail,]}>
                 <View style={styleD.dato}><Text style={styleD.detailSub}>Nombre:</Text><Text style={styleD.detailDat}>{mascota.nombre}</Text></View>
                 <View style={styleD.dato}><Text style={styleD.detailSub}>Apodo: </Text><Text style={styleD.detailDat}>{mascota.apodo}</Text></View>
                 <View style={styleD.dato}><Text style={styleD.detailSub}>Sexo:  </Text><Text style={styleD.detailDat}>Hembra</Text></View>
                 <View style={styleD.dato}><Text style={styleD.detailSub}>Edad:  </Text><Text style={styleD.detailDat}>24</Text></View>
             </View>
             <Text style={{}}>S U S  R E C O R D A T O R I O S</Text>
             {recordatorio.length!=0?recordatorio.map((item:Recordatorio,i)=><View key={i} style={{marginTop:20}}><CardRecord record={item} funcion={()=>funcion(item.id,item.idP)}/></View>):<Text>no tiene algun recordatorio</Text>}
             
             </ScrollView>
        </LinearGradient>
    );
}

export default FondoD;

const styleD=StyleSheet.create({
    container:{
        flex:1,
    },
    heade:{
        backgroundColor:colores.primario,
        height:colores.height*.29,
        width:colores.width,
        justifyContent:"center",
        alignItems:"center",
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        overflow:"hidden",
        zIndex:100
    },
    perfil:{
        backgroundColor:"white",
        height:150,
        width:150,
        marginBottom:20,
        borderRadius:100,
        overflow:"hidden"
    },
    content:{
        padding:20,
        
    },
    detail:{
        backgroundColor:colores.terciar,
        height:colores.height*.13,
        width:colores.width*.9,
        borderRadius:50,
        overflow:"hidden",
        marginBottom:20,
        paddingStart:10,
        justifyContent:"center"

    },
    row:{
        flexDirection:"row",
        height:colores.height*.16,
        width:colores.width*.9,
        backgroundColor:"red",
        marginTop:15
    },
    dato:{
        flexDirection:"row",
        justifyContent:"space-around",
        
    },
    detailSub:{
        alignItems:"flex-start",
        textAlign:"left",
        fontSize:12,
        marginRight:50,
        color:colores.texto,
        fontWeight:"bold"
    },detailDat:{
        fontSize:15,
        color:colores.texto2
    }

})

function useContext(PetsContext: any): { petState: any; eliminarTodo: any; existPets: any; } {
    throw new Error('Function not implemented.');
}
