import imgLar1x from '../../../images/solution/floor-assembly/floor-assembly-lar@1x.jpg';
import imgLar2x from '../../../images/solution/floor-assembly/floor-assembly-lar@2x.jpg';
import imgMid1x from '../../../images/solution/floor-assembly/floor-assembly-mid@1x.jpg';
import imgMid2x from '../../../images/solution/floor-assembly/floor-assembly-mid@2x.jpg';
import imgSm1x from '../../../images/solution/floor-assembly/floor-assembly-sm@1x.jpg';
import imgSm2x from '../../../images/solution/floor-assembly/floor-assembly-sm@2x.jpg';
import gif from '../../../images/solution/floor-assembly/floor-assembly-gif.gif';
import imLarge1 from '../../../images/hero3-slider/floor-assembly/floor-assemblylLar1x.jpg'
import imLarge2 from '../../../images/hero3-slider/floor-assembly/floor-assemblyLar2x.jpg'
import imLg1 from '../../../images/hero3-slider/floor-assembly/floor-assembly1x.jpg'
import imLg2 from '../../../images/hero3-slider/floor-assembly/floor-assembly2x.jpg'

export const processTemplate = {
     template: { 
      description:{ 
        one: 'By analyzing the client’s ceiling design process, we identified subprocesses that could be automated.',
     two:'Using Dynamo, we made a script that created all drop ceiling elements according to the set of the main parameters in a single run.',
     three: 'At this stage,we realized that it was more efficient to have human control over every subprocess.',
     four: 'We created 4 scripts for every subprocess: framing grid, framing creation, hangers grid, and hangers and clips creation.',
     five: 'Our engineering team took over the ceiling design process and its improvements.'
    }
  
  }  
  }
  export const processSolution = {
    title: 'Solution',
    imgSm1x: imgSm1x,
    imgSm2x: imgSm2x,
    imgMid1x: imgMid1x,
    imgMid2x: imgMid2x,
    imgLar1x: imgLar1x,
    imgLar2x: imgLar2x,
    gif: gif,
  }

  export const processImpact = {
    description: 'By implementing the set of Dynamo scripts, we created a seamless workflow that outputs STL files for every panel with cutouts representing real elements. We boosted efficiency of the entire process and corrected potential manufacturing issues.', 
    list: [
      {number: '90%', text: 'of design errors were fixed'},
      {number: '4x', text: 'increase in design speed'},
      {number: '8x', text: 'cheaper design due to BIM automation and lower labor costs'}]

  }

  export const sliderPicturesAssembly = [
    { img1x: imLarge1, img2x: imLarge2 },
    { img1x: imLg1, img2x: imLg2 },
   
  ];
  export const textHeroFloorAssembly = {
    title: 'Floor assembly design automation',
    client:
      'Our client is one of the country’s top builders of high-end tailored homes from New York, USA',
      challenge: 'Our client developed a workflow that allows the construction team to see the drawings during construction on plywood that is part of floor assembly. The workflow included dividing plywood into panels, preparing the files for CNC machines to cut plywood panels along the drawing lines, and creating pattern drawings. The main design tool was Revit, but the client also used AutoCAD to prepare CNC export files. It took three days for one person to go through the whole process. Eager to speed up the process, the client asked us to help automate the workflow.'
  };