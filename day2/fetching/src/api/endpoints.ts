import axios from "axios";
import { Post } from "../types/post";

export const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const ENDPOINTS = {
  posts: `${API_BASE_URL}/posts`,
  photos: `${API_BASE_URL}/photos`,
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getPosts = async () => {
  await sleep(1000);
  const res = await axios<Post[]>(ENDPOINTS.posts);
  return res.data;
};

export const getPhotos = async () => {
  await sleep(1000);
  const res = await axios(ENDPOINTS.photos);
  return res.data;
};
