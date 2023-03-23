const CLIENT_ID = '6470a82847485b68ac08488d3fec73e5';

const CLIENT_SECRET = '0341379192191645a243aac4938e3c93';
const BASEURL_SENDPULSE = 'https://api.sendpulse.com';
const BASEURL_AUTO360 =
  'https://events.sendpulse.com/events/id/ecc62b30695e496ddd8b5bc361a4afc5/8268220';
const bodyAuthObj = {
  grant_type: 'client_credentials',
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
};
export async function getAuthTokenSendpulse(options) {
  options.body = JSON.stringify(bodyAuthObj);
  let response = await fetch(
    'https://api.sendpulse.com/oauth/access_token',
    options
  );
  const result = await response.json();

  return result.access_token;
}

export async function createNewDeal(optionobj) {
  let responseDeals = await fetch(
    BASEURL_SENDPULSE + '/crm/v1/deals',
    optionobj
  ).then(response => response.json());
  console.log(responseDeals.data.id);
}

export async function createComment(dealID) {
  let responseDeals = await fetch(
    BASEURL_SENDPULSE + '/crm/v1/deals/' + dealID + '/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer' +
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMwZjMzYTdmODcwZmI5OGEyZGJkZGQ4NTkwNGIzMThkNTI4OGY2ZDI3NDQzN2NlYjhjM2QxODkyMTYwZDBjNmRkOTBiODNjZjhhYzIxMmZkIn0.eyJhdWQiOiI2NDcwYTgyODQ3NDg1YjY4YWMwODQ4OGQzZmVjNzNlNSIsImp0aSI6ImMwZjMzYTdmODcwZmI5OGEyZGJkZGQ4NTkwNGIzMThkNTI4OGY2ZDI3NDQzN2NlYjhjM2QxODkyMTYwZDBjNmRkOTBiODNjZjhhYzIxMmZkIiwiaWF0IjoxNjc5NDEzNDU4LCJuYmYiOjE2Nzk0MTM0NTgsImV4cCI6MTY3OTQxNzA1OCwic3ViIjoiIiwic2NvcGVzIjpbXSwidXNlciI6eyJpZCI6ODI2ODIyMCwiZ3JvdXBfaWQiOm51bGwsInBhcmVudF9pZCI6bnVsbCwiY29udGV4dCI6eyJhY2NsaW0iOiIwIn0sImFyZWEiOiJyZXN0In19.sEvPPISPUUgqhB0UR8EQiUL2_fGqgdXpxlBp4v3bpFUgTHkfSlhana7UUqx5RbKdPSWkoXwKoyYwNSSWZRZETwMIPWZeOj-1roBeJSyTva2rJYFWg2rry6klloV_VE2CGC_2PiX2rQrlQPtdfyrBL1T6bCpOOmY0wwJnLlSkFW_aUs6Wk03kWO_xCaL93jTrwMtcLoFsyx7kx8lYZo_ONEWx_8IqEw9jT6VxLdAgAehXBW7boF5xKem7Or5Q7DT9ZmUVO26ANVRIve5afii7p0Fq6wIyyfnZdqQBlIE_PPjxG4aQt5idIhBrBJCBk8iZbVL6XbU9jCnHTF--qkFbuQ',
      },
      body: JSON.stringify({
        message: 'Get it',
      }),
    }
  ).then(response => response.json());
}

export async function createContact(firstNameForm, lastNameForm, emailForm) {
  let responseDeals = await fetch(BASEURL_SENDPULSE + '/crm/v1/contacts/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer' +
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMwZjMzYTdmODcwZmI5OGEyZGJkZGQ4NTkwNGIzMThkNTI4OGY2ZDI3NDQzN2NlYjhjM2QxODkyMTYwZDBjNmRkOTBiODNjZjhhYzIxMmZkIn0.eyJhdWQiOiI2NDcwYTgyODQ3NDg1YjY4YWMwODQ4OGQzZmVjNzNlNSIsImp0aSI6ImMwZjMzYTdmODcwZmI5OGEyZGJkZGQ4NTkwNGIzMThkNTI4OGY2ZDI3NDQzN2NlYjhjM2QxODkyMTYwZDBjNmRkOTBiODNjZjhhYzIxMmZkIiwiaWF0IjoxNjc5NDEzNDU4LCJuYmYiOjE2Nzk0MTM0NTgsImV4cCI6MTY3OTQxNzA1OCwic3ViIjoiIiwic2NvcGVzIjpbXSwidXNlciI6eyJpZCI6ODI2ODIyMCwiZ3JvdXBfaWQiOm51bGwsInBhcmVudF9pZCI6bnVsbCwiY29udGV4dCI6eyJhY2NsaW0iOiIwIn0sImFyZWEiOiJyZXN0In19.sEvPPISPUUgqhB0UR8EQiUL2_fGqgdXpxlBp4v3bpFUgTHkfSlhana7UUqx5RbKdPSWkoXwKoyYwNSSWZRZETwMIPWZeOj-1roBeJSyTva2rJYFWg2rry6klloV_VE2CGC_2PiX2rQrlQPtdfyrBL1T6bCpOOmY0wwJnLlSkFW_aUs6Wk03kWO_xCaL93jTrwMtcLoFsyx7kx8lYZo_ONEWx_8IqEw9jT6VxLdAgAehXBW7boF5xKem7Or5Q7DT9ZmUVO26ANVRIve5afii7p0Fq6wIyyfnZdqQBlIE_PPjxG4aQt5idIhBrBJCBk8iZbVL6XbU9jCnHTF--qkFbuQ',
    },
    body: JSON.stringify({
      responsibleId: 8268220,
      firstName: firstNameForm,
      lastName: lastNameForm,

      emails: [emailForm],
    }),
  }).then(response => response.json());
}
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
