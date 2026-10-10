const offerings = [
  {
    number: '01',
    title: 'Sorvetes e picolés',
    description:
      'Produção própria de sorvetes e picolés, com sabores populares como Ninho Trufado.',
    accent: 'bg-brand-light',
  },
  {
    number: '02',
    title: 'Linhas artesanais',
    description:
      'Opções artesanais que fazem parte da variedade de produtos da Néctar.',
    accent: 'bg-brand/20',
  },
  {
    number: '03',
    title: 'Distribuição e revenda',
    description:
      'Distribuição e revenda dos produtos para diversos pontos da região.',
    accent: 'bg-brand-light',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="scroll-mt-28 bg-[#fffaf0] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-dark">
            O que fazemos
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-brand-dark sm:text-5xl">
            Feitos por nós, para compartilhar.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {offerings.map((offering) => (
            <article
              key={offering.number}
              className="rounded-3xl border border-brand/15 bg-white p-7 shadow-sm"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full ${offering.accent} font-serif text-lg font-semibold text-brand-dark`}
              >
                {offering.number}
              </span>
              <h3 className="mt-7 font-serif text-2xl font-semibold text-brand-dark">
                {offering.title}
              </h3>
              <p className="mt-3 leading-7 text-stone-700">
                {offering.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
