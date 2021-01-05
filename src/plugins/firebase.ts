import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { firebaseConfig } from '@/env'

firebase.initializeApp(firebaseConfig)

export { firebase }
export const firestore = firebase.firestore()
