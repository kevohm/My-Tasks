// /comments?postId=1

import type { Comment, UpdateCommentPayload } from "../../../types/StateFromHell/comment";

export const fetchPostComments = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );
  return response;
};


export const updateCommentById = async (
  id: number,
  payload: UpdateCommentPayload
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


