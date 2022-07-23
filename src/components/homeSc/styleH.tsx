import React from 'react';

import { StyleSheet, Dimensions} from 'react-native';
import { colores } from '../../theme/themeApp';

const screHeight = Dimensions.get('screen').height;
const screWidth = Dimensions.get('screen').width;

export const styleh=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff',

    },

    iconos:{
       flex:1,
       flexDirection:"row",
       justifyContent:"space-around",
       alignItems:"center"
   }, 
    lista:{
       flex:3,
       padding:10
   },
   textSub:{
    fontWeight:"bold",
    color:colores.texto
   },
    head:{
       flex:1,
       justifyContent:"space-around",
       alignItems:"center",
       marginTop:20,
       
       
   },
    foot:{
    height:screHeight*.49,
    borderTopStartRadius:50,
    borderTopEndRadius:50,
    overflow:"hidden",
    marginTop:10,
   },
    perfil:{
     backgroundColor:"white",
     height:150,
     width:150,
     borderRadius:100,
     marginBottom:30,
     overflow:"hidden"
   },
    notif:{
    backgroundColor:colores.terciar,
    height:screHeight*.1,
    width:screWidth*.9,
    borderRadius:50,
    marginTop:20,
    overflow:"hidden",
},

shadow:{
    shadowColor: "#D68910",
    shadowOffset: {
        width: 5,
        height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16.00,
    
    elevation: 24,
},
notiSub:{
    paddingStart:20,
    flex:1,
    flexDirection:"row",
},
notiData:{
    paddingStart:20,
    borderBottomColor:"#D68910",
     flex:3,
     flexDirection:"row",
     paddingEnd:10,
     alignItems:"center",
     borderBottomWidth:5
    },
    icon:{
        height:50,
        width:50,
        backgroundColor:"white",
        borderRadius:50,
    },
    
  
  
})