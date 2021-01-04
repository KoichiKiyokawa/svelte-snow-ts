import { firebase } from '@/plugins/firebase'

export class AuthService {
  static async login(email: string, password: string): Promise<void> {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    return
  }

  static async logout() {
    await firebase.auth().signOut()
    return
  }

  static async chechAuth(): Promise<boolean> {
    try {
      await new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) resolve(user)
          else reject()
        }, reject)
      })
      return true
    } catch {
      return false
    }
  }
}
