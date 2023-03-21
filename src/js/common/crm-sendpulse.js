const CLIENT_ID = '6470a82847485b68ac08488d3fec73e5';

const CLIENT_SECRET = '0341379192191645a243aac4938e3c93';
const BASEURL_SENDPULSE = 'https://api.sendpulse.com';
const obj = new FormData();
obj.append('grant_type', 'client_credentials');
obj.append('client_id', '6470a82847485b68ac08488d3fec73e5');
obj.append('client_secret', '0341379192191645a243aac4938e3c93');
// {
//   grant_type: ,
//   client_id: CLIENT_ID,
//   client_secret: CLIENT_SECRET,
// }
console.log(JSON.stringify(obj));

async function getAuthTokenSendpulse() {
  let response = await fetch('https://api.sendpulse.com/oauth/access_token', {
    method: 'POST',
    body: obj,
  });
  const result = await response.json();

  console.log(result.access_token);
  return result.access_token;
}
getAuthTokenSendpulse();
