export const clinic = {
  name: 'ESSENZA',
  fullName: 'ESSENZA ESTÉTICA',
  tagline: 'Sua beleza, sua essência.',
  description:
    'Clínica de estética premium dedicada ao autocuidado sofisticado, com ambientes pensados para tranquilidade, excelência e resultados delicados.',
  phone: '[Telefone — editar]',
  phoneHref: 'tel:+5500000000000',
  whatsapp: '[WhatsApp — editar]',
  whatsappHref: 'https://wa.me/5500000000000',
  email: '[email — editar]',
  emailHref: 'mailto:contato@essenzaestetica.com.br',
  address: '[Endereço — editar]',
  hours: '[Horário de atendimento — editar]',
  instagram: '@essenzaestetica',
  instagramHref: 'https://instagram.com/',
  facebookHref: 'https://facebook.com/',
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Clínica', href: '#clinica' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Ambiente', href: '#ambiente' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];
