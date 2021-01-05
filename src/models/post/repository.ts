import { BaseRepository } from '../BaseRepotitory'
import type { FromFirestore } from '../firestoreTypeUtil'

export class PostRepository extends BaseRepository<Post> {
  get collectionName() {
    return 'posts'
  }

  convertFromFirestore(data: FromFirestore<Post>): Post {
    return {
      ...data,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt.toDate(),
    }
  }

  create(data: Omit<Post, 'createdAt' | 'updatedAt'>) {
    return super.create({ ...data, createdAt: new Date(), updatedAt: new Date() })
  }
}
