# Validação — Identidade visual da Néctar Sorveteria

## Resultado

Status: REPROVADO

## Resumo

Dois dos três critérios passaram. A logo é apresentada no cabeçalho e no hero em proporção natural, o layout não apresenta overflow horizontal nas viewports verificadas, o verde está aplicado como cor principal e o build TypeScript/Vite passa. O critério CA-002 falhou: a inspeção do PNG composto sobre fundo uniforme ainda revela traços horizontais tênues atravessando elementos da logo.

## Critérios

### CA-001 — Logo apresentada nos pontos de identidade

Status: PASSOU

Evidência:

- Inspeção da página no navegador em viewport móvel de 390 px e desktop de 1440 px.
- As duas imagens carregaram com texto alternativo e dimensões proporcionais ao arquivo original 482 × 205: cabeçalho 132 × 56 px e hero 384 × 163 px em desktop; cabeçalho 132 × 56 px e hero 271 × 115 px em 390 px.
- Não houve overflow horizontal: `document.scrollWidth` foi 375 px com viewport configurada em 390 px, e 1425 px com viewport desktop de 1440 px.
- O cabeçalho e o hero exibem a logo enviada, sem a representação tipográfica provisória.
- `npm run build` passou.

Comportamento esperado:

O cabeçalho e a seção principal exibem a logo fornecida em telas móveis e desktop, sem representação provisória nem distorção de proporção.

Comportamento encontrado:

As imagens foram carregadas nos dois pontos de identidade com texto alternativo e proporção natural nas viewports verificadas.

---

### CA-002 — Marca isolada e recorte íntegro

Status: FALHOU

Evidência:

- `public/images/nectar-logo.png` é PNG RGBA de 482 × 205 px, com transparência (alfa 0–255) e limites visíveis próximos às extremidades do arquivo.
- A logo foi composta e inspecionada visualmente sobre o fundo uniforme `#50963E`.
- Nessa inspeção ainda são visíveis traços horizontais estreitos atravessando o elemento gráfico e partes do lettering. Portanto, a imagem não satisfaz a exigência de remoção integral das linhas.

Comportamento esperado:

Somente o lettering “Sorvetes Néctar Mauá” e o elemento gráfico permanecem visíveis, sem o fundo da fachada ou linhas horizontais, com a marca íntegra e recorte justo.

Comportamento encontrado:

O fundo fotográfico foi removido e a marca está recortada com transparência, mas permanecem traços horizontais tênues nos pontos em que as linhas da imagem original cruzam a marca.

---

### CA-003 — Verde aplicado como cor principal

Status: PASSOU

Evidência:

- A busca em `src/` não encontrou classes de cor `rose-*`, `amber-*` ou `orange-*`.
- No navegador, as seções de história e contato usam o verde escuro da paleta e avaliações usam o fundo verde claro; a logo aparece sobre o verde principal.
- O verde principal definido em `src/index.css` é `#50963E`; tons escuros são usados para texto e controles.
- Contrastes calculados: branco sobre `#315C28` = 7,80:1; branco sobre `#386E2E` = 6,11:1; `#315C28` sobre `#E8F1E5` = 6,74:1; `#315C28` sobre `#FFFAF0` = 7,50:1.
- `npm run build` passou.

Comportamento esperado:

O verde `#50963E` é a cor principal no lugar dos tons de vinho e âmbar, mantendo a legibilidade de textos e controles.

Comportamento encontrado:

A paleta foi aplicada às seções e componentes previstos, sem classes de destaque vinho/âmbar/laranja remanescentes; os pares de contraste medidos excedem 4,5:1.

---

## Critérios com Falha

- **CA-002:** remover os traços horizontais ainda visíveis na imagem da logo. Correção deve ser realizada em `/sdd-execute`.

## Matriz Final

| Critério | Resultado | Evidência |
|---|---|---|
| CA-001 | PASSOU | Logo carregada em cabeçalho e hero, com alt text, proporções naturais e sem overflow móvel. |
| CA-002 | FALHOU | Inspeção sobre fundo verde detectou linhas horizontais residuais na logo. |
| CA-003 | PASSOU | Paleta verde aplicada, sem classes antigas de destaque; build e contraste verificados. |

## Resultado Final

Critérios totais: 3

Aprovados: 2

Falhos: 1

Bloqueados: 0

Status final:

VALIDATION_FAILED
