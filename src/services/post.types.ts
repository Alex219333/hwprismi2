import type { NewPost, Post } from "../domain/post/entity.js";

export interface PostService {
  getPosts(category?: string, take?: number): Promise<Post[]>;
  getPost(id: number): Promise<Post | null>;
  createPost(data: NewPost): Promise<Post>;
}
