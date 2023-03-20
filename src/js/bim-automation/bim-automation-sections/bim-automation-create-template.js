import servicesHBS from '../../../templates/architecAndStructBim.hbs';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { architecAndStruct } from './bim-automation-data';

useTemplate(refs.services, servicesHBS, architecAndStruct);