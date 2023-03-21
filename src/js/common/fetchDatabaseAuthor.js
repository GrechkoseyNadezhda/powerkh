const BASEURL = 'https://storage.googleapis.com/poverkh';
export async function fetchDatabaseFAQ(endpoint) {
  const response = await fetch(BASEURL + endpoint);
  const result = await response.json();

  console.log(result);
  return result;
}
