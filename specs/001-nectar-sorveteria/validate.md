# Validação — Landing page da Néctar Sorveteria

## Resultado

Status: APROVADO

## Resumo

Os 11 critérios de aceite foram verificados contra a implementação. O build de produção e a verificação TypeScript passaram. A página foi conferida no navegador; navegação, conteúdo, formulário, metadados, mapa e responsividade atenderam aos comportamentos especificados. Não foram encontrados critérios falhos ou bloqueados.

## Critérios

### CA-001 — Navegação para todas as seções

Status: PASSOU

Evidência:

Em `src/components/Header.tsx`, os seis links da navegação apontam para `#home`, `#historia`, `#servicos`, `#avaliacoes`, `#contato` e `#localizacao`. No navegador, todos os destinos foram encontrados. A ativação do link “Nossa história” com foco de teclado e Enter alterou o fragmento para `#historia`.

Comportamento esperado:

Cada link leva à seção correspondente e a navegação pode ser usada por mouse ou teclado.

Comportamento encontrado:

Os seis links têm destinos correspondentes; o link de História foi ativado por teclado e navegou à seção correta.

### CA-002 — Apresentação na Home

Status: PASSOU

Evidência:

Em `src/components/Hero.tsx`, a seção Home exibe o nome Néctar, uma apresentação textual sobre sorvetes e picolés de produção própria e o contexto de tradição local. O conteúdo foi confirmado no navegador.

Comportamento esperado:

A Home identifica a empresa e apresenta conteúdo baseado nos fatos de `req.md`.

Comportamento encontrado:

Nome e apresentação institucional estão visíveis e usam as informações fornecidas.

### CA-003 — História com fatos fornecidos

Status: PASSOU

Evidência:

Em `src/components/StorySection.tsx`, a seção descreve a tradição de décadas, a sorveteria como ponto de encontro de famílias e jovens e seu apelo afetivo na memória dos anapolinos. O texto foi confirmado no navegador.

Comportamento esperado:

A seção apresenta a tradição local usando informações aprovadas, sem fatos inventados.

Comportamento encontrado:

Os fatos informados estão representados em texto, sem datas, nomes ou acontecimentos adicionais.

### CA-004 — Serviços e produtos

Status: PASSOU

Evidência:

Em `src/components/ServicesSection.tsx`, o conteúdo apresenta produção própria de sorvetes e picolés, sabor Ninho Trufado, linhas artesanais e distribuição e revenda regional. Os termos e descrições foram confirmados no navegador.

Comportamento esperado:

A seção apresenta todos os produtos e serviços definidos para a Néctar.

Comportamento encontrado:

Produção própria, Ninho Trufado, linhas artesanais e distribuição/revenda estão presentes.

### CA-005 — Avaliações manuais sem conteúdo inventado

Status: PASSOU

Evidência:

`src/data/reviews.ts` inicia com uma lista tipada vazia para receber registros manuais. `src/components/ReviewsSection.tsx` renderiza as avaliações dessa lista e, quando vazia, informa que serão compartilhadas pela equipe. No navegador, a seção de estado vazio apareceu sem depoimentos fictícios.

Comportamento esperado:

Avaliações fornecidas manualmente são exibidas, sem criar ou atribuir avaliações não fornecidas.

Comportamento encontrado:

A renderização usa somente registros adicionados à lista local; no estado atual, não há avaliações ou atribuições fictícias.

### CA-006 — Envio do formulário para o WhatsApp

Status: PASSOU

Evidência:

Em `src/components/ContactForm.tsx`, o envio monta uma mensagem com nome e texto e direciona para `https://wa.me/5562991267068`. No navegador, o envio de “Teste Validação” e “Mensagem com acentos: ação & sabor” resultou em URL com o número correto e texto decodificado preservado. A interface informa que o WhatsApp será aberto para revisão e envio e que os dados não são armazenados no site.

Comportamento esperado:

O envio abre uma conversa com o número definido e uma mensagem pré-preenchida para revisão pelo visitante.

Comportamento encontrado:

O navegador foi direcionado ao número `5562991267068` com nome e mensagem codificados corretamente; nenhum backend ou armazenamento foi envolvido.

