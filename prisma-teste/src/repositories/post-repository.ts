import { User } from "@prisma/client";
import prisma from "../database/database";

export type CreateUser = Omit<User, "id">

async function getPosts() {
  const posts = await prisma.user.findMany()

  return posts;
}

async function getPost(id: number) {
  const result = await prisma.user.findUnique({
    where: {id}
  })

  return result;
}

async function createPost(user: CreateUser) {
  const { email, name, admin } = user;
  const result = await prisma.user.create({
    data: user
  })

  return result;
}

async function deletePost(id: number) {
  const result = await prisma.user.delete({
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