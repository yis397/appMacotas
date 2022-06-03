
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioScreen from '../Screens/InicioScreen';
import HomeScreen from '../Screens/HomeScreen';
import DetalleScreen from '../Screens/DetalleScreen';
import { Mascota,Recordatorio } from '../interface';
import TabsRoute from './TabsRoute';

export type RootStParams={
  HomeScreen:undefined,
  MedicalScreen:undefined,
  DetalleScreen:{mascota:Mascota,record:Recordatorio[]},
}

const Stack = createNativeStackNavigator<RootStParams>();
const Route = () => {
  
  return (
    <NavigationContainer >
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetalleScreen" component={DetalleScreen} />
        <Stack.Screen  name="MedicalScreen" component={TabsRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route