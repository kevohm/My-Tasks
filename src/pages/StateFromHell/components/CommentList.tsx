import  { useEffect, useState } from "react";
import { fetchPostComments } from "../services/comments";
import { CommentCard } from "./CommentCard";
import type { Comment } from "../../../types/StateFromHell/comment";
import useRenderCount from "../hooks/useRenderCount";

const CommentList = ({ postId }: { postId: number }) => {
  const [comments, setcomments] = useState<Comment[]>([]);
  const {CountComponent} = useRenderCount()

  const getPostComments = async () => {
    const response = await fetchPostComments(postId);
    if (response.ok) {
      const data = await response?.json();
      console.log(data)
      setcomments(data as Comment[]);
    }
  };
  useEffect(() => {
    getPostComments();
  }, [postId]);

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
      <h1 className="text-lg font-semibold">Comments</h1>
      
        {CountComponent}
      </div>
      <div className="flex flex-col gap-2.5">
        {comments?.map((comment) => {
          return <CommentCard comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default CommentList;
