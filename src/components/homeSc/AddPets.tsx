import React, { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import RadioForm from 'react-native-simple-radio-button';
import useForm from '../../hooks/useForm';
import { Mascota } from '../../interface';
import { colores } from '../../theme/themeApp';
import ButIcon from '../ButIcon';
import InputText from '../InputText';
import { launchCamera } from 'react-native-image-picker';
import { permisoCamara } from '../../helpers';
import { PetsContext } from '../../context/PetsContext';
interface Prop{
    cerrarM:()=>void,
    tipo:number,
}
var radio_props = [
    {label: 'M', value: 0 },
    {label: 'H', value: 1 }
  ];

function AddPets({cerrarM,tipo}:Prop) {
    
    const {addPets,petState,unpdateMascota} = useContext(PetsContext);
    const fechaActual=new Date()
    const [open, setOpen] = useState({open:false,valid:false,nota:"",color:"red"})
    const [date, setDate] = useState(fechaActual)
    const [values,setValor,resetValor]=useForm({nombre:"",apodo:"",sexo:"",img:""})
    const {nombre,apodo,sexo,img}=values;
    const agregar=()=>{
        
        if (nombre==undefined||nombre==""||apodo==undefined||apodo==""||date==undefined||sexo=="") {
            setOpen({...open,nota:"Llene todos los campos",color:"red"})
            return
        }else{
            setOpen({...open,valid:true});
            if (tipo==2) {
            const mascota:Mascota={nombre,apodo,sexo,nacimi:date,img:(petState.seleccion.img==""?img:petState.seleccion.img),id:petState.seleccion.id} 
            unpdateMascota(mascota)
            setTimeout(() => {
                resetValor()
                cerrarM() 
            }, 500)
            return;
            }
            setOpen({...open,nota:"Agregado correctamente",color:colores.secund,valid:true})
            const id:string=date.valueOf().toString()
            const mascota:Mascota={nombre,apodo,sexo,nacimi:date,img:(img===undefined?"":img),id}
            addPets(mascota)
            setTimeout(() => {
                resetValor()
                cerrarM() 
            }, 500)
        }
    }
    const fCamara=async()=>{
        const permiso:Promise<boolean>=permisoCamara()
        if (await permiso) {
             launchCamera({
                  saveToPhotos:true,
                  mediaType:"photo",
                  quality:0.5
              },(resp)=>{
                  if (resp.didCancel)return; 
                  setValor(resp.assets![0].uri,"img")
                }) }}

    useEffect(() => {
        setOpen({...open,nota:""})
    }, [cerrarM]);
   
    return (

               <View style={[styleM.body,styleM.center]}>
                   {
                       (tipo!=1?<Text>E D I T A  A  {petState.seleccion.nombre}</Text>:<Text>A G R E G A  A  U N  A M I G O</Text>)
                   }
                   <View style={{...styleM.form,flex:3}}>
                        <InputText {...{nombre:"nombre",etiqueta:"Nombre",ancho:250,color:colores.primario,setValor:setValor,valor:nombre}}/>
                        <InputText {...{nombre:"apodo",etiqueta:"Apodo",ancho:250,color:colores.primario,setValor:setValor,valor:apodo}}/>
                        <View style={{alignSelf:"flex-start",flexDirection:"row",justifyContent:"space-around"}}>
                        <Text style={{marginEnd:50}}>Fecha de nacimiento</Text>
                        <ButIcon {...{icon:"calendar-outline",funcion:()=>setOpen({...open,open:true})}}/>
                        <DatePicker
                        maximumDate={fechaActual}
                        mode="date"
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
                        <View>
                        <Text>sexo</Text>
                        <RadioForm
                         radio_props={radio_props}
                         initial={0}
                         buttonColor={colores.secund}
                         labelColor={colores.secund}
                         formHorizontal={true}
                          onPress={(value) =>setValor(value,"sexo")}
                           />
                        </View>
                        <View style={{alignSelf:"flex-start",flexDirection:"row",justifyContent:"space-around"}}>
                        <Text style={{marginEnd:75}}>Dale una imagen</Text>
                        <ButIcon icon={"camera-outline"} funcion={fCamara}/>
                        </View>
                   </View>
                   <View style={{flex:1,flexDirection:"row",...styleM.center,width:250,justifyContent:"space-around"}}>
                   <Button title='Cancelar' color={colores.secund} onPress={()=>cerrarM()}/>
                   <Button title='OK'  color={colores.secund} onPress={agregar} disabled={open.valid}/>
                     </View>
                     <Text style={{color:open.color}}>{open.nota}</Text>
               </View>
               
    )
}

export default AddPets;

export const styleM=StyleSheet.create({
    container:{
        
        flex:1,
        backgroundColor:"rgba(156,212,202,.6)",
       
    },
    body:{
      backgroundColor:"white",
      height:600,
      width:300,
      borderRadius:50,
      padding:10
    },
    form:{
       flex:1,
       justifyContent:"space-around"
    },
    center:{
        justifyContent:"center",
        alignItems:"center",
    },
})