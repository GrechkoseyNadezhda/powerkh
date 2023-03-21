const BASEURL = 'https://poverkh-default-rtdb.firebaseio.com';
export async function fetchDatabaseAuthor(endpoint) {
  const response = await fetch(BASEURL + endpoint);
  const result = await response.json();

  console.log(result);
  return result;
}
