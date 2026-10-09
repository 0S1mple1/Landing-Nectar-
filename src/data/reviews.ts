export interface Review {
  author: string
  quote: string
  rating: number
}

export const overallRating = {
  average: 4.3,
  totalReviews: 143,
}

export const reviews: Review[] = [
  {
    author: 'Maria Aparecida Rodrigues',
    quote: 'Atendimento notal mil.',
    rating: 5,
  },
  {
    author: 'Diogo da silva  reis',
    quote:
      'Excelente sorveteria, muito boa mesmo. É tradicional e muito antiga. Já fui na época da escola, há 16 anos. Qualidade máxima!',
    rating: 5,
  },
  {
    author: 'Adriana dias rodrigues ribeiro',
    quote:
      'Sorvetes variados e saborosos! Preços acessíveis em opções de embalagens de 5 e 10 litros. Experimente o sabor ninho trufado e você irá se surpreender!',
    rating: 5,
  },
]
