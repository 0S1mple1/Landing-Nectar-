export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-32 overflow-hidden bg-[#fffaf0] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-brand-dark">
            Sorvetes e picolés de produção própria
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">
            Um sabor que faz parte da nossa cidade.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
            Há décadas, a Néctar Sorveteria reúne famílias e jovens em torno de
            sorvetes e picolés feitos com carinho em Anápolis.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#servicos"
              className="rounded-full bg-brand-dark px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-dark"
            >
              Conheça nossos sabores
            </a>
            <a
              href="#contato"
              className="rounded-full border border-brand/40 px-7 py-3.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-dark"
            >
              Fale com a gente
            </a>
          </div>
        </div>
        <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-full bg-brand p-8">
          <img
            src="/images/nectar-logo.png"
            alt="Logo Néctar"
            className="h-auto w-full object-contain"
          />
          <span className="absolute right-3 top-12 -rotate-6 rounded-full bg-[#fffaf0] px-5 py-3 font-serif text-lg text-brand-dark shadow-md sm:right-0">
            Feito com carinho
          </span>
          <span className="absolute bottom-12 left-0 rotate-6 rounded-full bg-brand-dark px-5 py-3 font-serif text-lg text-white shadow-md">
            Tradição há décadas
          </span>
        </div>
      </div>
    </section>
  )
}
