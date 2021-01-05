import { BaseRepository } from '../BaseRepotitory'

import type { FromFirestore } from '@/models/firestoreTypeUtil'

export class UserRepository extends BaseRepository<User> {
  get collectionName() {
    return 'users'
  }

  convertFromFirestore(data: FromFirestore<User>): User {
    return {
      ...data,
      birthday: data.birthday.toDate(),
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt.toDate(),
    }
  }
}
