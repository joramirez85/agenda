import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login/Login'
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

      <Stack.Screen name="Root" component={DrawerNavigation} />
    </Stack.Navigator>
  )
}
