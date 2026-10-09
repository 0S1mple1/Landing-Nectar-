# Néctar Sorveteria

Landing page institucional da Néctar Sorveteria, em Anápolis. O site apresenta a empresa, seus produtos e serviços, avaliações de clientes, contato pelo WhatsApp e localização.

## Tecnologias

- React 19
- TypeScript em modo estrito
- Vite 6 para desenvolvimento e build
- Tailwind CSS 4 para estilos

## Requisitos

- Node.js e npm instalados.

As versões das dependências do projeto estão registradas em `package-lock.json`.

## Como executar

Na raiz do projeto, instale as dependências:

```bash
npm ci
```

Configure o número de WhatsApp para o formulário:

```bash
cp .env.example .env
```

Edite `.env` e informe o número em formato internacional aceito pelo WhatsApp, somente com dígitos e sem `+`, espaços ou pontuação. Inclua DDI, DDD e número. Por exemplo, substitua o valor vazio de `VITE_WHATSAPP_NUMBER` pelo número da empresa.

> Variáveis com prefixo `VITE_` são incorporadas ao código entregue ao navegador e, portanto, públicas. Use essa variável somente para o número público de contato; nunca coloque senhas, tokens ou outros segredos nela. O arquivo `.env` local está ignorado pelo Git e não deve ser versionado.

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite informa no terminal o endereço local, normalmente `http://localhost:5173`. Abra esse endereço no navegador. O servidor recarrega a página quando os arquivos são alterados.

Se `VITE_WHATSAPP_NUMBER` estiver vazia, ausente ou contiver caracteres além de dígitos, o formulário informa que o contato está indisponível e não redireciona para o WhatsApp.

## Build de produção

Para verificar os tipos TypeScript e gerar os arquivos otimizados:

```bash
npm run build
```

O build é salvo em `dist/`. Para servir localmente a versão gerada:

```bash
npm run preview
```

O comando `preview` serve o build existente; execute `npm run build` novamente após alterações antes de conferir a versão atualizada.

## Arquitetura

A aplicação é uma página única renderizada no cliente. O HTML inicial define metadados básicos e o elemento `#root`; o React monta a aplicação nesse elemento. Não há backend próprio, banco de dados ou roteador: a navegação entre áreas da página usa âncoras HTML.

```text
index.html                 Documento HTML e metadados da página
src/
├── main.tsx               Inicializa React e importa os estilos globais
├── App.tsx                 Composição e ordem das seções da landing page
├── index.css               Entrada do Tailwind CSS
├── components/
│   ├── Header.tsx          Cabeçalho e navegação por âncoras
│   ├── Hero.tsx            Apresentação inicial
│   ├── StorySection.tsx    História da sorveteria
│   ├── ServicesSection.tsx Produtos e serviços
│   ├── ReviewsSection.tsx  Resumo e cards de avaliações
│   ├── ContactForm.tsx     Formulário que inicia conversa no WhatsApp
│   └── LocationSection.tsx Endereço e mapa incorporado
└── data/
    └── reviews.ts          Dados estáticos e tipos das avaliações
```

### Inicialização e composição

`src/main.tsx` cria a raiz React dentro do elemento `#root` de `index.html`, ativa `StrictMode` e importa `src/index.css`. O componente `App` organiza o cabeçalho e as seções principais na ordem exibida. Cada seção é um componente React independente em `src/components/`.

### Navegação

Os links do cabeçalho apontam para os identificadores das seções (`#home`, `#historia`, `#servicos`, `#avaliacoes`, `#contato` e `#localizacao`). Isso mantém a navegação simples, sem dependência de roteador.

### Conteúdo e integrações externas

- Serviços e conteúdo institucional são definidos nos componentes correspondentes.
- A média, o total e as avaliações são dados estáticos em `src/data/reviews.ts`; para atualizar avaliações, altere os dados nesse arquivo.
- O formulário de contato valida nome e mensagem no navegador, monta um link `wa.me` com o texto codificado e redireciona o visitante para o WhatsApp. O site não armazena nem envia esses dados a um backend.
- A localização usa um iframe do Google Maps com carregamento adiado (`loading="lazy"`).

### Estilos

Os estilos são compostos principalmente por classes utilitárias Tailwind nos componentes. `src/index.css` carrega o Tailwind e `vite.config.ts` configura os plugins React e Tailwind do Vite.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor local de desenvolvimento |
| `npm run build` | Verifica os tipos TypeScript e gera o build em `dist/` |
| `npm run preview` | Serve localmente o build de produção |

Não há scripts de teste automatizado ou lint configurados no `package.json`.

## Publicação

Configure `VITE_WHATSAPP_NUMBER` nas variáveis de ambiente do serviço de build/hospedagem antes de executar o build. A variável é lida durante o build Vite; configurá-la somente depois que os arquivos estáticos foram gerados não altera o bundle existente.

Gere o build com `npm run build` e publique o conteúdo de `dist/` em um serviço de hospedagem de arquivos estáticos. Como a navegação é baseada em âncoras na mesma página, não é necessário configurar regras de fallback para rotas de aplicação.

## Especificações do projeto

O fluxo de Specification-Driven Development (SDD) e suas instruções estão em `.sdd/`. As especificações funcionais e os registros de validação ficam em `specs/`.
