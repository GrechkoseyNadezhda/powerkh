import processTemplateHBS from '../../../templates/processTemplate.hbs'
import {
    processTemplate
} from './floor-assembly-data.js';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';

useTemplate(refs.process, processTemplateHBS, processTemplate);
