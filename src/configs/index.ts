import axios from 'axios'

export const firebaseConfig = {
  apiKey: 'AIzaSyDBsuNgQ4uvAfcos-mavY50ssZU3HBoQro',
  authDomain: 'todo-dd289.firebaseapp.com',
  databaseURL: 'https://todo-dd289-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'todo-dd289',
  storageBucket: 'todo-dd289.appspot.com',
  messagingSenderId: '973923311041',
  appId: '1:973923311041:web:919a7a8246334e6db02340',
  measurementId: 'G-LGCD7E9GZ8',
}

const baseURL = 'https://todo-dd289-default-rtdb.asia-southeast1.firebasedatabase.app'

export interface IAuth {
  email: string
  password: string
}

export const auth = (data: IAuth, isSignIn: boolean) => {
  return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${isSignIn ? 'signInWithPassword' : 'signUp'}?key=${firebaseConfig.apiKey}`, data)
}
export const axiosRequest = axios.create({
  baseURL,
})