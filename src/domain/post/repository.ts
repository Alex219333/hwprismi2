import type { NewPost, Post } from "./entity.js";

export interface Repository {
  getAll(category?: string, take?: number): Promise<Post[]>;
  getById(id: number): Promise<Post | null>;
  create(data: NewPost): Promise<Post>;
}
