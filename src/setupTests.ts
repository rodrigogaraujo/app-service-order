import '@testing-library/jest-native/extend-expect'
import { cleanup } from '@testing-library/react-native'
import 'react-native-gesture-handler/jestSetup'
import { queryClient } from './App'


afterEach(() => {
  cleanup()
  queryClient.clear()
})

jest.mock('@react-native-community/async-storage', () =>
  require('@react-native-community/async-storage/jest/async-storage-mock')
)
jest.mock('react-native-onesignal', () => {
  return {
    setAppId: jest.fn(),
    setLogLevel: jest.fn(),
    setRequiresUserPrivacyConsent: jest.fn(),
    setNotificationWillShowInForegroundHandler: jest.fn(),
    getDeviceState: jest.fn()
  }
})


jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Reanimated = require('react-native-reanimated/mock')

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {
    // This is intentional
  }

  return Reanimated
})

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

