import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import heroHBS from '../../../templates/hero.hbs';
import featuresForProjectsHBS from '../../../templates/outsourceProjects.hbs';
import contactUsHBS from '../../../templates/contactUs.hbs';
import {
  heroCoordination,
  howCoordination,
  servicesCoordination,
  addValuePrefabrication,
  contactUsPrefabrication,
} from './bim-coordination-data';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { fetchDatabaseFAQ } from '../../common/fetchDatabaseFAQ';

// export const refs = {
//   hero: document.querySelector('.hero__content'),
//   howWeWork: document.querySelector('.howWeWork'),
//   services: document.querySelector('.bim-automation-services'),
// };

useTemplate(refs.hero, heroHBS, heroCoordination);
useTemplate(refs.howWeWork, howWeWorkHBS, howCoordination);
useTemplate(refs.services, servicesHBS, servicesCoordination);
useTemplate(refs.featuresForProjects, featuresForProjectsHBS, addValuePrefabrication);
useTemplate(refs.contactUs, contactUsHBS, contactUsPrefabrication);

// refs.hero.insertAdjacentHTML('beforeend', heroHBS(heroCoordination));
// refs.howWeWork.insertAdjacentHTML('beforeend', howWeWorkHBS(howCoordination));
// refs.services.insertAdjacentHTML(
//   'beforeend',
//   servicesHBS(servicesCoordination)
// );
// const BASEURL = 'https://poverkh-default-rtdb.firebaseio.com/';
// async function fetchDatabaseFAQ(endpoint) {
//   const response = await fetch(BASEURL + endpoint);
//   const answer = await response.json();
//   let answerArr = [];
//   for (let key in answer) {
//     answerArr.push(answer[key]);
//   }
//   console.log(answerArr);
//   return answerArr;
// }

fetchDatabaseFAQ('/faq/bimCoordination.json');
