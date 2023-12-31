import prisma from "../database/database";
import { Post } from "../protocols/post-protocol";

const TABLE_NAME = "posts";

export type CreatePost = Omit<Post, "id">

async function getPosts() {
  const posts = await prisma.posts.findMany();

  return posts;
}

async function getPost(idPost: number) {
  const post = await prisma.posts.findUnique({
    where: {id: idPost}
  });

  return post;
}

async function createPost(post: CreatePost) {
  const { username, title, content } = post;
  const result = await prisma.posts.create({data: {
    title,
    username,
    content
  }});

  return result;
}

async function deletePost(id: number) {
  const result = await prisma.posts.delete({
    where: {id}
  })

  return result;
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost
}

export default postRepository;