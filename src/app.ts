import express from "express";
import { createPostRepository } from "./repositories/post.js";
import { createPostService } from "./services/post.js";
import { createPostHandlers } from "./transport/handlers/post.js";
import { createPostRouter } from "./routers/post.js";

const postRepository = createPostRepository();
const postService = createPostService(postRepository);
const postHandlers = createPostHandlers(postService);
const postRouter = createPostRouter(postHandlers);

const app = express();

app.use(express.json());
app.use("/posts", postRouter);

export default app;
