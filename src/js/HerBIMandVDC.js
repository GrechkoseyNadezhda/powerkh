import BIMlist from '../templates/HerBIMAndVDCServices.hbs'
const dataExample = [
    {
      subtitle: 'The client contacts our team.',
      description:
        'Boost design speed. BIM modeling and clash detection eliminate up to 90% of design errors, increasing productivity up to fivefold.',
    },
    {
      subtitle: 'The client contacts our team.',
      description:
        'Create an accurate cost plan. We can help you identify precise budget, cashflow, and time estimates for your projects.',
    },
    {
      subtitle: 'The client contacts our team.',
      description:
        'Save time and money. Innovative coordination software and expertise help us detect soft (access) and hard (geometry) clashes to reduce expenses during the modeling, construction, and maintenance stages.',
    },
    {
      subtitle: 'The client contacts our team.',
      description:
        'Improve collaboration. Architects, engineers, designers, and clients can coordinate changes in real-time using proven workflow designs and cloud solutions.',
    },
  ];

const cardList = document.querySelector('.BIMServices__list')
console.log(cardList);
export function appendCardMarkup(dataArr, element) {
    element.insertAdjacentHTML('beforeend', BIMlist(dataArr));
  }
  appendCardMarkup(dataExample, cardList);