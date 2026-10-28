import { db } from "../prisma/db.js";
import type { Repository } from "../domain/post/repository.js";

export function createPostRepository(): Repository {
  return {
    async getAll(category, take) {
      let query = db.orm.public.Post.orderBy((p) => p.id.asc());

      if (category) {
        query = query.where((p) => p.category.ilike(category));
      }

      if (take) {
        query = query.limit(take);
      }

      return query.all();
    },

    async getById(id) {
      return db.orm.public.Post.first({ id });
    },

    async create(data) {
      return db.orm.public.Post.create(data);
    },
  };
}
