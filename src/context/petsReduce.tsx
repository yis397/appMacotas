import React, { Reducer } from 'react';
import { PetsState } from '../interface';
import { Mascota, Recordatorio, Medicamento } from '../interface/index';

type PetsAction=
    |{type:"addPets",payload:Mascota}
    |{type:"[recorda]-add",payload:Recordatorio}
    |{type:"[recorda]-update",payload:Recordatorio[]}
    |{type:"[seleccion]-update",payload:[Mascota,Recordatorio[],Medicamento[]],}
    |{type:"[Pets]-update",payload:Mascota[]}
    |{type:"cambioPet",payload:number}
    |{type:"[medica]-add",payload:Medicamento}
    |{type:"updateMedica",payload:Medicamento[]}

const petsReducer=(state:PetsState,action:PetsAction):PetsState=> {
   switch (action.type) {
        case "addPets":
            return{
                ...state,
                 pets:[...state.pets,action.payload]
            }
        case "[Pets]-update":
               return{...state,pets:action.payload}
        case "[recorda]-add":
    
            return{...state,recordatorio:[...state.recordatorio,action.payload,]}
        case "[recorda]-update":
            return{...state,recordatorio:action.payload}
        case "[seleccion]-update":
            return{...state,seleccion:action.payload[0],medicamento:action.payload[2],recordatorio:action.payload[1]}
        case "cambioPet":
            return{...state,seleccion:state.pets[action.payload]}  
        case "[medica]-add":
            return{...state,medicamento:[...state.medicamento,action.payload]}
        case "updateMedica":
            return{...state,medicamento:action.payload}     
        
       default:
        return{...state}
   }
}

export default petsReducer;