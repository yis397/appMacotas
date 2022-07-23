import React, { useContext, useState, useEffect } from 'react';
import {   View, Text,ScrollView, Image, Animated, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colores } from '../../theme/themeApp';
import { styleh } from './styleH';
import CardPets from './CardPets';
import { PetsContext } from '../../context/PetsContext';
import ButIcon from '../ButIcon';

interface Prop{
 icons:JSX.Element[],
 modal:JSX.Element,
 editM:(id:number)=>void,
 goDetail:()=>void
}

const FondoHm=({icons,modal,editM,goDetail}:Prop)=> {
    const  [index, setindex] = useState(0);
    const {petState} = useContext(PetsContext);
    const {seleccion,pets,recordatorio}=petState
    const cambiar=()=>{
        if (recordatorio.length>1) {
            if (index!=(recordatorio.length-1)) {
                
                setindex(index+1)
            }else{
                setindex(0)
            }
        }
    }

    

           return (         
    <View  
    style={{...styleh.container}}>
        <ScrollView>
            <View style={styleh.head}>
                 {pets.length!=0?
                 <TouchableOpacity style={{...styleh.perfil,...styleh.shadow}} onPress={()=>goDetail()}>
                   <Image
                    source={{uri:(seleccion.img!=""?seleccion.img:"http://via.placeholder.com/200x400")}}
                    style={{height:200,width:"100%",backgroundColor:"white"}}/>
                 </TouchableOpacity>:
                 <View style={styleh.perfil}>
                    <Image
                    source={{uri:"http://via.placeholder.com/200x400"}}
                    style={{height:200,width:"100%",backgroundColor:"white"}}/>
                 </View>
                 }
                {pets.length==0?<Text></Text>:<Text style={{...styleh.textSub,textTransform:"uppercase"}}>{seleccion.nombre}</Text>}
                 
                <View style={[styleh.notif,styleh.shadow]}>
                    <View style={styleh.notiSub}>
                    <Text style={[styleh.textSub,{flex:3}]}>R e c o r d a t o r i o:</Text>
                    <Text style={[styleh.textSub,{flex:1}]}>D i a:</Text>
                    <Text style={[styleh.textSub,{flex:1}]}>H r</Text>
                    </View>
                   
                    <View style={styleh.notiData}>
                        <Text style={{flex:3,color:colores.texto2}}>{recordatorio.length!=0?recordatorio[index].actividad:"no tiene actividades"}</Text>
                        <Text style={{flex:1,color:colores.texto2}}>{recordatorio.length!=0?recordatorio[index].fecha:""}</Text>
                        <Text style={{flex:1,color:colores.texto2}}>{recordatorio.length!=0?recordatorio[index].hora:""}</Text>

                    </View>
                    {(recordatorio.length>1?<View style={{position:"absolute",alignSelf:"flex-end",top:30,right:10}}><ButIcon funcion={()=>cambiar()} icon={"chevron-forward-outline"}/></View>:<></>)}
                </View>
            </View>
            <View style={[styleh.foot,styleh.shadow]}>
            <LinearGradient start={{x: .5, y: 1}} end={{x: 0, y: .2}} colors={[colores.secund2, colores.secund2]} style={styleh.foot}>
              <View style={styleh.iconos}>    
                 {icons.map((item,i)=><View key={i}>{item}</View>)}
              </View>
              <View style={styleh.lista}>
                  <Text style={{color:colores.texto2}}>Tus Mascotas:</Text>
                  <ScrollView >
                      {pets.length==0?<Text style={{textAlign:"center",marginTop:100}}>AQUI ESTARAN TUS MASCOTAS</Text>:pets.map((item,i)=><View key={i}><CardPets i={i} editM={editM} item={item}/></View>)}

                  </ScrollView>
              </View>
            </LinearGradient>

            </View>

         {modal}
        </ScrollView>
    </View>
    );
}

export default FondoHm;

