import { refs } from '../common/refs-services';
import bimVdc from '../../templates/herBIMAndVDCServices.hbs';

const dataObject = {
  title: 'BIM & VDC Services',
  listText: [
    'Building Information Modeling (BIM) and Virtual Design & Construction (VDC) take construction management to new heights. However, few companies can successfully move from the conventional approach with flat drawings towards complex 3D modeling.',
    'Powerkh is one of these companies. Our team has vast experience with both traditional and digitalized projects. As such, we can ease the transition and help you out at every stage of construction.',
    'Do you want to improve your project’s success rate and efficiency? Powerkh provides a wide range of Revit BIM services for various industries. We can audit your workflow and introduce automation solutions to help you perform routine processes three times as fast.',
    'With us at your side, you will rethink how you plan, perform, and coordinate your teams.',
  ],
  smallTitle:
    'Our virtual design and construction offerings bring benefits to:',
  smallTitle2: 'Who Can Benefit from BIM Outsourcing Services?',
  textForMainpage: 'Who Can Benefit from BIM Outsourcing Services?',
  list: [
    {
      boldText: '',
      text: 'Architects',
    },
    {
      boldText: '',
      text: 'Engineers',
    },
    {
      boldText: '',
      text: 'Designers',
    },
    {
      boldText: '',
      text: 'Contractors',
    },
    {
      boldText: '',
      text: 'Surveyors',
    },
    {
      boldText: '',
      text: 'Consultants',
    },
    {
      boldText: '',
      text: 'On-site teams',
    },
  ],
};

const mainHero = refs.herBIMAndVDC;

mainHero.insertAdjacentHTML('beforeend', bimVdc(dataObject));
document.querySelectorAll('.benefits__item').forEach(el => {
  el.classList.add('bimServices__section_item-main');
});
