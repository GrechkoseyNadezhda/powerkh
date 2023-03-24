import { useTemplate } from '../common/use-template';

const BASEURL = 'https://poverkh-default-rtdb.firebaseio.com';

export async function fetchDatabaseAuthor(endpoint, refs, refsAuthorIfo, template, templateAuthorInfo) {
  const result = await fetch(BASEURL + endpoint).then(response =>
    response.json()
  );
  const data = Object.values(result)[0];
  console.log(data);
  useTemplate(refs, template, data);
  useTemplate(refsAuthorIfo, templateAuthorInfo, data);
}
