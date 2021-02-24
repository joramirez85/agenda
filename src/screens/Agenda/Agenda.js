import * as React from 'react'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackHeaderLeftButtonProps } from '@react-navigation/stack'
import {
  Text,
  View,
  Dimensions
} from 'react-native'
import EventCalendar from 'react-native-events-calendar'
import { Entypo } from '@expo/vector-icons'

let { width } = Dimensions.get('window')

import MenuIcon from '../../components/MenuIcon/MenuIcon'
import { CustomModal } from '../../components/molecules/'
import { CircularButton } from '../../components/atoms'
import { InfoImg } from '../../components/atoms'
import { viewPort } from '../../utils/utils'
import styles from './styles'

const events = [
  { start: '2017-09-07 00:30:00', end: '2017-09-07 01:30:00', title: 'Dr. Omar Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-07 01:30:00', end: '2017-09-07 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-07 04:10:00', end: '2017-09-07 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-07 01:05:00', end: '2017-09-07 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-07 14:30:00', end: '2017-09-07 16:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-08 01:20:00', end: '2017-09-08 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-08 04:10:00', end: '2017-09-08 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-08 00:45:00', end: '2017-09-08 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-08 11:30:00', end: '2017-09-08 12:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-09 01:30:00', end: '2017-09-09 02:00:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-09 03:10:00', end: '2017-09-09 03:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
  { start: '2017-09-09 00:10:00', end: '2017-09-09 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' }
]

const Agenda = (props) => {
  const [openInfoModal, setOpenInfoModal] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (<MenuIcon/>)
    });
  });

  const addEvent = () => {
    console.log('Display modal to add event')
  }

  const eventHandle = (event) => {
    console.log('=== event: ', event)
    const {
      start,
      end,
      title,
      summary
    } = event
    setStartDate(start)
    setEndDate(end)
    setTitle(title)
    setSummary(summary)
    setOpenInfoModal(true)
  }

  const propsInfoModal = {
    IconHeader: InfoImg,
    title,
    message: summary,
    openModal: openInfoModal,
    setOpenModal: setOpenInfoModal,
    styles,
    btnsOpts: [
      {
        title: 'Aceptar',
        onHandle: () => {
          console.log('... handling Accept')
          setOpenInfoModal(false)
          // backMethod()
        }
      }
    ]
  }

  return (
    <View style={styles.centered}>
      <EventCalendar
        eventTapped={eventHandle}
        events={events}
        width={width}
        initDate={'2017-09-08'}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginBottom: 14,
          justifyContent: 'center',
          alignSelf: 'center',
          
        }}>
        <CircularButton
          onPress={() => addEvent()}
          title="Agregar Evento"
          icon={<Entypo name="add-to-list" size={24} color="black" />}
          size={viewPort(60).width}
          lg
        />
      </View>
      <CustomModal {...propsInfoModal} />
    </View>
  )
}

export default Agenda
