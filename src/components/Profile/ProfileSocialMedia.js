import React from 'react'
import {
  View,
  Text
} from 'react-native'
// import { Icon } from 'react-native-elements'
import { SocialIcon } from 'react-native-elements'

import styles from './styles'

const ProfileSocialMedia = (props) => {
  const {
    link,
    onPressIcon,
    typeIcon
  } = props
  return (
    <View style={styles.socialRow}>
      <View style={styles.iconRow}>
        <SocialIcon
          iconSize={30}
          type={typeIcon}
          onPress={onPressIcon}
        />
      </View>
      <View style={styles.telRow}>
        <View style={styles.telNumberColumn}>
          <Text style={styles.telNumberText}>{link}</Text>
        </View>
      </View> 
    </View>
  )
}

export default ProfileSocialMedia
