import React,{useContext} from 'react';
import { View,Text, Button, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import InputText from '../components/InputText';
import { colores } from '../theme/themeApp';
import useForm from '../hooks/useForm';
import { Medicamento } from '../interface/index';
import ButIcon from '../components/ButIcon';
import { PetsContext } from '../context/PetsContext';

function TabMedicamentos() {
    const  {petState,addMedica,deletMedica}= useContext(PetsContext);
    const [values,setValor,resetValor,editarMas]=useForm({nombre:"",desripcion:""})
    const {nombre,desripcion}=values;
    const add=()=>{
        if (nombre==""||desripcion=="") {
 
            return;
        }
        const id=new Date().valueOf().toString();
        addMedica({nombre,descripcion:desripcion,id,idP:petState.seleccion.id})
        resetValor()
    }
    const list:Medicamento[]=[]
    return (
        <LinearGradient start={{x: .5, y: 1}} end={{x: 0, y: .2}} colors={[colores.cuarto, colores.primario]} style={{flex:1}}>
            <View style={{width:"100%",justifyContent:"space-around",alignItems:"center",top:30,height:colores.height*.3}}>
                <Text style={{color:"#4A350C"}}>A G R E G A  U N  M E D I C A M E N T O</Text>
                <InputText nombre={'nombre'} valor={nombre} etiqueta={'nombre'} setValor={setValor} ancho={colores.width*.9} color={colores.secund} maxL={11}/>
                <InputText nombre={'desripcion'} valor={desripcion} etiqueta={'desripcion'} setValor={setValor} ancho={colores.width*.9} color={colores.secund} maxL={20}/>
                <Button title='Agrega' color={colores.secund} onPress={add}/>
            </View>
              <View style={{top:20}}>

            <FlatList data={petState.medicamento} renderItem={({item})=><View key={item.id} style={{width:"100%",padding:20,flexDirection:"row"}}>
                <Text style={{flex:1}}>{item.nombre}</Text><Text style={{flex:2}}>descripcion</Text>
                <View style={{flex:1,}}>

                <ButIcon {...{icon:"trash-outline",funcion:()=>deletMedica(item.id),color:colores.cuarto,name:"Borrar"}}/>
                </View>
            </View>}
                      />

              </View>
        </LinearGradient>
    );
}

export default TabMedicamentos;