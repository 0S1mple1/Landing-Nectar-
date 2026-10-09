# Plano — Landing page da Néctar Sorveteria

## 1. Contexto

Landing page institucional, em português do Brasil, para apresentar a Néctar Sorveteria, sua história, seus serviços, avaliações inseridas manualmente e localização. A página permitirá que visitantes preencham um formulário e iniciem contato pelo WhatsApp. A implementação deverá usar React, TypeScript e Tailwind CSS.

## 2. Requisitos Funcionais

### RF-001 — Navegação por seções

Descrição:

A página deve exibir navegação no topo com links para as seções Home, História, Serviços, Avaliações, Contato e Localização. Cada link deve levar à seção correspondente.

Origem:

- Escopo definido em `req.md`
- RNF-001 — Responsividade
- RNF-002 — Acessibilidade

### RF-002 — Apresentação inicial da empresa

Descrição:

A seção Home deve apresentar a Néctar Sorveteria e contextualizar a atividade da empresa, sem acrescentar fatos não fornecidos.

Origem:

- Objetivo e escopo definidos em `req.md`
- RNF-004 — SEO e compartilhamento

### RF-003 — História da Néctar Sorveteria

Descrição:

A página deve apresentar a história e a tradição local da sorveteria com base nas informações fornecidas: reconhecimento há décadas como ponto de encontro de famílias e jovens da cidade e seu apelo afetivo na memória dos anapolinos.

Origem:

- D-003 resolvida em `req.md`
- RNF-004 — SEO e compartilhamento

### RF-004 — Apresentação dos serviços e produtos

Descrição:

A página deve apresentar a produção própria de sorvetes e picolés, as linhas artesanais, o sabor Ninho Trufado e a distribuição e revenda para pontos da região.

Origem:

- D-003 resolvida em `req.md`
- RNF-004 — SEO e compartilhamento
- RNF-006 — Manutenibilidade de conteúdo

### RF-005 — Exibição de avaliações inseridas manualmente

Descrição:

A página deve ter uma seção de avaliações cujo conteúdo possa ser inserido manualmente pela empresa. Não deve gerar avaliações nem depender de integração automática com plataformas externas.

Origem:

- Escopo definido em `req.md`
- RNF-006 — Manutenibilidade de conteúdo

### RF-006 — Formulário de contato pelo WhatsApp

Descrição:

A página deve permitir que o visitante informe nome e mensagem e envie o formulário para iniciar uma conversa com a Néctar Sorveteria no WhatsApp, usando o número `5562991267068` e uma mensagem pré-preenchida com esses dados para revisão e envio pelo próprio visitante. A interface deve informar que o contato será iniciado fora do site.

Origem:

- Escopo definido em `req.md`
- D-001, D-002 e D-004 resolvidas em `req.md`
- RNF-002 — Acessibilidade
- RNF-005 — Privacidade e segurança

### RF-007 — Exibição da localização

Descrição:

A página deve apresentar a localização da Néctar Sorveteria na Rua Mauá, nº 767, região central, próximo à Vila São João, e incorporar o iframe do Google Maps fornecido em `req.md`.

Origem:

- Escopo e D-003 resolvida em `req.md`
- RNF-001 — Responsividade
- RNF-003 — Desempenho

### RF-008 — Metadados da página

Descrição:

A página deve definir metadados básicos de título e descrição que identifiquem a Néctar Sorveteria e o propósito institucional da landing page.

Origem:

- RNF-004 — SEO e compartilhamento

## 3. Critérios de Aceite

### CA-001 — Navegação para todas as seções

Relacionado a:

- RF-001

Critério:

> Dado que a página foi carregada
>
> Quando o visitante ativa cada link da navegação
>
> Então é direcionado à seção correspondente entre Home, História, Serviços, Avaliações, Contato e Localização, por mouse ou teclado.

Status: PENDENTE

### CA-002 — Apresentação na Home

Relacionado a:

- RF-002

Critério:

> Dado que o visitante abre a página
>
> Quando visualiza a seção Home
>
> Então encontra o nome Néctar Sorveteria e uma apresentação textual da empresa baseada nos fatos registrados em `req.md`.

Status: PENDENTE

### CA-003 — História com fatos fornecidos

