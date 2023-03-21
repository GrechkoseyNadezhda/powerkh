import {
  createComment,
  createContact,
  createNewDeal,
  getAuthTokenSendpulse,
} from '../../common/crm-sendpulse';
const { customAlphabet } = require('nanoid');
const alphabet = '0123456789';
const nanoid = customAlphabet(alphabet, 4);

const optionsForPOSTSendPulse = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: '',
};

const bodyRequest = {
  pipelineId: 58734,
  stepId: 196605,
  responsibleId: 8268220,
  name: 'Зверненя на сайті',
  sourceId: +nanoid(),
  attributes: [
    {
      attributeId: 297646,
      value: 'fgvb',
      //    з форми
    },
    {
      attributeId: 297658,
      value: 'dfgb',
      //   з форми
    },
    {
      attributeId: 297657,
      value: 'dfgbh',
      //   з форми
    },
  ],
};

const modalBtn = document.querySelector('.hero__btn');
modalBtn.addEventListener('click', sendPostAllSendPulse);

async function sendPostAllSendPulse() {
  const authToken = await getAuthTokenSendpulse(optionsForPOSTSendPulse);

  optionsForPOSTSendPulse.headers.Authorization = 'Bearer' + authToken;
  optionsForPOSTSendPulse.body = JSON.stringify(bodyRequest);
  createNewDeal(optionsForPOSTSendPulse);
  console.log(optionsForPOSTSendPulse);
  console.log(bodyRequest);
}
