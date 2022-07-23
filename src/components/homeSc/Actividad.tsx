import React, {  useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import useForm from '../../hooks/useForm';
import { colores } from '../../theme/themeApp';
import ButIcon from '../ButIcon';
import InputText from '../InputText';
import { Recordatorio } from '../../interface/index';
import { PetsContext } from '../../context/PetsContext';
interface Prop{
    cerrarM:()=>void,
}
function Actividad({cerrarM}:Prop) {
    const {addRecord,petState} = useContext(PetsContext);
    const fechaActual=new Date()
    const [values,setValor,resetValor]=useForm({nombre:"",actividad:""})
    const {nombre,actividad}=values;
    const [open, setOpen] = useState({open:false,valid:true,nota:"",color:"red"})
    const [date, setDate] = useState(fechaActual)
    const agregar=()=>{
        if (nombre==""||nombre==undefined||actividad==""||actividad==undefined) {
            setOpen({...open,nota:"Llene todos los campos",color:"red"})
            return
        }else{
            const prefix=(date.getHours()>=12?'pm':'am')
            const hora=`${date.getHours()}:${date.getMinutes()}${prefix}`
            const fecha=`${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`
            const id=date.valueOf().toString()
            setOpen({...open,nota:"Agregado correctamente",color:colores.secund})
            const record:Recordatorio={nombre,actividad,fecha,hora,id,idP:petState.seleccion.id};
            addRecord(record)
            resetValor()
            setTimeout(() => {
                cerrarM()
                
            }, 500);
            
        }
    }

    return (
        <View style={[styleM.container]}>

            <Text style={{color:colores.texto}}>A G R E G A  U N  R E C O R D A T O R I O</Text>
           <InputText {...{nombre:"nombre",etiqueta:"Nombre Actividad",ancho:250,color:colores.primario,setValor:setValor,valor:nombre}}/>
           <TextInput
           placeholder='R E C O R D A T O R I O'
           multiline
           numberOfLines={4}
           onChangeText={(valor)=>setValor(valor,"actividad")}
           value={actividad}
           style={{width:250,borderRadius:15,height:150}}
           />
           <View style={{alignSelf:"flex-start",flexDirection:"row",justifyContent:"space-around",paddingStart:15}}>
                        <Text style={{marginEnd:50}}>Fecha a recordar</Text>
             <ButIcon {...{icon:"calendar-outline",funcion:()=>setOpen({...open,open:true})}}/>
             <DatePicker
             minimumDate={fechaActual}
             mode="datetime"
              modal
              open={open.open}
              date={date}
              onConfirm={(date) => {
                 setOpen({...open,open:false})
                 setDate(date)
              }}
              onCancel={() => {
                 setOpen({...open,open:false})
               }}
               />
             </View>
             <View style={{flexDirection:"row",...styleM.center,width:250,justifyContent:"space-around"}}>
            <Button title='Cancelar' color={colores.secund} onPress={()=>cerrarM()}/>
            <Button title='OK'  color={colores.secund} onPress={agregar}/>
           </View>
           <Text style={{color:open.color}}>{open.nota}</Text>
        </View>
    );
}

export default Actividad;
 const styleM=StyleSheet.create({
    container:{
      backgroundColor:"white",
      height:600,
      width:300,
      borderRadius:50,
      padding:10,
      justifyContent:"space-around",
      alignItems:"center"
    },
    center:{
        justifyContent:"center",
        alignItems:"center",
    },
})

    
