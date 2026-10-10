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
    <header className="sticky top-0 z-20 border-b border-brand/15 bg-[#fffaf0]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-4 sm:px-8 lg:flex-row">
        <a
          href="#home"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-dark"
        >
          <img
            src="/images/nectar-logo.png"
            alt="Néctar"
            className="h-14 w-auto max-w-[min(12rem,70vw)] object-contain"
          />
        </a>
        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-stone-700">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-sm transition-colors hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-dark"
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
