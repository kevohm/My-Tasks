import { fetchWithCache } from "../utils/api";

export const fetchUser = async () => {
  return await fetchWithCache("https://jsonplaceholder.typicode.com/users");
};
