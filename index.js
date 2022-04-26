import { registerRootComponent } from 'expo'

import './src/config/reactotron'
import Initial from './Initial'

// registerRootComponent calls InitialRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Initial)
 