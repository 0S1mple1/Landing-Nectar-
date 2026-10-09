export default function StorySection() {
  return (
    <section
      id="historia"
      className="scroll-mt-28 bg-rose-950 px-5 py-20 text-white sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
            Nossa história
          </p>
          <h2 className="mt-4 max-w-md font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Um lugar especial na memória de Anápolis.
          </h2>
        </div>
        <div className="max-w-2xl space-y-5 text-lg leading-8 text-rose-50/85">
          <p>
            Há décadas, a Néctar Sorveteria faz parte da vida da cidade e é
            reconhecida como um ponto de encontro clássico para famílias e
            jovens anapolinos.
          </p>
          <p>
            Mais do que sorvetes e picolés, a casa guarda um apelo afetivo na
            memória de quem vive em Anápolis — uma tradição local que continua
            reunindo pessoas.
          </p>
        </div>
      </div>
    </section>
  )
}
