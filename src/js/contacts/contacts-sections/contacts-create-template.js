import arrow from '../../../images/vectors/arrow.svg';

import { formContacts } from './contacts-data';
import contactFormHBS from '../../../templates/contact-form.hbs';
import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';

useTemplate(refs.hero, contactFormHBS, formContacts);

refs.heroBtn.innerHTML = `${formContacts.btnText} <img src="${arrow}" />`;
refs.heroBtn.setAttribute('type', 'submit');
