import type { Repository } from "../domain/post/repository.js";
import type { PostService } from "./post.types.js";

export function createPostService(repository: Repository): PostService {
  return {
    getPosts(category, take) {
      return repository.getAll(category, take);
    },

    getPost(id) {
      return repository.getById(id);
    },

    createPost(data) {
      return repository.create(data);
    },
  };
}
