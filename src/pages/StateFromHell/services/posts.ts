import type {  UpdatePostPayload } from "../../../types/StateFromHell/post";

export const fetchUserPosts = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`,
  );
  return response;
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


export const fetchPostById = async (
  id: number
) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return response;
};
