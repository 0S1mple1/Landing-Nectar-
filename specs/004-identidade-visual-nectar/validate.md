# Validação — Identidade visual da Néctar Sorveteria

## Resultado

Status: APROVADO

Estado final: VALIDATED

Data: 2026-10-10

## Resumo

Os três critérios de aceite passaram. A variante “Néctar” aprovada pelo usuário está nos pontos de identidade, carrega em desktop e mobile sem distorção nem overflow horizontal, e o PNG isolado tem transparência e recorte justo. A cor principal e a legibilidade foram conferidas na aplicação. O build de produção TypeScript/Vite passou.

A validação anterior reprovou CA-002 por linhas residuais na imagem antiga. Esse resultado foi supersedido após o usuário aprovar uma nova fonte e a execução substituir o asset.

## Validação individual

### CA-001 — Logo apresentada nos pontos de identidade

Relacionado a: RF-001

Status: PASSOU

Comportamento esperado:

O cabeçalho e o hero exibem a logo aprovada pelo usuário em dispositivos móveis e desktop, sem distorção nem representação tipográfica provisória.

Comportamento encontrado:

O cabeçalho e o hero exibem o mesmo PNG “Néctar”, com texto alternativo, carregado corretamente em ambas as viewports. A dimensão natural do PNG é 442 × 198 px (proporção 2,23:1); as dimensões renderizadas também preservam essa proporção.

Evidências:

- Inspeção no navegador com viewports de 390 px e 1440 px.
- Em 390 px: imagem do cabeçalho 125 × 56 px e imagem do hero 271 × 121 px; ambas carregadas com alt text.
- Em 1440 px: imagem do cabeçalho 125 × 56 px e imagem do hero 384 × 172 px; ambas carregadas com alt text.
- Largura do documento: 375 px em viewport de 390 px e 1425 px em viewport de 1440 px; sem overflow horizontal.
- Captura da seção hero em desktop confirmou visualmente a variante aprovada.

### CA-002 — Marca isolada e recorte íntegro

Relacionado a: RF-002

Status: PASSOU

Comportamento esperado:

Somente o lettering “Néctar” e o elemento gráfico existentes na imagem aprovada permanecem visíveis, sem o fundo verde original, com arte completa e recorte justo, inclusive quando composto sobre verde uniforme.

Comportamento encontrado:

`public/images/nectar-logo.png` é um PNG RGBA de 442 × 198 px com transparência real (alfa de 0 a 255). O fundo verde de origem foi removido; a arte foi composta e inspecionada visualmente sobre #50963E, sem o painel original. A caixa não transparente vai de (0, 3) a (440, 197), mantendo margem de até 3 px.

Evidências:

- Inspeção visual do asset e de sua composição sobre #50963E.
- O PNG servido pelo Vite conserva dimensões 442 × 198 px e o canal alfa.
- A imagem original aprovada pelo usuário contém somente “Néctar”; a página e o critério foram atualizados com autorização explícita para usar essa variante, sem as palavras “Sorvetes” e “Mauá”.

### CA-003 — Verde aplicado como cor principal

Relacionado a: RF-003

Status: PASSOU

Comportamento esperado:

O verde #50963E substitui vinho e âmbar como cor principal, mantendo textos e controles legíveis.

Comportamento encontrado:

O tema da aplicação define #50963E como `brand`, com tons escuros para textos e controles. No navegador, as seções de história e contato usam #315C28 e avaliações usam #E8F1E5. Não foram encontrados usos de classes `rose-*`, `amber-*` ou `orange-*` em `src/`.

Evidências:

- Tokens conferidos em `src/index.css`: `brand #50963E`, `brand-dark #315C28`, `brand-hover #386E2E`, `brand-light #E8F1E5`.
- Estilos computados no navegador confirmaram fundos verde-escuros em história e contato e verde-claro nas avaliações.
- Contrastes calculados: branco sobre #315C28 = 7,80:1; branco sobre #386E2E = 6,11:1; #315C28 sobre #E8F1E5 = 6,74:1; #315C28 sobre #FFFAF0 = 7,50:1.
- `npm run build` executou `tsc -b` e `vite build` com sucesso.

## Critérios com falha

Nenhum.

## Matriz final

| Critério | Resultado | Evidência |
|---|---|---|
| CA-001 | PASSOU | Logos carregadas no cabeçalho e hero a 390 px e 1440 px, proporções preservadas e sem overflow horizontal. |
| CA-002 | PASSOU | PNG RGBA transparente e recortado; composição sobre #50963E inspecionada após aprovação da variante “Néctar”. |
| CA-003 | PASSOU | Tokens e cores computadas conferidos, cores antigas de destaque ausentes e contrastes acima de 4,5:1. |

## Resultado final

Critérios totais: 3

Aprovados: 3

Falhos: 0

Bloqueados: 0

Status final:

VALIDATED
