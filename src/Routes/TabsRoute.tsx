import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabCartilla from '../Screens/TabCartilla';
import TabMedicamentos from '../Screens/TabMedicamentos';
function TabsRoute() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator >
        <Tab.Screen options={{headerShown: false,}}name="Cartilla" component={TabCartilla} />
        <Tab.Screen options={{headerShown: false,}}name="Medicamento" component={TabMedicamentos} />
      </Tab.Navigator>
    );
}

export default TabsRoute;