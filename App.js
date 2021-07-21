import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer, DefaulttTheme } from '@react-navigation/native';

// Screens
import { PlantDetail } from './screens';

// Tabs
import Tabs from './navigation/tabs';
import Authentification from './screens/Authentification';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Authentification'}
      >
        {/* Tabs */}
        <Stack.Screen name='Home' component={Tabs}  />

        {/* Screens */}
        <Stack.Screen name='PlantDetail' component={PlantDetail} options={{ headerShown: false}}  />
        <Stack.Screen name='Authentification' component={Authentification} options={{ headerShown: false}}  />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App />;
}