Relacionado a:

- RF-003

Critério:

> Dado que o visitante acessa a seção História
>
> Quando lê o conteúdo da seção
>
> Então encontra a tradição local da sorveteria descrita com as informações aprovadas em `req.md`, sem datas, nomes ou acontecimentos inventados.

Status: PENDENTE

### CA-004 — Serviços e produtos

Relacionado a:

- RF-004

Critério:

> Dado que o visitante acessa a seção Serviços
>
> Quando lê o conteúdo da seção
>
> Então encontra a produção própria de sorvetes e picolés, as linhas artesanais, o sabor Ninho Trufado e a distribuição e revenda regional.

Status: PENDENTE

### CA-005 — Avaliações manuais sem conteúdo inventado

Relacionado a:

- RF-005

Critério:

> Dado que a seção Avaliações é exibida
>
> Quando existem avaliações fornecidas manualmente pela empresa
>
> Então a seção apresenta esse conteúdo sem atribuir avaliações não fornecidas a clientes ou plataformas externas.

Status: PENDENTE

### CA-006 — Envio do formulário para o WhatsApp

Relacionado a:

- RF-006

Critério:

> Dado que o visitante preenche e envia o formulário
>
> Quando a ação de envio é concluída
>
> Então é aberta uma conversa com o número `5562991267068` no WhatsApp, contendo uma mensagem pré-preenchida com o nome e a mensagem informados para revisão e envio pelo visitante, e a interface informa que o contato ocorre fora do site.

Status: PENDENTE

### CA-007 — Controles acessíveis do formulário

Relacionado a:

- RF-006

Critério:

> Dado que o visitante navega pelo formulário
>
> Quando usa teclado ou tecnologia assistiva para identificar e preencher os campos
>
> Então cada campo tem um rótulo associado e todos os controles e a ação de envio são operáveis por teclado.

Status: PENDENTE

### CA-008 — Localização e mapa

Relacionado a:

- RF-007

Critério:

> Dado que o visitante acessa a seção Localização
>
> Quando a seção é carregada
>
> Então encontra o endereço Rua Mauá, nº 767, região central, próximo à Vila São João, e o mapa incorporado pelo iframe fornecido em `req.md`.

Status: PENDENTE

### CA-009 — Metadados institucionais

Relacionado a:

- RF-008

Critério:

> Dado que um navegador ou mecanismo de busca carrega a página
>
> Quando consulta os metadados do documento
>
> Então encontra título e descrição que identificam a Néctar Sorveteria e a página institucional.

Status: PENDENTE

### CA-010 — Layout responsivo

Relacionado a:

- RF-001
- RF-006
- RF-007

Critério:

> Dado que a página é visualizada em viewport móvel de 360 px de largura e em viewport desktop de 1280 px de largura
>
> Quando o visitante percorre navegação, formulário e mapa
>
> Então o conteúdo permanece legível e utilizável, sem rolagem horizontal da página.

Status: PENDENTE

### CA-011 — Carregamento do mapa sem bloquear o conteúdo

Relacionado a:

- RF-007

Critério:

> Dado que a página está carregando
>
> Quando o mapa incorporado ainda não terminou de carregar
>
> Então o restante do conteúdo da landing page permanece disponível para leitura e interação.

Status: PENDENTE

## 4. Matriz de Rastreabilidade

| RNF | RF | CA |
|---|---|---|
| RNF-001 | RF-001 | CA-001, CA-010 |
| RNF-001 | RF-007 | CA-008, CA-010 |
| RNF-002 | RF-001 | CA-001 |
| RNF-002 | RF-006 | CA-006, CA-007 |
| RNF-003 | RF-007 | CA-011 |
| RNF-004 | RF-002 | CA-002 |
| RNF-004 | RF-003 | CA-003 |
| RNF-004 | RF-004 | CA-004 |
| RNF-004 | RF-008 | CA-009 |
| RNF-005 | RF-006 | CA-006 |
| RNF-006 | RF-004 | CA-004 |
| RNF-006 | RF-005 | CA-005 |

## 5. Condição de Conclusão

- [x] Todos os RF definidos
- [x] Todos os RF possuem CA
- [x] Critérios são verificáveis
- [x] Matriz completa
