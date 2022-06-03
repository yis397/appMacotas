import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/themeApp';


interface GetProp{
  funcion:()=>void,
  icon:String,
  color?:string,
  name?:string,
  size?:number
}
const ButIcon=({funcion,icon,color=colores.secund,name="",size=30}:GetProp)=> {

    return (
        <TouchableOpacity onPress={()=>funcion()}>
          <View style={{justifyContent:"center",alignItems:"center"}}>

          <Icon 
          name={icon.toString()}
          size={size}
          color={color}
          />
          <Text style={{fontSize:10,color:colores.texto}}>{name}</Text>
          </View>
     
        </TouchableOpacity>
    );
}

export default ButIcon;