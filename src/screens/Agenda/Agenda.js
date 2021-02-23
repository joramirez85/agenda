import * as React from 'react'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackHeaderLeftButtonProps } from '@react-navigation/stack'
import {
  Text,
  View
} from 'react-native'

import MenuIcon from '../../components/MenuIcon/MenuIcon'
import styles from './styles'

const Profile = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (<MenuIcon/>)
    });
  });

  return (
    <View style={styles.centered}>
      <Text
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        This is Agenda Screen
      </Text>
    </View>
  )
}

export default Profile
