import howWeWorkHBS from '../../../templates/howWeWork.hbs';
import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import { howCoordination, servicesCoordination } from './bim-coordination-data';

const refs = {
  howWeWork: document.querySelector('.howWeWork'),
  services: document.querySelector('.bim-automation-services'),
};

refs.howWeWork.insertAdjacentHTML('beforeend', howWeWorkHBS(howCoordination));
refs.services.insertAdjacentHTML(
  'beforeend',
  servicesHBS(servicesCoordination)
);
