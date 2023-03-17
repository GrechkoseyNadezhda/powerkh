import architecAndStructBim from '../../../templates/architecAndStructBim.hbs';

const architecAndStructObject = {
  title: 'Our BIM Automation Services',
  text: 'Powerkh can replace manual, tedious operations with automated processes via advanced scripts and proven methodologies.',
  topic: 'We offer:',
  list: [
    'BIM automation for modeling, reporting, and clash detection',
    'Integration with Autodesk Revit',
    'Advanced Revit functionality with Dynamo plug-in',
    'BIM scripting with Dynamo tool',
    'Standardization across Revit projects',
    'Workflow optimization',
    'Enhanced generative design in Revit',
  ],
};

const architecAndStructSection = document.querySelector(
  '.bim-automation-services'
);

const architecAndStructTemplate = architecAndStructBim(architecAndStructObject);
architecAndStructSection.innerHTML = architecAndStructTemplate;
