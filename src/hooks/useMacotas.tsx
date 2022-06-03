import React, { useContext, useEffect, useState } from 'react';
import { Mascota,Recordatorio } from '../interface';
import { PetsContext } from '../context/PetsContext';
import PetStorage from '../helpers/helpSotorage';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';


function useMacotas() {
    //
    ///const service=new PetStorage(storage)
    const [mascotas,setMascotas]=useState<Mascota[]>([])
    const [recordat,setRecordat]=useState<Recordatorio[]>([])
    const [index, setindex] = useState({pet:"0"});
    
    const addRecord=(record:Recordatorio)=>{
        ///service.saveRecord([record],"a");
        setRecordat([...recordat,record])
       /// service.getListaRecord();
    }

    useEffect(() => {
        if (mascotas.length==0) {
           /// actualizar()
        }
    }, []);

    const addMas=(mascota:Mascota)=>{
        const mas:Mascota={...mascota,id:mascota.nombre.trim()}
        //service.savePets(mas)
        setMascotas([...mascotas,mascota])
    }



    return [{addMas,addRecord,recordat,mascotas}]
}

export default useMacotas;