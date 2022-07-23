
import React from 'react';
import { StyleSheet, ViewStyle, ViewProps, Dimensions } from 'react-native';

const screHeight = Dimensions.get('screen').height;
const screWidth = Dimensions.get('screen').width;
export const colores={
    primario:"#5D6D7E",
    secund2:"#5D6D7E",
    secund:"#D68910",
    terciar:"#5D6D7E",
    cuarto:"#FFFFFF",
    texto:"#F5B041",
    texto2:"#FAD7A0",
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