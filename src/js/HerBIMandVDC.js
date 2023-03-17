import BIMlist from '../templates/HerBIMAndVDCServices.hbs'
const dataBIM = [
    {
      boldText: 'Boost design speed. ',
      description:
        'BIM modeling and clash detection eliminate up to 90% of design errors, increasing productivity up to fivefold.',

    },
    {
        boldText: 'Create an accurate cost plan. ',
      description:
        'We can help you identify precise budget, cashflow, and time estimates for your projects.',
    },
    {
        boldText: 'Save time and money. ',
      description:
        'Innovative coordination software and expertise help us detect soft (access) and hard (geometry) clashes to reduce expenses during the modeling, construction, and maintenance stages.',
    },
    {
        boldText: 'Improve collaboration. ',
      description:
        'Architects, engineers, designers, and clients can coordinate changes in real-time using proven workflow designs and cloud solutions.',
    },
  ];

const cardList = document.querySelector('.BIMServices__list')
export function appendCardMarkup(dataArr, element) {
    element.insertAdjacentHTML('beforeend', BIMlist(dataArr));
  }
  appendCardMarkup(dataBIM, cardList);