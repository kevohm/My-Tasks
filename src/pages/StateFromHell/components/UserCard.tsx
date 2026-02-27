import React, { useEffect, useRef, useState } from "react";
import type { User } from "../../../types/StateFromHell/user";
import { fetchUserPosts } from "../services/posts";
import type { Post } from "../../../types/StateFromHell/post";
import PostCard from "./PostCard";
import PostList from "./PostList";
import useRenderCount from "../hooks/useRenderCount";

const UserCard = ({ user }: { user: User }) => {
  const { CountComponent } = useRenderCount();
  return (
    <div className="w-full border border-gray-200 p-6 rounded-xl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{user.name}</h1>
        {CountComponent}
      </div>
      <div className="flex text-gray-600 flex-wrap gap-2.5">
        <p>{user.phone}</p>
        <p>{user.email}</p>
        <p>{user.company.name}</p>
      </div>
      <p className="text-gray-400">
        {user.address.city}, {user.address.street} {user.address.suite}
      </p>
      <PostList userId={user.id} />
    </div>
  );
};

export default UserCard;
