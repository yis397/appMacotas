import React, { useContext } from 'react';
import {PetsContext} from '../context/PetsContext';
import FondoD from '../components/detalSc/FondoD';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStParams } from '../Routes/Route';

interface Prop extends NativeStackScreenProps<RootStParams,'DetalleScreen'>{};
export const DetalleScreen=({route,navigation}:Prop)=> {
    
    const {petState,deletRecor} = useContext(PetsContext);
    const popNavgacion=()=>navigation.pop()
    return (
        <>
        <FondoD recordatorio={petState.recordatorio} funcion={deletRecor} mascota={petState.seleccion} navigation={popNavgacion}/> 
        </>
    );
}

