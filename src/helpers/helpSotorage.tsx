import React from 'react';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Mascota, Recordatorio, Medicamento } from '../interface/index';


class PetStorage{

  constructor(public storage:Storage){
    }
    
  savePets(mascota:Mascota){
     
     this.storage.save({
         key:"pets",
         id:mascota.id,
         data:mascota,
         expires:null
     })
  }
  saveRecord(record:Recordatorio[],id:string){
    console.log(record)
    this.storage.save({
        key:'record',
        id,
        data:record,
        expires:null
    })
 }
  
  getListaPets(){
    return new Promise<Mascota[] >((resolve,reject)=>{this.storage.getAllDataForKey('pets').then(users => {
        resolve(users),
        reject([])
      });
    })
  }
  getListaRecord(id:string){
    return new Promise<Recordatorio[]>((resolve,reject)=>{
      this.storage.load({
        key:"record",
        id
      }).then(ret => {
        resolve(ret)
        
      });
    })
  }
  deletPets(){
    this.storage.clearMapForKey("pets");
    this.storage.clearMapForKey("record");
    this.storage.clearMapForKey("medica");
    console.log("ekiminado")
  }
  deletPet(id:string){
    this.storage.remove({
        key: 'pets',
        id: id
      });
      this.storage.remove({
        key: 'record',
        id: id
      });
      this.storage.remove({
        key: 'medica',
        id: id
      });

  }
 
  inicialLoadPet(id:string){
    this.storage.save({
      key:"medica",
      id,
      data:[],
      expires:null
      })
      this.storage.save({
        key:"record",
        id,
        data:[],
        expires:null
    })
   }
   saveMedica(record:Medicamento[],id:string){
    this.storage.save({
        key:'medica',
        id,
        data:record,
        expires:null
    })
 }

 getListaMedica(id:string){
  return new Promise<Medicamento[] >((resolve,reject)=>{
    this.storage.load({
      key:"medica",
      id
    }).then(ret => {
      resolve(ret)
      reject([])
      
    });
  })
}



}

export default PetStorage;
