import React, { useEffect, useRef, useState } from "react";
import { fetchUser } from "./services/user";
import type { User } from "../../types/StateFromHell/user";
import UserCard from "./components/UserCard";

const StateFromHell = () => {
  const [users, setUsers] = useState<User[]>([]);
  const count = useRef(0);

  const getUsers = async () => {
    const response = await fetchUser();
    if (response.ok) {
      const data = await response?.json();
      setUsers(data as User[]);
    }
  };
  useEffect(() => {
    getUsers();
    count.current++;
  }, []);
  return (
    <div className=" px-8 py-12 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold leading-tight ">Users</h1>
        <button className="bg-slate-600 w-max rounded-lg px-4 py-2 text-white">
          Render: {count.current}
        </button>
      </div>
      {/* {JSON.stringify(users)} */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4">
        {users?.map((user) => {
          return <UserCard user={user} />;
        })}
      </div>
    </div>
  );
};

export default StateFromHell;
