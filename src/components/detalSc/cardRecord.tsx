import React from 'react';
import { Text, View } from 'react-native';
import ButIcon from '../ButIcon';
import { colores } from '../../theme/themeApp';
import { Recordatorio } from '../../interface/index';
interface Prop{
    record:Recordatorio,
    funcion:(id:string,idP:string)=>void
}
function CardRecord({record,funcion}:Prop) {
    return (
        <View style={{backgroundColor:colores.secund2,borderRadius:50,width:colores.width*.9,height:colores.height*.18,alignItems:"center",paddingTop:20}}>
            <View style={{flex:1,flexDirection:"row",width:colores.width*.8}}><Text>NOMBRE :</Text><Text>{record.nombre}</Text></View>
            <View style={{flex:3,flexDirection:"row",width:colores.width*.8}}>
            <View style={{flex:3}}><Text style={{flex:2}}>{record.actividad}</Text>
            <Text style={{flex:1}}>{record.fecha}</Text>
            </View>
            <View style={{flex:1}}><ButIcon icon={'trash-outline'} funcion={()=>funcion(record.id,record.idP)}/></View></View>
        </View>
    );
}

export default CardRecord;