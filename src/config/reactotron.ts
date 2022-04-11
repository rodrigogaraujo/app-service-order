import Reactotron from 'reactotron-react-native'

Reactotron.configure({
  host: '10.0.2.2'
}).useReactNative({
  storybook: true,
}).connect()

console.tron = Reactotron
export default Reactotron
 