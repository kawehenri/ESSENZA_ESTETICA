import cardFacial from '../assets/images/card-facial.jpg';
import cardSkincare from '../assets/images/card-skincare.jpg';
import cardBody from '../assets/images/card-body.jpg';
import cardWellness from '../assets/images/card-wellness.jpg';

export type Treatment = {
  id: string;
  title: string;
  line: string;
  description: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const treatments: Treatment[] = [
  {
    id: 'facial',
    title: 'Cuidado Facial',
    line: 'Pele renovada, naturalmente.',
    description:
      'Protocolos pensados para valorizar a saúde e a luminosidade da pele.',
    image: cardFacial,
    imageAlt: 'Cuidado facial delicado com textura de pele realista na Essenza',
    featured: true,
  },
  {
    id: 'skincare',
    title: 'Skincare',
    line: 'Rituais para a sua pele.',
    description:
      'Cuidados personalizados para nutrir, proteger e realçar sua beleza.',
    image: cardSkincare,
    imageAlt: 'Produtos de skincare premium em ambiente real da clínica',
  },
  {
    id: 'body',
    title: 'Corpo',
    line: 'Cuidado que transforma.',
    description:
      'Experiências corporais pensadas para promover bem-estar e confiança.',
    image: cardBody,
    imageAlt: 'Sala de cuidado corporal serena com materiais naturais',
  },
  {
    id: 'experience',
    title: 'Experiência Essenza',
    line: 'Um cuidado além da estética.',
    description:
      'Ambientes, rituais e detalhes pensados para transformar sua visita.',
    image: cardWellness,
    imageAlt: 'Detalhe editorial de acolhimento e pausa na Essenza',
  },
];
