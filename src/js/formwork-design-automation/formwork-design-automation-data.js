import imgLar1x from '../../images/solution/formwork/formwork-lar@1x.jpg';
import imgLar2x from '../../images/solution/formwork/formwork-lar@2x.jpg';
import imgMid1x from '../../images/solution/formwork/formwork-mid@1x.jpg';
import imgMid2x from '../../images/solution/formwork/formwork-mid@2x.jpg';
import imgSm1x from '../../images/solution/formwork/formwork-sm@1x.jpg';
import imgSm2x from '../../images/solution/formwork/formwork-sm@2x.jpg';
import gif from '../../images/solution/formwork/formwork-gif.gif';
import imLarge1 from '../../images/hero3-slider/formwork/formwork-2@1x.png';
import imLarge2 from '../../images/hero3-slider/formwork/formwork-2@2x.png';
import imLg1 from '../../images/hero3-slider/formwork/formwork-1@1x.png';
import imLg2 from '../../images/hero3-slider/formwork/formwork-1@2x.png';

export const textHeroFormworkDesign = {
  title: 'Formwork design automation',
  client: 'Our client is a concrete subcontractor from California, USA',
  challenge:
    'Our client had to deal with an inefficient formwork design process. They utilized CAD technology as the main design tool.',
  challenge2: 'The key challenges were as follows:',
  list: [
    '1. Manually updated design',
    '2. Too much manual work with shoring calculations and BOM generation',
    '3. Time-consuming 2D coordination and design QC',
  ],
};

export const sliderPicturesFormwork = [
  { img1x: imLarge1, img2x: imLarge2 },
  { img1x: imLg1, img2x: imLg2 },
];

export const processTemplate = {
  template: {
    description: {
      one: 'We analyzed the company’s design process and suggested switching their projects to BIM.',
      two: 'Our team converted 100+ CAD blocks into 30 parametric families, as well as created Revit templates.',
      three:
        'Having tested the formwork BIM design process, we found a number of issues to fix and identified routine tasks that could be automated.',
      four: 'We developed 12 Dynamo scripts for the most time-consuming tasks and created a formwork structural analysis workflow using Revit-Robot integration and Dynamo scripts.',
      five: 'Our engineering team took over the formwork design process and successfully completed 100+ projects, constantly improving the process.',
    },
  },
};
export const processSolution = {
  title: 'Solution',
  imgSm1x: imgSm1x,
  imgSm2x: imgSm2x,
  imgMid1x: imgMid1x,
  imgMid2x: imgMid2x,
  imgLar1x: imgLar1x,
  imgLar2x: imgLar2x,
  gif: gif,
};

export const processImpact = {
  description:
    'The implementation of the BIM process and design automation helped us achieve the following:',
  list: [
    { number: '80%', text: 'of design errors were fixed' },
    { number: '2x', text: 'increase in design speed' },
    {
      number: '4x',
      text: 'cheaper design due to BIM automation and lower labor costs',
    },
  ],
};
