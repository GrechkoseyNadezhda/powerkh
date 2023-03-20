const BASEURL = 'https://poverkh-default-rtdb.firebaseio.com/';
export async function fetchDatabaseFAQ(endpoint) {
  const response = await fetch(BASEURL + endpoint);
  const answer = await response.json();
  console.log(answer);
  let answerArr = [];
  for (let key in answer) {
    answerArr.push(answer[key]);
  }
  console.log(answerArr);
  return answerArr;
}
