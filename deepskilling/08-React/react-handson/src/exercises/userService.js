// A tiny service module, used to demonstrate mocking in Ex19
export async function fetchUserName(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return data.name;
}
