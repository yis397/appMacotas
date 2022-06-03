import React, { useContext, useEffect, useState } from 'react'
import ButIcon from '../components/ButIcon';
import ModalH from '../components/homeSc/Modal';
import FondoHm from '../components/homeSc/FondoHm';
import {PetsContext} from '../context/PetsContext';
import { alerta } from '../components/alerta';



const HomeScreen = ({navigation}:any) => {

  const {petState,eliminarTodo,existPets,cambiPet} = useContext(PetsContext);
  const [varModal,setmodal]=useState({open:false,tipo:1,tipo2:1})
  const closeM=()=>setmodal({...varModal,open:false})
  const openAdd=()=>setmodal({...varModal,open:true,tipo:1})
  const openMedical=()=>{
    if (petState.pets.length!=0) {
      
      if (petState.seleccion.id!=null) {
        cambiPet(0);
        navigation.navigate('MedicalScreen')
      }
      return;
    }
    alerta({add:openAdd})
  }
  const openAc=()=>{
    if (petState.pets.length!=0) {
      if (!petState.seleccion.id!=null) {
        cambiPet(0);
        setmodal({...varModal,open:true,tipo:2})
      }
      return;
    }
    alerta({add:openAdd})
  }  
  const editPet=(id:number)=>{cambiPet(id) 
    setmodal({...varModal,open:true,tipo:1,tipo2:2})}
  useEffect(() => {
    existPets()
    cambiPet(0)
  }, []);
  const goDetails=()=>{
    navigation.navigate('DetalleScreen');
  }
  
  return (
         <FondoHm 
         goDetail={goDetails}
              editM={editPet}
             icons={[
               ButIcon({funcion:()=>eliminarTodo(),icon:'medkit-outline'}),
              ButIcon({funcion:()=>openMedical(),icon:'medkit-outline'}),
              ButIcon({funcion:()=>openAdd(),icon:'add-circle-outline'}),
              ButIcon({funcion:()=>openAc(),icon:'clipboard-outline'})]}
              modal={<ModalH  tipo2={varModal.tipo2}  openM={varModal.open} cerrarM={closeM} tipo={varModal.tipo}
              />}
              />       
)}

export default HomeScreen

