export const fetchUserPosts = async (id:number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
  return response;
};
