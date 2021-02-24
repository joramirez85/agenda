import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

export default StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  blueSize: (height) => ({
    minWidth: '100%',
    height,
    backgroundColor: '#004F94',
    marginBottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  modalTitle: {
    // fontFamily: 'DINPro',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.BLUE_BKY,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  buttonContainer: {
    marginVertical: 32,
    marginHorizontal: 16,
  },
})
