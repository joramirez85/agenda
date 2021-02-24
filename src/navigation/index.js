import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login/Login'
import SignUp from '../screens/SignUp/SignUp'
import CreateUser from '../screens/User/CreateUser'

import DrawerNavigation from './DrawerNavigation'

import LinkingConfiguration from './LinkingConfiguration'

export default function Navigation () {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createStackNavigator()

function RootNavigator () {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen options={{headerShown: false, title: 'Inicio'}} name='Login' component={Login} />
      <Stack.Screen options={{title: 'Datos Personales'}} name='SignUp' component={SignUp} />
      <Stack.Screen options={{title: 'Crear Usuario'}} name='CreateUser' component={CreateUser} />
      

      <Stack.Screen name="Root" component={DrawerNavigation} />
    </Stack.Navigator>
  )
}
