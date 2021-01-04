import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from '@/env'

firebase.initializeApp(firebaseConfig)

export { firebase }
