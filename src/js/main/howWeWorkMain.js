import { refs } from '../common/refs-services';
import howWork from '../../templates/howWeWork.hbs';

const dataObj = {
  title: 'How Powerkh works with clients',
  list: [
    {
      subtitle: 'The client contacts our team.',
      description:
        'Reach out to us with your project’s outline and requirements — our experts will get in touch right away.',
    },
    {
      subtitle: 'We will outline the scope.',
      description:
        'We’ll discuss every facet of your project to create a Scope of Work with an accurate budget and time estimates.',
    },
    {
      subtitle: 'The client approves the deliverables.',
      description:
        'After the formalities have been fulfilled, we will immediately begin working on your project.',
    },
    {
      subtitle: 'We do our work.',
      description:
        'Our experts use innovative software and communication tools to deliver fast results while keeping you updated about the progress.',
    },
    {
      subtitle: 'The client’s requirements are met.',
      description:
        'We see to it that your requirements are met as fast as possible.',
    },
    {
      subtitle: 'Ongoing support.',
      description:
        'Powerkh can coordinate your project to help you improve efficiency and reduce costs throughout construction.',
    },
  ],
};

const nowSection = refs.howWeWork;

nowSection.insertAdjacentHTML('beforeend', howWork(dataObj));
