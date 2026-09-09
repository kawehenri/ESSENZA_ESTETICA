import cardFacial from '../assets/images/card-facial.jpg';
import cardSkincare from '../assets/images/card-skincare.jpg';
import cardBody from '../assets/images/card-body.jpg';
import cardWellness from '../assets/images/card-wellness.jpg';

export type Treatment = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const treatments: Treatment[] = [
  {
    id: 'facial',
    title: 'Cuidado Facial',
    description:
      'Protocolos personalizados para revitalizar a pele com delicadeza, equilíbrio e atenção aos detalhes.',
    image: cardFacial,
    imageAlt: 'Preparação delicada para cuidado facial na Essenza',
  },
  {
    id: 'skincare',
    title: 'Skincare',
    description:
      'Rotinas e tratamentos pensados para nutrir, proteger e realçar a luminosidade natural da pele.',
    image: cardSkincare,
    imageAlt: 'Produtos de skincare premium organizados com elegância',
  },
  {
    id: 'body',
    title: 'Contorno Corporal',
    description:
      'Experiências de cuidado corporal em ambiente sereno, com foco em bem-estar e sofisticação.',
    image: cardBody,
    imageAlt: 'Sala de atendimento corporal com toalhas e óleos premium',
  },
  {
    id: 'wellness',
    title: 'Bem-estar',
    description:
      'Momentos de pausa e renovação que unem tranquilidade, acolhimento e excelência estética.',
    image: cardWellness,
    imageAlt: 'Detalhe de bem-estar com chá e flores delicadas',
  },
];
