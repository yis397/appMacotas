import React, { Children, FC, useReducer } from 'react';
import { Mascota, PetsState, Recordatorio ,Medicamento} from '../interface';
import petsReducer from './petsReduce';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PetStorage from '../helpers/helpSotorage';



const incialPets:PetsState={
    pets:[],
    recordatorio:[],
    seleccion:{nombre:"",apodo:"",nacimi:new Date(),img:"",id:"null",sexo:"1"},
    medicamento:[]
}
interface PetsContextProps{
    petState:PetsState,
    addPets:(mascot:Mascota)=>void,
    unpdateMascota:(mascot:Mascota)=>void,
    deletPet:(id:string)=>void,
    existPets:()=>void,
    addRecord:(record:Recordatorio)=>void,
    deletRecor:(ids:string,idP:string)=>void,
    selector:(id:string)=>void,
    eliminarTodo:()=>void,
    addMedica:(medica:Medicamento)=>void,
    deletMedica:(id:string)=>void,
    cambiPet:(id:number)=>void,
}
const storage =new Storage({
    size: 50,
    storageBackend:AsyncStorage,
    defaultExpires: null,
    enableCache: true,
    sync:{}
  })
export const PetsContext=React.createContext({}as PetsContextProps)

const PetsProvider=({children}:any)=> {
   const service=new PetStorage(storage)
   const [petState,dispatch]=useReducer(petsReducer,incialPets)

   const addPets=(mascot:Mascota)=>{
       service.inicialLoadPet(mascot.id)
       service.savePets(mascot)
       dispatch({type:"addPets",payload:mascot})
       dispatch({type:"cambioPet",payload:petState.pets.length})
       }
    const unpdateMascota=(mascota:Mascota)=>{
        service.savePets(mascota)
        const newArray=[...petState.pets.filter(e=>e.id!=mascota.id),mascota]
        dispatch({type:"[Pets]-update",payload:newArray})
        cambiPet(0);
    }


   const addRecord=(record:Recordatorio)=>{
       const recorda=petState.recordatorio.length==0?[record]:[...petState.recordatorio,record];
       dispatch({type:"[recorda]-add",payload:record})   
       service.saveRecord(recorda,petState.seleccion.id)
     
   }
   const deletRecor=(id:string,idP:string)=>{
       if (petState.recordatorio.length==1) {
        dispatch({type:"[recorda]-update",payload:[]})
        service.saveRecord([],idP)
        return
       }
    const newarray =petState.recordatorio.filter((item)=>item.id!=id)
    dispatch({type:"[recorda]-update",payload:newarray})
    service.saveRecord(newarray,idP)
   }
   const deletPet=(id:string)=>{service.deletPet(id)
    if (petState.pets.length==1) {
        dispatch({type:"cambioPet",payload:0})
        dispatch({type:"[recorda]-update",payload:[]})
    }else if(id==petState.seleccion.id){
        dispatch({type:"cambioPet",payload:0})
    }
    service.getListaPets().then((datos)=>{dispatch({type:"[Pets]-update",payload:datos})})}


   const existPets=()=>{
       if(petState.pets.length!=0)return;
       service.getListaPets().then((datos)=>{
           if (datos.length==0) {
            dispatch({type:"[Pets]-update",payload:[]})
            return;
           }
           dispatch({type:"[Pets]-update",payload:datos})
           selector(datos[0].id)})

   }
   const selector=(id:string)=>{
       if(petState.pets.length!=0){
           petState.pets.map((e)=>{
               if (e.id===id) {
                   service.getListaRecord(id).then((lista)=>{
                       service.getListaMedica(id).then((medi)=> {

                           dispatch({type:"[seleccion]-update",payload:[e,lista,medi]})
                       })

                })
            }});   
       }
   }

   const addMedica=(medica:Medicamento)=>{
       const meds=petState.medicamento.length==0?[medica]:[...petState.medicamento,medica]
       dispatch({type:"[medica]-add",payload:medica})
       service.saveMedica(meds,petState.seleccion.id);
   }
   const deletMedica=(id:string)=>{
       console.log("delet")
       const newMecs=petState.medicamento.filter(e=>e.id!=id);
       dispatch({type:"updateMedica",payload:newMecs});
       service.saveMedica(newMecs,petState.seleccion.id);
   }
   const eliminarTodo=()=>{
       service.deletPets();
       dispatch({type:"[Pets]-update",payload:[]})
       dispatch({type:"[recorda]-update",payload:[]})
    }
    const cambiPet=( id:number)=>{if(petState.pets.length!=0){dispatch({type:"cambioPet",payload:id})}}
    
    return (
        <PetsContext.Provider
        value={{
            petState,
            addPets,
            deletPet,
            existPets,
            deletRecor,
            addRecord,
            selector,eliminarTodo,deletMedica,addMedica,
            cambiPet,
            unpdateMascota
        }}>
           {children}
        </PetsContext.Provider>
    );
}

export default PetsProvider;