### CA-007 — Controles acessíveis do formulário

Status: PASSOU

Evidência:

Em `src/components/ContactForm.tsx`, os campos “Seu nome” e “Mensagem” possuem rótulos associados por `htmlFor` e `id`. No navegador, ambos os campos foram preenchidos por teclado; Tab moveu o foco do campo de nome para mensagem e depois para o botão de envio.

Comportamento esperado:

Os campos são identificáveis, rotulados e operáveis por teclado.

Comportamento encontrado:

Os rótulos são associados e o percurso de foco permite preencher ambos os campos e alcançar a ação de envio.

### CA-008 — Localização e mapa

Status: PASSOU

Evidência:

Em `src/components/LocationSection.tsx`, o endereço é exibido como Rua Mauá, nº 767, região central, próximo à Vila São João. O iframe usa o URL fornecido em `req.md`, possui título acessível e o link para o Google Maps corresponde ao link informado no briefing. Endereço e iframe foram observados no navegador.

Comportamento esperado:

A seção exibe o endereço aprovado e o mapa incorporado fornecido.

Comportamento encontrado:

Endereço, link e mapa estão presentes na seção de localização.

### CA-009 — Metadados institucionais

Status: PASSOU

Evidência:

Em `index.html`, há título “Néctar Sorveteria | Sabor e tradição em Anápolis” e descrição institucional não vazia. O título e a descrição foram lidos no navegador.

Comportamento esperado:

O documento fornece título e descrição que identificam a empresa e a página institucional.

Comportamento encontrado:

Ambos os metadados estão definidos e identificam a Néctar Sorveteria e seus produtos.

### CA-010 — Layout responsivo

Status: PASSOU

Evidência:

O navegador foi configurado para viewports de 360 px e 1280 px. Em ambos, `document.documentElement.scrollWidth` foi igual a `clientWidth` (respectivamente 345 px e 1265 px na área de conteúdo do navegador), sem rolagem horizontal.

Comportamento esperado:

Navegação, formulário e mapa permanecem utilizáveis em viewport móvel e desktop sem rolagem horizontal.

Comportamento encontrado:

Não houve overflow horizontal nos dois tamanhos verificados.

### CA-011 — Carregamento do mapa sem bloquear o conteúdo

Status: PASSOU

Evidência:

Em `src/components/LocationSection.tsx`, o iframe possui `loading="lazy"`. A página e as demais seções foram renderizadas e verificadas enquanto o mapa incorporado carregava de forma independente.

Comportamento esperado:

O restante da landing page continua disponível durante o carregamento do mapa.

Comportamento encontrado:

O mapa usa carregamento lazy e as demais seções e controles permaneceram renderizados e acessíveis.

## Critérios com Falha

Nenhum.

## Matriz Final

| Critério | Resultado | Evidência |
|---|---|---|
| CA-001 | PASSOU | Seis âncoras válidas; ativação por teclado confirmou `#historia`. |
| CA-002 | PASSOU | Nome da empresa e apresentação observados na Home. |
| CA-003 | PASSOU | História com fatos aprovados observada no navegador. |
| CA-004 | PASSOU | Produtos, sabor e serviços regionais observados na seção correspondente. |
| CA-005 | PASSOU | Lista manual tipada; estado vazio sem depoimentos fictícios. |
| CA-006 | PASSOU | Redirecionamento para `wa.me/5562991267068` com mensagem codificada confirmada. |
| CA-007 | PASSOU | Labels associados; campos e botão alcançados e preenchidos por teclado. |
| CA-008 | PASSOU | Endereço, link do Maps e iframe presentes. |
| CA-009 | PASSOU | Título e descrição não vazios confirmados no navegador. |
| CA-010 | PASSOU | Sem overflow horizontal em viewports de 360 px e 1280 px. |
| CA-011 | PASSOU | iframe com `loading="lazy"`; restante da página disponível durante o carregamento. |

## Resultado Final

Critérios totais: 11

Aprovados: 11

Falhos: 0

Bloqueados: 0

Build/typecheck: `npm run build` — PASSOU

Status final:

VALIDATED
