# Requisitos — Landing page da Néctar Sorveteria

## 1. Contexto

A Néctar Sorveteria precisa de uma landing page para apresentar a empresa e seus serviços, exibir avaliações fornecidas manualmente e facilitar o contato de clientes pelo WhatsApp. O usuário forneceu o link da empresa no Google Maps e um iframe do Google Maps para a localização. O repositório ainda não contém uma aplicação frontend.

## 2. Objetivo

Definir os requisitos para uma landing page em português do Brasil que apresente a Néctar Sorveteria, reúna informações sobre sua história, serviços e avaliações, permita iniciar contato pelo WhatsApp por meio de um formulário e mostre sua localização no mapa.

## 3. Escopo

### Incluído

- Landing page de apresentação institucional da Néctar Sorveteria.
- Navegação no topo com links para as seções da página.
- Seção inicial (home) de apresentação da empresa.
- Seção sobre a história da empresa.
- Seção para apresentação dos serviços.
- Seção de avaliações dos usuários com conteúdo a ser fornecido/inserido manualmente pela empresa.
- Formulário para iniciar contato pelo WhatsApp.
- Seção de localização usando o iframe do Google Maps fornecido pelo usuário.
- Conteúdo e interface em português do Brasil.

### Não incluído

- Criação ou gestão automática de avaliações.
- Painel administrativo ou sistema de gerenciamento de conteúdo.
- Definição de integrações ou funcionalidades não mencionadas, como pagamentos ou pedidos online.
- Implementação da aplicação nesta etapa de requisitos.

## 4. Requisitos Não Funcionais

### RNF-001 — Responsividade

Descrição:

A landing page deverá ser utilizável em dispositivos móveis e desktops, incluindo navegação, formulário e mapa.

### RNF-002 — Acessibilidade

Descrição:

O conteúdo deverá usar estrutura semântica, controles navegáveis por teclado, rótulos associados aos campos do formulário e contraste legível.

### RNF-003 — Desempenho

Descrição:

A página deverá evitar recursos desnecessários e carregar o mapa de forma que não impeça a leitura e interação com o restante do conteúdo.

### RNF-004 — SEO e compartilhamento

Descrição:

A página deverá permitir metadados básicos de título e descrição, com conteúdo textual legível por mecanismos de busca.

### RNF-005 — Privacidade e segurança

Descrição:

O site não deverá armazenar dados pessoais do formulário. Após o envio explícito pelo visitante, os dados fornecidos poderão ser incluídos na mensagem pré-preenchida encaminhada ao WhatsApp. A interface deverá informar que o contato será iniciado fora do site.

### RNF-006 — Manutenibilidade de conteúdo

Descrição:

As avaliações deverão poder ser inseridas manualmente pela empresa, sem depender de integração automática com plataformas de avaliação.

## 5. Restrições Técnicas

- O repositório ainda não possui estrutura de aplicação, configuração de build ou testes frontend identificáveis.
- O `package.json` contém apenas a dependência `sddkit-development`; o script `npm test` é um placeholder que termina com erro.
- A landing page deverá ser implementada com React e TypeScript, utilizando Tailwind CSS para estilização.
- A localização deverá usar o iframe fornecido pelo usuário, sujeito a validação durante a implementação.
- As informações sobre a história, os serviços, o endereço e o número de WhatsApp foram fornecidas durante o levantamento de requisitos e estão registradas neste documento.

## 6. Tecnologias

| Categoria | Tecnologia |
|---|---|
| Framework | React |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS |
| Testes | Não configurados; `npm test` é placeholder |
| Build | Não configurado |

## 7. Dúvidas

### D-001

Pergunta:

Qual é o número de WhatsApp da Néctar Sorveteria, incluindo o código do país e o DDD, que deverá receber as mensagens do formulário?

Status: RESOLVIDA

Resposta:

55 62 99126-7068

---

### D-002

Pergunta:

Como o formulário deve iniciar o contato: abrir uma conversa no WhatsApp com uma mensagem preenchida para o cliente revisar e enviar, ou usar outro fluxo?

Status: RESOLVIDA

Resposta:

Ao enviar o formulário, abrir uma conversa no WhatsApp com uma mensagem preenchida para o cliente revisar e enviar.

---

### D-003

Pergunta:

Quais informações ou textos aprovados devem ser usados para contar a história da Néctar Sorveteria e apresentar seus serviços?

Status: RESOLVIDA

Resposta:

Endereço informado: Rua Mauá, nº 767, região central, próximo à Vila São João. A empresa produz seus próprios sorvetes e picolés, incluindo sabores populares como Ninho Trufado e linhas artesanais. Também distribui e revende produtos em pontos da região. É reconhecida há décadas como ponto de encontro de famílias e jovens da cidade, mantendo apelo afetivo na memória dos anapolinos.

---

### D-004

Pergunta:

Quais campos o formulário de contato deve solicitar antes de abrir o WhatsApp?

Status: RESOLVIDA

Resposta:

Nome e mensagem.

---

## 8. Condição de Conclusão

- [x] Contexto definido
- [x] Objetivo definido
- [x] Escopo definido
- [x] Requisitos não funcionais definidos
- [x] Restrições identificadas
- [x] Todas as dúvidas resolvidas

Dúvidas pendentes: 0
