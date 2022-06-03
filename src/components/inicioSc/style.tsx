import React from 'react'
import { Dimensions, StyleSheet, View, Text, Button } from 'react-native';

const screHeight = Dimensions.get('screen').height;
const screWidth = Dimensions.get('screen').width;
export const styleI=StyleSheet.create({
    container:{
      flex:1,  
      alignItems:"center"
      
    },
    circulo:{
      backgroundColor:"white",
      width:screWidth*1.2,
      height:screWidth*1.2,
      borderRadius:500,
      position:"absolute",
      
 
 elevation: 9,
    },
    circ2:{
     backgroundColor:"#DEB982",
     bottom:screHeight*.4,
     justifyContent:"flex-end",
     alignItems:"center"
    },
    circ1:{
     bottom:screHeight*.64,
     justifyContent:"flex-end",
     paddingStart:65,
     paddingBottom:70
     
    },
    cuadro:{
      height:screHeight*.3,
      width:screWidth*.9,
      backgroundColor:"#DEB982",
      top:screHeight*.55,
      borderRadius:50,
      justifyContent:"center",
      alignItems:"center",
      
    },
    descr:{
      height:300,
      width:300,
      justifyContent:"space-around",
      padding:20
    },
    tit1:{
     marginTop:10,
     fontWeight:"bold",
     fontSize:30,
     color:"#CCCBCB",
    },
    icono:{
      height:80,
      width:80,
      backgroundColor:"white",
      borderRadius:100
    },
    shadow:{
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 4,
     },
     shadowOpacity: 0.32,
     shadowRadius: 5.46,
 
     elevation: 9,
     }
 })
