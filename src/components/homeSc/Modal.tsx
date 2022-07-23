import React, {  } from 'react';
import { Button, Modal,  Text, View } from 'react-native';
import { StyleSheet} from 'react-native';
import AddPets from './AddPets';
import Actividad from './Actividad';
import { Mascota ,Recordatorio} from '../../interface';
interface Prop{
    openM:boolean,
    cerrarM:()=>void,
    tipo:number,
    tipo2:number,

}
function ModalH({openM,cerrarM,tipo,tipo2}:Prop) { 
    
    return (
        
        <Modal
        style={{position:"absolute"}}
        animationType="slide"
        transparent={true}
        visible={openM}>
         <View style={{...styleM.container,...styleM.center}}>

        {
            tipo==1?<AddPets tipo={tipo2}  cerrarM={cerrarM}/>:<Actividad cerrarM={cerrarM} />
        }
    
        
       </View> 
        </Modal>

    );
}

export default ModalH;

 const styleM=StyleSheet.create({
    container:{
        
        flex:1,
        backgroundColor:"rgba(245, 176, 65 ,.6)",
       
    },
    
    center:{
        justifyContent:"center",
        alignItems:"center",
    },
})