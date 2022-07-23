import React from 'react'

import Route from './src/Routes/Route'
import PetsProvider from './src/context/PetsContext';
import SplashScreen from 'react-native-splash-screen';


const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
}, []);
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
