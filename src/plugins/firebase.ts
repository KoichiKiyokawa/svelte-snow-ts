import firebase from 'firebase/app'
import { firebaseConfig } from '@/env'

firebase.initializeApp(firebaseConfig)

export { firebase }
