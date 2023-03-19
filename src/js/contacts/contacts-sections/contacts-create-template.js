import heroHBS from '../../../templates/hero.hbs';

import { heroContacts } from './contacts-data';

import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';

useTemplate(refs.hero, heroHBS, heroContacts);
