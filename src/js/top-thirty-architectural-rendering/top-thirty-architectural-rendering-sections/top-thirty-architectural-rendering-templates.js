import heroFourHBS from '../../../templates/hero-part-four.hbs';
import shareHBS from '../../../templates/share.hbs';
import contentsHBS from '../../../templates/contents.hbs';
import authorHBS from '../../../templates/author.hbs';
import architectRendServHBS from '../../../templates/architecturalRenderingServices.hbs';

import {
  heroFourData,
  contentsData,
  shareData,
  architectRendServData,
} from './top-thirty-architectural-rendering-data';

import { refs } from '../../common/refs-services';
import { useTemplate } from '../../common/use-template';
import { fetchDatabaseAuthor } from '../../common/fetchDatabaseAuthor';

useTemplate(refs.heroPartFour, heroFourHBS, heroFourData);
useTemplate(refs.share, shareHBS, shareData);
useTemplate(refs.contents, contentsHBS, contentsData);
useTemplate(
  refs.architectRendServ,
  architectRendServHBS,
  architectRendServData
);

fetchDatabaseAuthor('/authors/TetianaRapina.json', refs.author, authorHBS);
