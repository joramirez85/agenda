import * as React from 'react'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackHeaderLeftButtonProps } from '@react-navigation/stack'
import {
  Text,
  View
} from 'react-native'

import MenuIcon from '../../components/MenuIcon/MenuIcon'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfileSocialMedia from '../../components/Profile/ProfileSocialMedia'
import styles from './styles'

const Profile = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (<MenuIcon/>)
    });
  });

  return (
    <View >
      <ProfileHeader
        onPressPlace={() => console.log('testing')}
        city='Huetamo'
        country='Michoacán'
        name='Rogelio Portillo'
      />
      <View style={styles.containerSocialMedia}>
        <ProfileSocialMedia
          onPressIcon={() => console.log('social media')}
          link='http://facebook.com'
          typeIcon='facebook'
        />
        <ProfileSocialMedia
          onPressIcon={() => console.log('social media')}
          link='http://facebook.com'
          typeIcon='youtube'
        />
        <ProfileSocialMedia
          onPressIcon={() => console.log('social media')}
          link='http://facebook.com'
          typeIcon='instagram'
        />
      </View>
    </View>
  )
}

export default Profile
