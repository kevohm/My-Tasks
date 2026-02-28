import type { UpdatePostPayload } from "../types/post";
import { fetchWithCache } from "../utils/api";

export const fetchUserPosts = async (id: number) => {
  return await fetchWithCache(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`,
  );
};

export const updatePostById = async (
  id: number,
  payload: UpdatePostPayload,
) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "put",
      body: JSON.stringify(payload),
    },
  );
  return response;
};

export const fetchPostById = async (id: number) => {
  return await fetchWithCache(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
};
