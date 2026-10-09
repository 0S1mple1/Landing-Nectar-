const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7429.519401656521!2d-48.966234432487106!3d-16.317185793768505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea38a961b86c3%3A0xb85721de2d2918f0!2sN%C3%A9ctar%20Sorveteria!5e0!3m2!1spt-BR!2sbr!4v1791577204133!5m2!1spt-BR!2sbr'

export default function LocationSection() {
  return (
    <section
      id="localizacao"
      className="scroll-mt-28 bg-[#fffaf0] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-800">
              Visite a gente
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-rose-950 sm:text-5xl">
              Estamos em Anápolis.
            </h2>
            <p className="mt-4 leading-7 text-stone-700">
              Rua Mauá, nº 767 — região central, próximo à Vila São João.
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/b5fu9BWxFNAwJimM9"
            target="_blank"
            rel="noreferrer"
            className="w-fit rounded-full border border-rose-900/30 px-6 py-3 text-sm font-semibold text-rose-950 transition-colors hover:bg-rose-900/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-900"
          >
            Ver no Google Maps
          </a>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-amber-100 shadow-sm sm:aspect-[16/7]">
          <iframe
            src={mapEmbedUrl}
            title="Mapa com a localização da Néctar Sorveteria na Rua Mauá, 767, Anápolis"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  )
}
