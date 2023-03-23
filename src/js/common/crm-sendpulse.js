const BASEURL_AUTO360 =
  'https://events.sendpulse.com/events/id/ecc62b30695e496ddd8b5bc361a4afc5/8268220';

export async function createDealAndContact(dataRequest) {
  const result = fetch(BASEURL_AUTO360, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataRequest),
  }).then(response => response.json());
  return result;
}
