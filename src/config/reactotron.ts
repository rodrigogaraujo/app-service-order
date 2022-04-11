import { Platform } from 'react-native'
import Reactotron from 'reactotron-react-native'

Reactotron.configure({
  host: Platform.OS === 'android' ? '10.0.2.2' : 'localhost'
}).useReactNative({
  storybook: true,
}).connect()

console.tron = Reactotron
export default Reactotron
 