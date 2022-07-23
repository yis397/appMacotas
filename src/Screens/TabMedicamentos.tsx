import React,{useContext} from 'react';
import { View,Text, Button, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import InputText from '../components/InputText';
import { colores } from '../theme/themeApp';
import useForm from '../hooks/useForm';
import { Medicamento } from '../interface/index';
import ButIcon from '../components/ButIcon';
import { PetsContext } from '../context/PetsContext';


export function TabMedicamentos({navigation}:any) {
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
                <View style={{position:'absolute',start:20,top:-10}}>
                <ButIcon icon={"arrow-back-outline"} funcion={()=>navigation.pop()} color={colores.secund}/>
                </View>
                <Text style={{color:colores.texto,}}>A G R E G A  U N  M E D I C A M E N T O</Text>
                <InputText nombre={'nombre'} valor={nombre} etiqueta={'nombre'} setValor={setValor} ancho={colores.width*.9} color={colores.secund} maxL={11}/>
                <InputText nombre={'desripcion'} valor={desripcion} etiqueta={'desripcion'} setValor={setValor} ancho={colores.width*.9} color={colores.secund} maxL={20}/>
                <Button title='Agrega' color={colores.secund} onPress={add}/>
            </View>
              <View style={{top:20}}>
            <FlatList data={petState.medicamento} renderItem={({item})=><View key={item.id} style={{width:"100%",padding:20,flexDirection:"row",backgroundColor:colores.secund, borderRadius:50, marginTop:20,}}>

                <View style={{flex:2}}>
                <Text style={{color:'#ffff',}}>Nombre:<Text style={{}}>__{item.nombre}</Text></Text><Text style={{color:'#ffff'}}>Descrip:<Text>
                __{item.descripcion}</Text></Text>
                </View>
                <View style={{flex:1,}}>

                <ButIcon {...{icon:"trash-outline",funcion:()=>deletMedica(item.id),color:colores.cuarto,name:"Borrar"}}/>
                </View>
            </View>}
                      />

              </View>
        </LinearGradient>
    );
}

