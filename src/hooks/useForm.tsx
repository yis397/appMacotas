import React, { useState } from 'react';
import { Mascota } from '../interface';

interface Prop{
    nom:Array<string>,
    valor:Array<string>
}
const useForm=(valorState:any)=> {
    const [values,setValues]=useState(valorState);

    const setValor=(valor:string,nombre:string)=>setValues({...values,[nombre]:valor});

   
    
    const resetValor=(nombre:string)=>{setValues({values:{}})}
    return [values,setValor,resetValor]
}

export default useForm;