// /comments?postId=1

import type { UpdateCommentPayload } from "../types/comment";
import { fetchWithCache } from "../utils/api";

export const fetchPostComments = async (id: number) => {
  return await fetchWithCache(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );
};

export const updateCommentById = async (
  id: number,
  payload: UpdateCommentPayload,
) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`,
    {
      method: "put",
      body: JSON.stringify(payload),
    },
  );
  return response;
};
