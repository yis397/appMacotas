export interface Mascota{
    id:string
    nombre:string,
    apodo:string,
    nacimi:Date,
    sexo:string,
    img:string
  }
  export interface Recordatorio{
    id:string
    nombre:string,
    actividad:string,
    fecha:string,
    hora:string,
    idP:string
  }
  export interface Medicamento{
    id:string
    nombre:string,
    descripcion:string,
    idP:string
  }
 
 
  export interface PetsState{
    pets:Mascota[],
    recordatorio:Recordatorio[],
    seleccion:Mascota,
    medicamento:Medicamento[]
}