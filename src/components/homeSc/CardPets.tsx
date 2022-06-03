import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StyleSheet, Dimensions} from 'react-native';
import { Mascota } from '../../interface';
import { colores, styGlobal } from '../../theme/themeApp';
import { PetsContext } from '../../context/PetsContext';
import ButIcon from '../ButIcon';
interface Prop{
    item:Mascota,
    editM:(id:number)=>void,
    i:number
}
function CardPets({item,editM,i}:Prop) {
    const {selector,deletPet,petState} = useContext(PetsContext);
    return (
        <TouchableOpacity style={[styleC.body,styGlobal.rowEspaciado,{backgroundColor:(petState.seleccion.id==item.id?colores.secund:colores.secund2)}]}  onPress={()=>selector(item.id)}>
            <View style={[styGlobal.circulo,styleC.img]}>
            <Image
                    source={{uri:(item.img!=""?item.img:"http://via.placeholder.com/200x400")}}
                    style={{height:200,width:"100%",backgroundColor:"white"}}/>
            </View>
            <Text  style={[styleC.nom,styGlobal.flexCen]}>{item.nombre}</Text>
            <View style={[styleC.icons,styGlobal.rowEspaciado]}>
                <ButIcon {...{icon:"pencil-outline",funcion:()=>editM(i),color:colores.cuarto,name:"Editar"}} />
                <View style={{marginLeft:30}}/>
                <ButIcon {...{icon:"trash-outline",funcion:()=>deletPet(item.id),color:colores.cuarto,name:"Borrar"}}/>
            </View>
        </TouchableOpacity>
    );
}

export default CardPets;

const screHeight = Dimensions.get('screen').height;
const screWidth = Dimensions.get('screen').width;

 const styleC=StyleSheet.create({
 body:{
     width:screWidth*.9,
     height:screHeight*.12,
     borderRadius:50,
     marginTop:20
 },
 img:{
     alignItems:"center",
     justifyContent:"center",
   height:80,
   width:80,
   overflow:"hidden"
 },
 nom:{
     
 },
 icons:{
     height:70,
     with:50
 }

})