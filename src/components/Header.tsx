const links = [
  { href: '#home', label: 'Início' },
  { href: '#historia', label: 'Nossa história' },
  { href: '#servicos', label: 'Produtos e serviços' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
  { href: '#localizacao', label: 'Localização' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-amber-950/10 bg-[#fffaf0]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-4 sm:px-8 lg:flex-row">
        <a
          href="#home"
          className="font-serif text-2xl font-bold tracking-tight text-rose-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-800"
        >
          Néctar<span className="text-amber-700">.</span>
          <span className="sr-only"> Sorveteria — início</span>
        </a>
        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-stone-700">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-sm transition-colors hover:text-rose-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-800"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
