import { posts } from "./posts.js";

const filtered_posts = posts.filter((post) => {
  return post.userId === 1;
});

filtered_posts.forEach((post) => {
  console.log(post);
});

const mappedPosts = filteredPosts.map((post) => {
  return post.id * 10;
});
console.log(mappedPosts);

const reducedPosts = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedPosts);