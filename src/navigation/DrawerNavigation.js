import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import Profile from '../screens/Profile/Profile'
import Agenda from '../screens/Agenda/Agenda'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Perfil de Rogelio'
        component={ProfileNavigator}/>
      <Drawer.Screen
        name='Agenda'
        component={AgendaNavigator}/>
    </Drawer.Navigator>
  );
}

const ProfileStack = createStackNavigator()

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
      />
    </ProfileStack.Navigator>
  )
}

const AgendaStack = createStackNavigator()

const AgendaNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Agenda"
        component={Agenda}
      />
    </ProfileStack.Navigator>
  )
}
