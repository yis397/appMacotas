
import React from 'react';
import { StyleSheet, Dimensions, ViewStyle, ViewProps} from 'react-native';

const screHeight = Dimensions.get('screen').height;
const screWidth = Dimensions.get('screen').width;
export const colores={
    primario:"#FFE6C0",
    secund2:"#ADACD1",
    secund:"#5A5987",
    terciar:"#FFE3AC",
    cuarto:"#FFFFFF",
    texto:"#4A350C",
    height:screHeight,
    width:screWidth,
    

}
export const styGlobal=StyleSheet.create({
    flexCen:{
        alignItems:"center",
        justifyContent:"center",
      },
      rowEspaciado:{
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-around",
      },
      circulo:{
        backgroundColor:"white",
        borderRadius:50,
    },
})