import type { User } from "../../../types/StateFromHell/user";

export const fetchUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response
};
