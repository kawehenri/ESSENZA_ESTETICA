export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  note: string;
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Desde a recepção senti cuidado de verdade. A pele ficou luminosa e o ambiente transmite uma calma rara.',
    author: 'Mariana S.',
    note: 'Facial',
  },
  {
    id: '2',
    quote:
      'Atendimento atento, rituais delicados e uma sensação genuína de exclusividade. Saí renovada.',
    author: 'Camila R.',
    note: 'Skincare',
  },
  {
    id: '3',
    quote:
      'A Essenza equilibra sofisticação e acolhimento com naturalidade. Cada detalhe fala de excelência.',
    author: 'Beatriz L.',
    note: 'Corpo',
  },
];
