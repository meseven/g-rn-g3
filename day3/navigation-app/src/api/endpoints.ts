import axios from "axios";
import { User } from "../types/user";
import { Post } from "../types/post";
import { Comment } from "../types/comment";

export const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const GET_USERS = async () => {
  const response = await axios<User[]>(`${API_BASE_URL}/users`);
  return response.data;
};

export const GET_USER_BY_ID = async (id: number) => {
  await sleep(1000);
  const response = await axios<User>(`${API_BASE_URL}/users/${id}`);
  return response.data;
};

export const GET_POSTS_BY_USER_ID = async (userId: number) => {
  const response = await axios<Post[]>(
    `${API_BASE_URL}/posts?userId=${userId}`
  );
  return response.data;
};

export const GET_POST_BY_ID = async (id: number) => {
  const response = await axios<Post>(`${API_BASE_URL}/posts/${id}`);
  return response.data;
};

export const GET_COMMENTS_BY_POST_ID = async (postId: number) => {
  const response = await axios<Comment[]>(
    `${API_BASE_URL}/comments?postId=${postId}`
  );
  return response.data;
};
