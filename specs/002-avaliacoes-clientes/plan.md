# Plano — Avaliações de clientes

## 1. Requisitos Funcionais

### RF-001 — Resumo da avaliação geral

Descrição:

A seção Avaliações deve exibir a média geral de 4,3 estrelas e o total de 143 avaliações.

Origem:

- Objetivo e escopo definidos em `req.md`
- RNF-001 — Responsividade
- RNF-002 — Acessibilidade

### RF-002 — Cards com avaliações fornecidas

Descrição:

A seção deve exibir exatamente os três cards fornecidos, cada qual com nota de 5 estrelas, nome e comentário correspondentes aos dados registrados em `req.md`. O texto dos nomes e comentários deve ser preservado exatamente como informado, inclusive capitalização e grafia.

Origem:

- Escopo definido em `req.md`
- D-001 resolvida em `req.md`
- RNF-001 — Responsividade
- RNF-002 — Acessibilidade
- RNF-003 — Consistência visual
- RNF-004 — Manutenibilidade

### RF-003 — Acesso à seção pela navegação

Descrição:

A seção de avaliações deve continuar acessível pelo link Avaliações já existente na navegação principal.

Origem:

- Escopo definido em `req.md`
- RNF-001 — Responsividade
- RNF-002 — Acessibilidade

## 2. Critérios de Aceite

### CA-001 — Média e total exibidos

Relacionado a:

- RF-001

Dado:

Que o visitante acessa a seção Avaliações

Quando:

O resumo da avaliação geral é exibido

Então:

Encontra a média 4,3 estrelas e o total de 143 avaliações, com os valores identificados por texto compreensível.

### CA-002 — Conteúdo exato dos três cards

Relacionado a:

- RF-002

Dado:

Que a seção Avaliações é exibida

Quando:

O visitante percorre os cards de avaliações

Então:

Encontra exatamente três avaliações, cada uma com cinco estrelas, autoria e comentário correspondentes, preservando o conteúdo definido em `req.md`:

1. Maria Aparecida Rodrigues — “Atendimento notal mil.”
2. `Diogo da silva  reis` — “Excelente sorveteria, muito boa mesmo. É tradicional e muito antiga. Já fui na época da escola, há 16 anos. Qualidade máxima!”
3. Adriana dias rodrigues ribeiro — “Sorvetes variados e saborosos! Preços acessíveis em opções de embalagens de 5 e 10 litros. Experimente o sabor ninho trufado e você irá se surpreender!”

### CA-003 — Nota compreensível por tecnologia assistiva

Relacionado a:

- RF-001
- RF-002

Dado:

Que o visitante usa tecnologia assistiva para navegar pela seção

Quando:

O resumo ou uma avaliação é anunciado

Então:

A média geral e a nota de cada avaliação são identificáveis como valores de estrelas, e cada comentário pode ser associado à sua autoria.

### CA-004 — Layout adaptável

Relacionado a:

- RF-001
- RF-002
- RF-003

Dado:

Que a página é visualizada em viewport móvel de 360 px e desktop de 1280 px

Quando:

O visitante acessa a seção de avaliações

Então:

O resumo e os três cards permanecem legíveis, sem rolagem horizontal da página.

### CA-005 — Navegação para avaliações

Relacionado a:

- RF-003

Dado:

Que a página foi carregada

Quando:

O visitante ativa o link Avaliações na navegação por mouse ou teclado

Então:

É levado à seção que contém o resumo da nota e os três cards.

### CA-006 — Conteúdo estático sem serviço externo

Relacionado a:

- RF-002

Dado:

Que a página é carregada sem depender de plataforma de avaliações externa

Quando:

A seção Avaliações é apresentada

Então:

O resumo e os três comentários definidos em `req.md` são exibidos como conteúdo do site, sem exigir integração ou coleta externa.

## 3. Matriz de Rastreabilidade

| RNF | RF | CA |
|---|---|---|
| RNF-001 — Responsividade | RF-001 | CA-001, CA-004 |
| RNF-001 — Responsividade | RF-002 | CA-002, CA-004 |
| RNF-001 — Responsividade | RF-003 | CA-004, CA-005 |
| RNF-002 — Acessibilidade | RF-001 | CA-001, CA-003 |
| RNF-002 — Acessibilidade | RF-002 | CA-002, CA-003 |
| RNF-002 — Acessibilidade | RF-003 | CA-005 |
| RNF-003 — Consistência visual | RF-002 | CA-004 |
| RNF-004 — Manutenibilidade | RF-002 | CA-006 |

## 4. Condição de Conclusão

- [x] Todos os RF definidos
- [x] Todos os RF possuem ao menos um CA
- [x] Critérios objetivos e verificáveis
- [x] Matriz de rastreabilidade completa
