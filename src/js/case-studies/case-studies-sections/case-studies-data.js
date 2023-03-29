import img11x from '../../../images/our-case-studies-tml/1-l@1x.jpg';
import img12x from '../../../images/our-case-studies-tml/1-l@2x.jpg';
import img21x from '../../../images/our-case-studies-tml/2-l@1x.jpg';
import img22x from '../../../images/our-case-studies-tml/2-l@2x.jpg';
import img31x from '../../../images/our-case-studies-tml/3-color-l@1x.jpg';
import img32x from '../../../images/our-case-studies-tml/3-color-l@2x.jpg';

import iconEye from '../../../images/vectors/eye.svg';
export const caseStudiesData = [
  {
    badge: 'Formwork design automation',
    title: 'Formwork design automation',
    author: 'California, USA',
    description:
      'Our client had to deal with an inefficient formwork design process. They utilized CAD technology as the main design tool.',
    link: './formwork-design-automation.html',
    img1x: img11x,
    img2x: img12x,
    icon: iconEye,
  },
  {
    badge: 'Suspended ceiling design automation',
    title: 'Suspended ceiling design automation',
    author: 'New York, USA',
    description:
      'The design process had a series of challenges. One of them was to design a drop ceiling with deck-suspended hangers. It takes quite a lot of time and effort to design it according to structural requirements, model it correctly, and coordinate it with other building elements. A drop ceiling is a system that includes many elements dependent on each other. Even the smallest changes require updating the whole system. As a result, the delivery time of the ready-to-use design goes up. On top of that, it took another 5-6 days for the framing hangers manufacturer to come up with design drawings needed for the Revit model. In the end, every update caused at least a one-week delay.',
    link: './suspended-case.html',
    img1x: img21x,
    img2x: img22x,
    icon: iconEye,
  },
  {
    badge: 'Floor assembly design automation',
    title: 'Floor assembly design automation',
    author: 'California, USA',
    description:
      'The client struggled with a time-consuming workflow of floor assembly design. Our team implemented Dynamo scripts to speed up every subprocess and do quality control. In the end, the client got a smooth workflow and an efficient, error-free design process.',
    link: './floor-assembly-design-automation.html',
    img1x: img31x,
    img2x: img32x,
    icon: iconEye,
  },
];
