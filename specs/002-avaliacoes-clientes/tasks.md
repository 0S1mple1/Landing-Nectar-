# Tasks — Avaliações de clientes

## TASK-001

### Título

Cadastrar dados estáticos das avaliações e do resumo

### Status

CONCLUIDA

### Requisitos

- RF-001
- RF-002

### Critérios de aceite

- CA-001
- CA-002
- CA-006

### Descrição

Estender a tipagem e os dados estáticos de avaliações para representar a média geral de 4,3, o total de 143 avaliações e exatamente as três avaliações com nota 5, autoria e comentário definidos em `req.md`. Preservar nomes e comentários exatamente como especificados.

### Arquivos esperados

- `src/data/reviews.ts`

### Dependências

- Nenhuma.

### Definição de pronto

- Os dados do resumo e das três avaliações estão tipados em TypeScript.
- Os valores, quantidade, grafia, capitalização e pontuações correspondem ao `req.md`.
- Nenhuma integração externa ou persistência dinâmica foi introduzida.
- A verificação de tipos/build passa.

## TASK-002

### Título

Exibir resumo e cards acessíveis na seção de avaliações

### Status

CONCLUIDA

### Requisitos

- RF-001
- RF-002
- RF-003

### Critérios de aceite

- CA-001
- CA-002
- CA-003
- CA-004
- CA-005
- CA-006

### Descrição

Atualizar a seção Avaliações para apresentar a média geral e o total de avaliações, além dos três cards consumindo os dados tipados. Cada card deve expor visualmente sua nota em cinco estrelas, associar semanticamente autoria, comentário e nota, e manter o padrão visual e responsivo da landing page. Preservar o identificador da seção utilizado pelo link de navegação existente.

### Arquivos esperados

- `src/components/ReviewsSection.tsx`

### Dependências

- TASK-001 — Cadastrar dados estáticos das avaliações e do resumo.

### Definição de pronto

- A seção apresenta os valores 4,3 e 143, e exatamente os três cards especificados, com cinco estrelas cada.
- As notas são compreensíveis por tecnologias assistivas, e autoria e comentário permanecem associados.
- O layout permanece utilizável em viewport de 360 px e 1280 px sem rolagem horizontal.
- O link da navegação continua levando à seção `avaliacoes`.
- A verificação de tipos/build passa.
