import React from 'react'
import type { Post } from '../../../types/StateFromHell/post';

const PostCard = ({post}:{post:Post}) => {
  return (
    <div key={post.id}>
      <h1 className="text-sm font-semibold text-slate-600">{post.title}</h1>
      <p className="text-sm text-slate-500">{post.title}</p>
    </div>
  );
}

export default PostCard