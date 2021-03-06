import { Reactotron } from 'reactotron-core-client';
import { ReactotronReactNative } from 'reactotron-react-native';
import { RootStackParamList } from '~/routes';

declare global {
  interface Console {
    tron: Reactotron<ReactotronReactNative> & ReactotronReactNative;
  }
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export interface IUser {
  name: string,
  email: string,
  type: number,
  phone: string,
  active: number,
  password: string,
  id?: number,
  _id?: string
}

export interface ICustomer {
  name: string,
  birth?: string,
  email?: string,
  phone_number: string,
  document: string,
  active: number,
  password: string,
  id?: number,
  _id?: string,
  address?: {
    city?: string,
    complement?: string,
    neighborhood?: string,
    number?: string,
    state?: string,
    street?: string,
    zipcode?: string
  }
}

export interface IServiceOrder {
  customer_id?: string,
  description: string,
  customer?: ICustomer,
  user?: IUser,
  user_id?: string,
  id?: number,
  _id?: string,
  priority: number,
  status: number
}
