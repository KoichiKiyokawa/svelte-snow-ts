import type firebase from 'firebase/app'

/**
 * Date型をタイムスタンプ型に再帰的に変換する
 */
export type FromFirestore<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends Date
    ? firebase.firestore.Timestamp
    : T[K] extends Record<string, unknown>
    ? FromFirestore<T[K]>
    : T[K]
}
