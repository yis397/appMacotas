import React from 'react'
import { View, Text, Button } from 'react-native';
import { styleI } from './style';


interface Props{
  children:JSX.Element|JSX.Element[]
}

const FondoInicio = ({children}:Props) => {
  return (
    <View style={styleI.container}>

      
      <View style={[styleI.circulo,styleI.circ2]}>
        <View style={styleI.icono}></View>
      </View>
      <View style={[styleI.circulo,styleI.circ1,styleI.shadow]}>
        <Text style={styleI.tit1}>B I E N V E N I D O</Text>
        <Text style={styleI.tit1}>   A  C A T - A L A N D</Text>
      </View>
      <View style={[styleI.cuadro,styleI.shadow]}>
        <View style={styleI.descr}>
          <Text>hola mundo Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sit numquam iusto nam accusantium molestias error hic aut quae! Itaque culpa ea omnis esse quia ratione asperiores voluptate illo sequi!</Text>
          <Button title='hola'/>
        </View>
      </View>
    

    </View>
  )
}

export default FondoInicio

