export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  note: string;
};

/** Placeholders editáveis — substituir por depoimentos reais quando disponíveis. */
export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      '[Depoimento — editar] A experiência na Essenza transmite cuidado, elegância e confiança desde a recepção.',
    author: 'Cliente Essenza',
    note: 'Placeholder editável',
  },
  {
    id: '2',
    quote:
      '[Depoimento — editar] Ambientes serenos, atendimento atento e uma sensação genuína de exclusividade.',
    author: 'Cliente Essenza',
    note: 'Placeholder editável',
  },
  {
    id: '3',
    quote:
      '[Depoimento — editar] Uma clínica que equilibra sofisticação e acolhimento com naturalidade.',
    author: 'Cliente Essenza',
    note: 'Placeholder editável',
  },
];
