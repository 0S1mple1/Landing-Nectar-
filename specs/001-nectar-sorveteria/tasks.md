# Tasks — Landing page da Néctar Sorveteria

## TASK-001 — Configurar aplicação e metadados institucionais

Status: CONCLUIDA

Requisitos:

- RF-008

Critérios de aceite:

- CA-009

Descrição:

Preparar a estrutura de aplicação frontend com React e TypeScript, configurar Tailwind CSS, scripts de desenvolvimento e build e prover o ponto de entrada da aplicação. Definir também título e descrição institucionais no documento HTML.

Arquivos esperados:

- `package.json`
- arquivo(s) de configuração do build e Tailwind CSS
- `index.html`
- `src/main.tsx`
- `src/index.css`
- configuração TypeScript

Dependências:

- Nenhuma

Definição de pronto:

- A aplicação inicia pelo script documentado no `package.json`.
- A compilação de produção conclui sem erros de TypeScript.
- Classes Tailwind são processadas no CSS produzido.
- O documento contém título e descrição não vazios e relevantes à Néctar Sorveteria, sem informações não fornecidas.

---

## TASK-002 — Criar estrutura da página, navegação e apresentação inicial

Status: CONCLUIDA

Requisitos:

- RF-001
- RF-002

Critérios de aceite:

- CA-001
- CA-002

Descrição:

Criar a estrutura principal da landing page em português, incluindo cabeçalho com navegação por âncoras para Home, História, Serviços, Avaliações, Contato e Localização, além da apresentação inicial da empresa. Usar elementos semânticos e garantir que a navegação possa ser operada por teclado.

Arquivos esperados:

- `src/App.tsx`
- `src/components/Header.tsx`
- `src/components/Hero.tsx`

Dependências:

- TASK-001

Definição de pronto:

- Os seis links de navegação apontam para seções com identificadores correspondentes.
- O nome da empresa e uma apresentação baseada apenas nos fatos de `req.md` são exibidos.
- Links e controles de navegação são focáveis e utilizáveis por teclado.

---

## TASK-003 — Apresentar história, produtos e serviços

Status: CONCLUIDA

Requisitos:

- RF-003
- RF-004

Critérios de aceite:

- CA-003
- CA-004

Descrição:

Implementar as seções História e Serviços com a tradição local, produção própria de sorvetes e picolés, linhas artesanais, sabor Ninho Trufado e distribuição e revenda regional, sem criar fatos adicionais.

Arquivos esperados:

- `src/components/StorySection.tsx`
- `src/components/ServicesSection.tsx`
- `src/App.tsx`

Dependências:

- TASK-002

Definição de pronto:

- A navegação leva às seções História e Serviços.
- Todos os fatos definidos em `req.md` para essas seções aparecem em conteúdo textual.
- Não são acrescentados datas, acontecimentos, produtos ou serviços não fornecidos.

---

## TASK-004 — Criar seção de avaliações editável manualmente

Status: CONCLUIDA

Requisitos:

- RF-005

Critérios de aceite:

- CA-005

Descrição:

Implementar a seção Avaliações e manter os registros em uma estrutura de conteúdo local simples que a empresa possa editar manualmente. Não inventar citações, nomes, notas ou atribuições a plataformas. Exibir somente avaliações fornecidas pela empresa.

Arquivos esperados:

- `src/components/ReviewsSection.tsx`
- `src/data/reviews.ts`
- `src/App.tsx`

Dependências:

- TASK-002

Definição de pronto:

- A seção pode renderizar avaliações adicionadas manualmente à estrutura local.
- A versão inicial não contém depoimentos ou avaliações fictícios.
- A seção continua presente e acessível quando não há avaliações cadastradas.

---

## TASK-005 — Implementar formulário de contato pelo WhatsApp

Status: CONCLUIDA

Requisitos:

- RF-006

Critérios de aceite:

- CA-006
- CA-007

