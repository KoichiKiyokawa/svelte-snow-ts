import type firebase from 'firebase/app'

import type { FromFirestore } from '@/models/firestoreTypeUtil'
import { firestore } from '@/plugins/firebase'

export abstract class BaseRepository<T extends Record<string, unknown>> {
  abstract get collectionName(): string
  get collectionReference() {
    return firestore.collection(this.collectionName).withConverter<T>({
      fromFirestore: (snap) => this.convertFromFirestore(snap.data() as FromFirestore<T>),
      toFirestore: (data: T) => data,
    })
  }

  abstract convertFromFirestore(data: FromFirestore<T>): T

  async find(id: string): Promise<RepositoryResult<T>> {
    const doc = await this.collectionReference.doc(id).get()
    const data = doc.data()
    if (data === undefined) throw Error('no data')

    return { data, id: doc.id }
  }

  async create(data: T): Promise<RepositoryResult<T>> {
    const doc = await this.collectionReference.add(data)
    return { id: doc.id, data }
  }

  async all(): Promise<RepositoryResult<T>[]> {
    const querySnapshot = await this.collectionReference.get()
    return querySnapshot.docs.flatMap((doc) => {
      const data = doc.data()
      return data === undefined ? [] : { id: doc.id, data }
    })
  }

  async update(id: ID, data: Partial<T>): Promise<ID> {
    await this.collectionReference.doc(id).update(data)
    return id
  }

  async delete(id: ID): Promise<void> {
    return this.collectionReference.doc(id).delete()
  }
}
