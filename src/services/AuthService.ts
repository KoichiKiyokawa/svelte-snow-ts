import { firebase } from '@/plugins/firebase'

export class AuthService {
  static login() {}

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
