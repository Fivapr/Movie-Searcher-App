import firebase from 'firebase'
import 'firebase/firestore'
import { firebaseConfig } from '../config'

firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore()

export default firestore
