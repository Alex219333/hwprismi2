export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
}

export type NewPost = Omit<Post, "id">;
