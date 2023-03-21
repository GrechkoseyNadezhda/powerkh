import sectionTemplate from '../../templates/outsourceProjects.hbs';

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
      subtitle: 'Innovative technological solutions',
      subtitleDescription:
        'We handle complex modeling software to build accurate 3D BIM databases with high detail levels (up to LOD 500).',
    },
    {
      subtitle: 'Fast turnaround time',
      subtitleDescription:
        'We use BIM automation and scripting tools to deliver quick results and enhance your productivity.',
    },
    {
      subtitle: 'Established workflow',
      subtitleDescription:
        'Powerkh always stays in touch — our team quickly adjusts to deadline shifts and requirement changes.',
    },
  ],
};
const section = document.querySelector('.outsourceProjects');

export function sectionMarkup(dataArr, element) {
  element.insertAdjacentHTML('beforeend', sectionTemplate(dataArr));
}
sectionMarkup(dataSectionExample, section);
