import React, { useState } from 'react'
import { PermissionsAndroid, PermissionStatus } from 'react-native';
import {ImagePickerResponse, launchCamera, launchImageLibrary} from 'react-native-image-picker';
export const permisoCamara=async ()=>{

    let permisso:boolean;


    try {
       const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Permiso para acceder a la camara",
          message:
            "Pets quiere acceder a su camara" ,
          buttonNeutral: "Preguntar mas tarde",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
   
        permisso=true;
      } else {
        console.log("Camera permission denied");
        permisso=false;
      }
      
    } catch (err) {
      console.warn(err);
      permisso=false;
    }
    return permisso
}


