import React from 'react'

import Route from './src/Routes/Route'
import PetsProvider from './src/context/PetsContext';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {

  return (

      <AppState>
      <Route/>
      </AppState>

  )
}

const AppState=({children}:any)=>{
  return(
     <PetsProvider>
       {children}
       </PetsProvider>
  )
}
export default App
