import templateExample from '../templates/howWeWork.hbs';

const dataExample = [
  {
    subtitle: 'The client contacts our team.',
    description:
      'Reach out to us with your project’s outline and requirements — our experts will get in touch right away.',
  },
  {
    subtitle: 'The client contacts our team.',
    description:
      'Reach out to us with your project’s outline and requirements — our experts will get in touch right away.',
  },
  {
    subtitle: 'The client contacts our team.',
    description:
      'Reach out to us with your project’s outline and requirements — our experts will get in touch right away.',
  },
  {
    subtitle: 'The client contacts our team.',
    description:
      'Reach out to us with your project’s outline and requirements — our experts will get in touch right away.',
  },
  {
    subtitle: 'The client contacts our team.',
    description:
      'Reach out to us with your project’s outline and requirements — our experts will get in touch right away.',
  },
];
const exampleList = document.querySelector('.howWeWork__list');
console.log(templateExample);
export function appendCardMarkup(dataArr, element) {
  element.insertAdjacentHTML('beforeend', templateExample(dataArr));
}
appendCardMarkup(dataExample, exampleList);
