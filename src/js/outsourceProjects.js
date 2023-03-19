import sectionTemplate from '../templates/outsourceProjects.hbs';

// console.log(sectionTemplate);
const dataSectionExample = {
  title: 'Powerkh for BIM Outsourcing Projects',
  description:
    'Powerkh can find the right approach to any project — from residential apartments to industrial complexes. No matter how difficult and multifaceted your construction may seem, our experts will help you enhance productivity with innovative BIM solutions and VDC services.',
  listDescription: 'Our partners can expect:',
  items: [
    {
      subtitle: 'Engineering and design experience',
      subtitleDescription:
        'Our specialists understand the design intent and Powerkh for BIM Outsourcing Projects',
    },
    {
      subtitle: 'Engineering and design experience',
      subtitleDescription:
        'Our specialists understand the design intent and Powerkh for BIM Outsourcing Projects',
    },
    {
      subtitle: 'Engineering and design experience',
      subtitleDescription:
        'Our specialists understand the design intent and Powerkh for BIM Outsourcing Projects',
    },
    {
      subtitle: 'Engineering and design experience',
      subtitleDescription:
        'Our specialists understand the design intent and Powerkh for BIM Outsourcing Projects',
    },
  ],
};
const section = document.querySelector('.outsourceProjects');

export function sectionMarkup(dataArr, element) {
  element.insertAdjacentHTML('beforeend', sectionTemplate(dataArr));
}
// sectionMarkup(dataSectionExample, section);
