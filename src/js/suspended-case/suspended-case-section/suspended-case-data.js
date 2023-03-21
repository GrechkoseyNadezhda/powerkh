import img11x from '../../../images/hero3-slider/suspended-ceiling/suspended11x.jpg';
import img12x from '../../../images/hero3-slider/suspended-ceiling/suspended12x.jpg';
import img21x from '../../../images/hero3-slider/suspended-ceiling/suspended21x.jpg';
import img22x from '../../../images/hero3-slider/suspended-ceiling/suspended22x.jpg';
import img31x from '../../../images/hero3-slider/suspended-ceiling/suspended31x.jpg';
import img32x from '../../../images/hero3-slider/suspended-ceiling/suspended32x.jpg';
import img41x from '../../../images/hero3-slider/suspended-ceiling/suspended41x.jpg';
import img42x from '../../../images/hero3-slider/suspended-ceiling/suspended42x.jpg';

export const sliderPictures = [
  { img1x: img11x, img2x: img12x },
  { img1x: img21x, img2x: img22x },
  { img1x: img31x, img2x: img32x },
  { img1x: img41x, img2x: img42x },
];
export const textHeroSuspended = {
  title: 'Suspended ceiling design automation',
  client:
    'Our client is one of the country’s top builders of high-end tailored homes from New York, USA',
  challenge:
    'The design process had a series of challenges. One of them was to design a drop ceiling with deck-suspended hangers. It takes quite a lot of time and effort to design it according to structural requirements, model it correctly, and coordinate it with other building elements. A drop ceiling is a system that includes many elements dependent on each other. Even the smallest changes require updating the whole system. As a result, the delivery time of the ready-to-use design goes up. On top of that, it took another 5-6 days for the framing hangers manufacturer to come up with design drawings needed for the Revit model. In the end, every update caused at least a one-week delay.',
};
export const impactSuspended = {
  description:
    'By implementing the set of Dynamo scripts to the drop ceiling design process, we cut down the time needed to design the ceiling for one room from several hours to several minutes. We also introduced a hangers selection algorithm that removed the manufacturer from the design process and allowed the client to get the hangers design in less than a minute. Better coordination with MEP systems and structural elements improved the quality of design. Finally, smart design tools helped eliminate all potential errors at the earliest design stage.',
  list: [
    { number: '90%', text: 'of design errors were fixed' },
    { number: '5x', text: 'increase in design speed' },
    {
      number: '10x',
      text: 'cheaper design due to BIM automation and lower labor costs',
    },
  ],
};
