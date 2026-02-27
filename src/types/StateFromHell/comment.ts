export type Comment = {
  body: string;
  email: string
  id: number;
  name: string;
  postId: number;
};

export type UpdateCommentPayload = Pick<Comment, "body" | "name" | "email">;