import React from 'react';
import { Text, TextInput, View } from 'react-native';
interface Prop{
    nombre:string,
    valor:string,
    etiqueta:string,
    setValor:(valor:string,nombre:string)=>void,
    ancho:number,
    color:string,
    maxL?:number

}
function InputText({nombre,valor,etiqueta,setValor,ancho,color,maxL=10}:Prop) {
    return (
        <View>

            <TextInput 
             maxLength={maxL}
             placeholder={etiqueta}
             style={{width:ancho,
                     borderBottomWidth:2,
                     borderBottomColor:color}}
             value={valor}
             onChangeText={(valor)=>setValor(valor,nombre)}           
            />
        </View>
        
    );
}

export default InputText;