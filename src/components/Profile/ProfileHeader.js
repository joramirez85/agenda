import React from 'react'
import { Icon } from 'react-native-elements'
import {
  FlatList,
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import styles from './styles'

const ProfileHeader = (props) => {
  const {
    onPressPlace,
    city,
    country,
    name
  } = props

  return (
    <View style={styles.headerContainer}>
      <ImageBackground
        style={styles.headerBackgroundImage}
        blurRadius={10}
        source={{uri: 'https://i.imgur.com/rXVcgTZ.jpg'}}
      >
        <View style={styles.headerColumn}>
          <Image
            style={styles.userImage}
            source={require('../../../assets/img/profile.png')}
          />
          <Text style={styles.userNameText}>{name}</Text>
          <View style={styles.userAddressRow}>
            <View>
              <Icon
                name="place"
                underlayColor="transparent"
                iconStyle={styles.placeIcon}
                onPress={onPressPlace}
              />
            </View>
            <View style={styles.userCityRow}>
              <Text style={styles.userCityText}>
                {city}, {country}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default ProfileHeader
