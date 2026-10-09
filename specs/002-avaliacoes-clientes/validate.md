# Validação — Avaliações de clientes

## Resultado

APROVADO

## Resumo

Todos os 6 critérios de aceite passaram. O build e a verificação de tipos foram concluídos com sucesso. A seção foi verificada no navegador em viewport configurado para 360 px e 1280 px, sem overflow horizontal; os três cards, as notas acessíveis e a navegação por teclado foram confirmados.

## Validação individual

### CA-001 — Média e total exibidos

Relacionado a:

- RF-001

Comportamento esperado:

Exibir a média 4,3 de 5 estrelas e o total de 143 avaliações, com identificação textual.

Comportamento encontrado:

O resumo renderizado exibe “4,3 de 5 estrelas” e “143 avaliações”.

Evidência:

- Navegador, seção `#avaliacoes`: texto do resumo contém `4,3 de 5 estrelas` e `143 avaliações`.
- `npm run build`: passou.

Resultado: PASSOU

### CA-002 — Conteúdo exato dos três cards

Relacionado a:

- RF-002

Comportamento esperado:

Exibir exatamente três avaliações, cada uma com cinco estrelas, autoria e comentário fornecidos em `req.md`.

Comportamento encontrado:

Foram encontrados exatamente três elementos `figure`. Os nomes, comentários e notas renderizados no DOM correspondem aos dados de `req.md`; cada nota tem o rótulo acessível “5 de 5 estrelas”. O DOM preserva inclusive os dois espaços no nome “Diogo da silva  reis”; a apresentação visual normaliza espaços consecutivos conforme o comportamento padrão de HTML.

Evidência:

- Navegador, `#avaliacoes figure`: contagem = 3.
- Conteúdo DOM conferido para cada autoria, comentário e rótulo de cinco estrelas.
- `src/data/reviews.ts`: lista estática contém os três dados fornecidos.

Resultado: PASSOU

### CA-003 — Nota compreensível por tecnologia assistiva

Relacionado a:

- RF-001
- RF-002

Comportamento esperado:

Identificar a média e cada nota em estrelas para tecnologia assistiva, associando comentários às autorias.

Comportamento encontrado:

O resumo identifica a média e o total em texto. Cada conjunto visual de estrelas tem `role="img"` e rótulo “5 de 5 estrelas”; os comentários e autoria estão agrupados semanticamente em `figure`, `blockquote` e `figcaption`.

Evidência:

- Snapshot de acessibilidade do navegador anuncia cada conjunto de estrelas como “5 de 5 estrelas” e mantém comentário e autoria no mesmo `figure`.
- `src/components/ReviewsSection.tsx`: estrutura semântica e rótulo acessível.

Resultado: PASSOU

### CA-004 — Layout adaptável

Relacionado a:

- RF-001
- RF-002
- RF-003

Comportamento esperado:

Exibir resumo e cards legíveis em viewports móveis de 360 px e desktop de 1280 px, sem rolagem horizontal.

Comportamento encontrado:

Nas viewports configuradas de 360 px e 1280 px, a largura do documento correspondeu à largura útil do cliente, sem overflow horizontal. Os três cards estavam presentes em ambas as larguras.

Evidência:

- Viewport 360 px: `document.documentElement.scrollWidth` = `clientWidth` = 345 px; os 15 px restantes correspondem à barra de rolagem vertical do navegador.
- Viewport 1280 px: `scrollWidth` = `clientWidth` = 1265 px; diferença igualmente atribuível à barra de rolagem vertical.
- Contagem de cards em ambas as viewports: 3.

Resultado: PASSOU

### CA-005 — Navegação para avaliações

Relacionado a:

- RF-003

Comportamento esperado:

Ativar por mouse ou teclado o link Avaliações e chegar à seção que contém o resumo e os três cards.

Comportamento encontrado:

O link aponta para `#avaliacoes`. Ao focar o link e pressionar Enter, o fragmento da URL tornou-se `#avaliacoes` e a seção correspondente existe na página.

Evidência:

- Navegador: link `a[href="#avaliacoes"]` presente.
- Navegação por teclado: Enter resultou em `location.hash === "#avaliacoes"`.
- A seção de destino contém o resumo e três cards.

Resultado: PASSOU

### CA-006 — Conteúdo estático sem serviço externo

Relacionado a:

- RF-002

Comportamento esperado:

Exibir resumo e comentários sem depender de integração ou coleta externa.

Comportamento encontrado:

Os dados são declarados estaticamente em `src/data/reviews.ts` e importados pela seção. O build não exige serviço externo.

Evidência:

- `src/data/reviews.ts`: resumo e três avaliações definidos em código.
- `src/components/ReviewsSection.tsx`: renderização a partir dos dados importados.
- `npm run build`: concluído com sucesso; não há integração externa de avaliações.

Resultado: PASSOU

## Critérios falhos

Nenhum.

## Matriz final

| Critério | Resultado |
|---|---|
| CA-001 | PASSOU |
| CA-002 | PASSOU |
| CA-003 | PASSOU |
| CA-004 | PASSOU |
| CA-005 | PASSOU |
| CA-006 | PASSOU |

Total: 6/6 passaram; 0 falhos; 0 bloqueados.