Descrição:

Criar formulário com campos de nome e mensagem. Validar os campos, montar uma mensagem pré-preenchida com os dados fornecidos e abrir o WhatsApp no número `5562991267068` para o visitante revisar e enviar. Não enviar nem armazenar os dados no site; informar ao usuário que o contato será iniciado fora da página.

Arquivos esperados:

- `src/components/ContactForm.tsx`
- `src/App.tsx`

Dependências:

- TASK-002

Definição de pronto:

- Nome e mensagem possuem rótulos associados e validação adequada.
- O envio explícito direciona ao número configurado com texto codificado corretamente na URL do WhatsApp.
- Os controles são operáveis por teclado e o visitante é informado sobre a abertura do WhatsApp.
- Nenhuma integração ou armazenamento externo de dados pessoais é adicionado.

---

## TASK-006 — Exibir endereço e mapa incorporado

Status: CONCLUIDA

Requisitos:

- RF-007

Critérios de aceite:

- CA-008
- CA-011

Descrição:

Criar a seção Localização com o endereço e o iframe do Google Maps fornecido em `req.md`. Dimensionar o mapa para se adaptar à largura do conteúdo e carregá-lo sem bloquear as demais seções.

Arquivos esperados:

- `src/components/LocationSection.tsx`
- `src/App.tsx`

Dependências:

- TASK-002

Definição de pronto:

- Endereço e iframe correspondem às informações fornecidas em `req.md`.
- O mapa adapta-se ao contêiner em larguras móveis e desktop.
- O iframe usa carregamento lazy e possui título acessível.
- A página e seu conteúdo permanecem acessíveis enquanto o mapa carrega.

---

## TASK-007 — Validar responsividade, acessibilidade e integração da página

Status: CONCLUIDA

Requisitos:

- RF-001
- RF-005
- RF-006
- RF-007

Critérios de aceite:

- CA-001
- CA-005
- CA-006
- CA-007
- CA-008
- CA-010
- CA-011

Descrição:

Revisar a página completa e corrigir problemas de integração ou apresentação em viewports de 360 px e 1280 px, incluindo navegação, formulário, seção de avaliações e mapa. Executar o build e verificações disponíveis e registrar/corrigir falhas introduzidas pelas tasks.

Arquivos esperados:

- `src/App.tsx`
- componentes em `src/components/`
- `src/index.css`
- arquivos de configuração ou scripts, caso sejam necessários para corrigir falhas verificadas

Dependências:

- TASK-003
- TASK-004
- TASK-005
- TASK-006

Definição de pronto:

- A página não apresenta rolagem horizontal nos viewports de 360 px e 1280 px.
- Navegação, campos e ações podem ser acessados por teclado, e campos do formulário têm rótulos associados.
- A página compila sem erros e os critérios CA-001, CA-005, CA-006, CA-007, CA-008, CA-010 e CA-011 foram verificados.

---

## Matriz de Tasks

| RF | CA | Task | Status |
|---|---|---|---|
| RF-001 | CA-001 | TASK-002, TASK-007 | CONCLUIDA |
| RF-001 | CA-010 | TASK-007 | CONCLUIDA |
| RF-002 | CA-002 | TASK-002 | CONCLUIDA |
| RF-003 | CA-003 | TASK-003 | CONCLUIDA |
| RF-004 | CA-004 | TASK-003 | CONCLUIDA |
| RF-005 | CA-005 | TASK-004, TASK-007 | CONCLUIDA |
| RF-006 | CA-006 | TASK-005, TASK-007 | CONCLUIDA |
| RF-006 | CA-007 | TASK-005, TASK-007 | CONCLUIDA |
| RF-007 | CA-008 | TASK-006, TASK-007 | CONCLUIDA |
| RF-007 | CA-011 | TASK-006, TASK-007 | CONCLUIDA |
| RF-008 | CA-009 | TASK-001 | CONCLUIDA |
