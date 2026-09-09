export const clinic = {
  name: 'ESSENZA',
  fullName: 'ESSENZA ESTÉTICA',
  tagline: 'Sua beleza, sua essência.',
  description:
    'Clínica de estética premium dedicada ao autocuidado sofisticado, com ambientes pensados para tranquilidade, excelência e resultados delicados.',
  phone: '(61) 98627-9308',
  phoneHref: 'tel:+5561986279308',
  whatsapp: '(61) 98627-9308',
  whatsappHref: 'https://wa.me/5561986279308',
  instagram: '@essenzaestetica',
  instagramHref: 'https://instagram.com/',
  facebookHref: 'https://facebook.com/',
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: 'A Clínica', href: '#clinica' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];
