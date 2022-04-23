import * as ReactNative from 'react-native'

const DevSettings = {
  ...ReactNative.DevSettings,
  addMenuItem: jest.fn(),
}

export default Object.setPrototypeOf(
  {
    DevSettings,
  },
  ReactNative
)

export * from 'react-native'
export { DevSettings }
