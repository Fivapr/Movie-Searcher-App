import firebase from 'firebase'
import 'firebase/firestore'
import ReduxSagaFirebase from 'redux-saga-firebase'
import { firebaseConfig } from '../config'

firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore()
export const rsf = new ReduxSagaFirebase(firebase)

export default firebase
