import { Alert } from "react-native";
interface Prop{
  add:()=>void
}
export const alerta = ({add}:Prop) =>
    Alert.alert(
      "Alert",
      "Agrege una mascota para poder agregar un recordatorio",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Agregar", onPress: () =>  add()}
      ]
    );