import { overallRating, reviews } from '../data/reviews'

export default function ReviewsSection() {
  return (
    <section
      id="avaliacoes"
      className="scroll-mt-28 bg-amber-100/60 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-800">
            Quem conhece, conta
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-rose-950 sm:text-5xl">
            Memórias e histórias compartilhadas.
          </h2>
        </div>
        <p className="mt-6 text-lg font-medium text-rose-950">
          <span className="font-serif text-4xl font-semibold">
            {overallRating.average.toLocaleString('pt-BR')}
          </span>{' '}
          de 5 estrelas
          <span className="mx-2 text-amber-800" aria-hidden="true">
            ·
          </span>
          {overallRating.totalReviews} avaliações
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <figure
              key={`${review.author}-${index}`}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm"
            >
              <div
                role="img"
                aria-label={`${review.rating} de 5 estrelas`}
                className="text-xl tracking-wide text-amber-600"
              >
                {Array.from({ length: review.rating }, (_, starIndex) => (
                  <span key={starIndex} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-serif text-xl leading-8 text-rose-950">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-stone-700">
                {review.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
