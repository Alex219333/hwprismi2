import { db } from "./db.js";

const posts = [
  { title: "Intro to Node.js", content: "Node is a JS runtime", author: "alex", category: "programming" },
  { title: "Express basics", content: "Routers and handlers", author: "maria", category: "programming" },
  { title: "Best movies 2025", content: "My top list", author: "ivan", category: "movies" },
  { title: "Football results", content: "Weekend recap", author: "olga", category: "sport" },
];

async function main() {
  for (const post of posts) {
    await db.orm.public.Post.create(post);
  }
  console.log("Seeded", posts.length, "posts");
  await db.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
