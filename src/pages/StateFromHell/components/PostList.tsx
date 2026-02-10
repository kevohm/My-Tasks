import React, { useEffect, useState } from "react";
import { fetchUserPosts } from "../services/posts";
import type { Post } from "../../../types/StateFromHell/post";
import PostCard from "./PostCard";

const PostList = ({ userId }: { userId: number }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getUserPosts = async () => {
    const response = await fetchUserPosts(userId);
    if (response.ok) {
      const data = await response?.json();
      setPosts(data as Post[]);
    }
  };
  useEffect(() => {
    getUserPosts();
  }, [userId]);

  return (
    <div className="mt-6">
      <h1 className="text-lg font-semibold">Posts</h1>
      <div>
        {posts?.map((post) => {
          return <PostCard post={post} />;
        })}
      </div>
    </div>
  );
};

export default PostList;
